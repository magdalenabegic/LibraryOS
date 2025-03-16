"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Search,
  Columns,
  LayoutGrid,
  AlertCircle,
  CheckCircle2,
  Armchair,
  TableIcon,
  Laptop,
  Users,
  CircleDashed,
} from "lucide-react"

export function LocationsPage() {
  const [activeFloor, setActiveFloor] = useState("floor1")
  const [activeView, setActiveView] = useState("visual")
  const [searchQuery, setSearchQuery] = useState("")

  // Location types with their corresponding icons
  const locationIcons = {
    shelf: BookOpen,
    desk: Armchair,
    table: TableIcon,
    computer: Laptop,
    studyRoom: Users,
    returnCart: CircleDashed,
  }

  // Sample location data
  const locationData = {
    floor1: [
      {
        id: "A1",
        type: "shelf",
        name: "Fiction Shelf A1",
        books: 124,
        available: 98,
        status: "normal",
        categories: ["Fiction", "Novels", "Classics"],
        lastScanned: "Today, 10:23 AM",
      },
      {
        id: "A2",
        type: "shelf",
        name: "Fiction Shelf A2",
        books: 156,
        available: 132,
        status: "normal",
        categories: ["Fiction", "Fantasy", "Sci-Fi"],
        lastScanned: "Today, 9:45 AM",
      },
      {
        id: "A3",
        type: "shelf",
        name: "Fiction Shelf A3",
        books: 89,
        available: 76,
        status: "attention",
        categories: ["Fiction", "Mystery", "Thriller"],
        lastScanned: "Today, 11:30 AM",
      },
      {
        id: "B1",
        type: "shelf",
        name: "Non-Fiction Shelf B1",
        books: 112,
        available: 94,
        status: "normal",
        categories: ["Non-Fiction", "History", "Biography"],
        lastScanned: "Today, 8:20 AM",
      },
      {
        id: "B2",
        type: "shelf",
        name: "Non-Fiction Shelf B2",
        books: 145,
        available: 120,
        status: "normal",
        categories: ["Non-Fiction", "Science", "Technology"],
        lastScanned: "Yesterday, 4:15 PM",
      },
      {
        id: "RA1",
        type: "desk",
        name: "Reading Area 1",
        books: 12,
        available: 12,
        status: "normal",
        categories: ["Reading Desk"],
        lastScanned: "Today, 9:30 AM",
      },
      {
        id: "RA2",
        type: "table",
        name: "Study Table 1",
        books: 8,
        available: 8,
        status: "normal",
        categories: ["Study Area"],
        lastScanned: "Today, 10:45 AM",
      },
      {
        id: "CA1",
        type: "computer",
        name: "Computer Area 1",
        books: 5,
        available: 5,
        status: "normal",
        categories: ["Computer Station"],
        lastScanned: "Today, 11:15 AM",
      },
      {
        id: "SR1",
        type: "studyRoom",
        name: "Study Room 1",
        books: 0,
        available: 0,
        status: "normal",
        categories: ["Group Study"],
        lastScanned: "Today, 8:45 AM",
      },
      {
        id: "RC1",
        type: "returnCart",
        name: "Return Cart 1",
        books: 24,
        available: 24,
        status: "attention",
        categories: ["Returns", "Processing"],
        lastScanned: "Today, 3:10 PM",
      },
    ],
    floor2: [
      {
        id: "C1",
        type: "shelf",
        name: "Reference Shelf C1",
        books: 134,
        available: 134,
        status: "normal",
        categories: ["Reference", "Encyclopedias"],
        lastScanned: "Today, 9:15 AM",
      },
      {
        id: "C2",
        type: "shelf",
        name: "Reference Shelf C2",
        books: 167,
        available: 167,
        status: "attention",
        categories: ["Reference", "Dictionaries", "Atlases"],
        lastScanned: "Yesterday, 5:30 PM",
      },
      {
        id: "D1",
        type: "shelf",
        name: "Children's Shelf D1",
        books: 145,
        available: 120,
        status: "normal",
        categories: ["Children", "Picture Books"],
        lastScanned: "Today, 10:10 AM",
      },
      {
        id: "D2",
        type: "shelf",
        name: "Children's Shelf D2",
        books: 178,
        available: 150,
        status: "normal",
        categories: ["Children", "Young Adult"],
        lastScanned: "Today, 11:45 AM",
      },
      {
        id: "RA3",
        type: "desk",
        name: "Reading Area 2",
        books: 7,
        available: 7,
        status: "normal",
        categories: ["Reading Desk"],
        lastScanned: "Today, 10:30 AM",
      },
      {
        id: "RA4",
        type: "table",
        name: "Study Table 2",
        books: 5,
        available: 5,
        status: "normal",
        categories: ["Study Area"],
        lastScanned: "Today, 9:50 AM",
      },
      {
        id: "CA2",
        type: "computer",
        name: "Computer Area 2",
        books: 3,
        available: 3,
        status: "normal",
        categories: ["Computer Station"],
        lastScanned: "Today, 8:30 AM",
      },
      {
        id: "SR2",
        type: "studyRoom",
        name: "Study Room 2",
        books: 0,
        available: 0,
        status: "normal",
        categories: ["Group Study"],
        lastScanned: "Yesterday, 4:45 PM",
      },
    ],
  }

  // Filter locations based on search query
  const filteredLocations = locationData[activeFloor].filter(
    (location) =>
      location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.categories.some((category) => category.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  // Get icon component based on location type
  const getLocationIcon = (type) => {
    const IconComponent = locationIcons[type] || BookOpen
    return <IconComponent className="h-6 w-6" />
  }

  // Get status icon based on location status
  const getStatusIcon = (status) => {
    return status === "normal" ? (
      <CheckCircle2 className="h-5 w-5 text-green-500" />
    ) : (
      <AlertCircle className="h-5 w-5 text-amber-500" />
    )
  }

  return (
    <main className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">Locations</h1>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search locations..."
              className="pl-8 w-full sm:w-[250px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center border rounded-md p-1">
            <Button
              variant={activeView === "visual" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveView("visual")}
              className="gap-1"
            >
              <LayoutGrid className="h-4 w-4" />
              <span className="hidden sm:inline">Visual</span>
            </Button>
            <Button
              variant={activeView === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveView("list")}
              className="gap-1"
            >
              <Columns className="h-4 w-4" />
              <span className="hidden sm:inline">List</span>
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="floor1" className="mb-6">
        <TabsList>
          <TabsTrigger value="floor1" onClick={() => setActiveFloor("floor1")}>
            Floor 1
          </TabsTrigger>
          <TabsTrigger value="floor2" onClick={() => setActiveFloor("floor2")}>
            Floor 2
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {activeView === "visual" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredLocations.map((location) => (
            <Card
              key={location.id}
              className={`overflow-hidden transition-all hover:shadow-md ${
                location.status === "attention" ? "border-amber-300" : ""
              }`}
            >
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start">
                  <Badge variant={location.type === "shelf" ? "default" : "secondary"} className="mb-2">
                    {location.type}
                  </Badge>
                  {getStatusIcon(location.status)}
                </div>
                <CardTitle className="text-lg">{location.id}</CardTitle>
                <CardDescription className="line-clamp-1">{location.name}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex justify-center items-center py-4">
                  <div className="bg-primary/10 p-4 rounded-full">{getLocationIcon(location.type)}</div>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span>Books:</span>
                  <span className="font-medium">{location.books}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Available:</span>
                  <span>{location.available}</span>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left">
                    <th className="py-3 px-4 font-medium">ID</th>
                    <th className="py-3 px-4 font-medium">Name</th>
                    <th className="py-3 px-4 font-medium">Type</th>
                    <th className="py-3 px-4 font-medium">Books</th>
                    <th className="py-3 px-4 font-medium">Available</th>
                    <th className="py-3 px-4 font-medium">Status</th>
                    <th className="py-3 px-4 font-medium">Last Scanned</th>
                    <th className="py-3 px-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLocations.map((location) => (
                    <tr key={location.id} className="border-b last:border-0">
                      <td className="py-3 px-4 font-medium">{location.id}</td>
                      <td className="py-3 px-4">{location.name}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          {getLocationIcon(location.type)}
                          <span className="capitalize">{location.type}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">{location.books}</td>
                      <td className="py-3 px-4">{location.available}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1">
                          {getStatusIcon(location.status)}
                          <span className="capitalize">{location.status}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">{location.lastScanned}</td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="ghost" size="sm">
                          View Books
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Location Legend</CardTitle>
            <CardDescription>Types of locations in the library</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {Object.entries(locationIcons).map(([type, Icon]) => (
                <div key={type} className="flex flex-col items-center gap-2 p-2 border rounded-md">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium capitalize">{type.replace(/([A-Z])/g, " $1").trim()}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

