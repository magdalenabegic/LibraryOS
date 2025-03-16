"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin } from "lucide-react"

export function BooksByLocation() {
  const [location, setLocation] = useState("all")

  // Sample book data with location information
  const books = [
    {
      id: "BK-12345",
      title: "The Midnight Library",
      author: "Matt Haig",
      location: { type: "shelf", id: "A1", position: "Row 2" },
      rfidStatus: "verified",
      lastScanned: "Today, 10:23 AM",
    },
    {
      id: "BK-12346",
      title: "Project Hail Mary",
      author: "Andy Weir",
      location: { type: "shelf", id: "B3", position: "Row 1" },
      rfidStatus: "verified",
      lastScanned: "Today, 9:45 AM",
    },
    {
      id: "BK-12347",
      title: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      location: { type: "desk", id: "Reading Area 2", position: "Desk 4" },
      rfidStatus: "verified",
      lastScanned: "Today, 11:30 AM",
    },
    {
      id: "BK-12348",
      title: "The Four Winds",
      author: "Kristin Hannah",
      location: { type: "checkout", id: "Member #4582", position: "Due Mar 15" },
      rfidStatus: "verified",
      lastScanned: "Mar 1, 2:15 PM",
    },
    {
      id: "BK-12349",
      title: "The Invisible Life of Addie LaRue",
      author: "V.E. Schwab",
      location: { type: "shelf", id: "A3", position: "Row 3" },
      rfidStatus: "misplaced",
      lastScanned: "Today, 8:20 AM",
    },
    {
      id: "BK-12350",
      title: "The Vanishing Half",
      author: "Brit Bennett",
      location: { type: "return", id: "Return Cart", position: "Awaiting shelving" },
      rfidStatus: "verified",
      lastScanned: "Today, 3:10 PM",
    },
  ]

  // Filter books based on selected location
  const filteredBooks = location === "all" ? books : books.filter((book) => book.location.type === location)

  return (
    <Card className="mt-6">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle>Books by Location</CardTitle>
            <CardDescription>Track books across the library with RFID</CardDescription>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Find a book..." className="pl-8 w-full sm:w-[200px]" />
            </div>
            <Select defaultValue="all" onValueChange={setLocation}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="shelf">On Shelves</SelectItem>
                <SelectItem value="desk">Reading Areas</SelectItem>
                <SelectItem value="checkout">Checked Out</SelectItem>
                <SelectItem value="return">Return Cart</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-3 font-medium">Book ID</th>
                <th className="pb-3 font-medium">Title</th>
                <th className="pb-3 font-medium">Location</th>
                <th className="pb-3 font-medium">RFID Status</th>
                <th className="pb-3 font-medium">Last Scanned</th>
                <th className="pb-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book) => (
                <tr key={book.id} className="border-b last:border-0">
                  <td className="py-3">{book.id}</td>
                  <td className="py-3">
                    <div>
                      <div className="font-medium">{book.title}</div>
                      <div className="text-xs text-muted-foreground">{book.author}</div>
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          book.location.type === "shelf"
                            ? "default"
                            : book.location.type === "desk"
                              ? "secondary"
                              : book.location.type === "checkout"
                                ? "outline"
                                : "destructive"
                        }
                        className="capitalize"
                      >
                        {book.location.type}
                      </Badge>
                      <div className="text-xs">
                        <div>{book.location.id}</div>
                        <div className="text-muted-foreground">{book.location.position}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3">
                    <Badge
                      variant={book.rfidStatus === "verified" ? "outline" : "destructive"}
                      className={book.rfidStatus === "verified" ? "bg-green-100 text-green-800 border-green-300" : ""}
                    >
                      {book.rfidStatus}
                    </Badge>
                  </td>
                  <td className="py-3 text-xs">{book.lastScanned}</td>
                  <td className="py-3 text-right">
                    <Button variant="ghost" size="sm">
                      <MapPin className="h-4 w-4 mr-1" /> Locate
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

