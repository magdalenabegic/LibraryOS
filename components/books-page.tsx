"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  MapPin,
  BookOpen,
  ArrowUpDown,
  BookMarked,
  CheckCircle2,
  AlertCircle,
  Bookmark,
  BookOpenCheck,
  Armchair,
  TableIcon,
  Laptop,
  Users,
  CircleDashed,
  Plus,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function BooksPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const booksPerPage = 10

  // Location types with their corresponding icons
  const locationIcons = {
    shelf: BookOpen,
    desk: Armchair,
    table: TableIcon,
    computer: Laptop,
    studyRoom: Users,
    returnCart: CircleDashed,
    checkout: ArrowUpDown,
  }

  // Sample book data with location information
  const books = [
    {
      id: "BK-12345",
      title: "The Midnight Library",
      author: "Matt Haig",
      isbn: "978-0525559474",
      category: "Fiction",
      location: { type: "shelf", id: "A1", position: "Row 2" },
      rfidStatus: "verified",
      lastScanned: "Today, 10:23 AM",
      coverImage: "/placeholder.svg?height=60&width=40",
    },
    {
      id: "BK-12346",
      title: "Project Hail Mary",
      author: "Andy Weir",
      isbn: "978-0593135204",
      category: "Science Fiction",
      location: { type: "shelf", id: "B3", position: "Row 1" },
      rfidStatus: "verified",
      lastScanned: "Today, 9:45 AM",
      coverImage: "/placeholder.svg?height=60&width=40",
    },
    {
      id: "BK-12347",
      title: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      isbn: "978-0571364879",
      category: "Science Fiction",
      location: { type: "desk", id: "Reading Area 2", position: "Desk 4" },
      rfidStatus: "verified",
      lastScanned: "Today, 11:30 AM",
      coverImage: "/placeholder.svg?height=60&width=40",
    },
    {
      id: "BK-12348",
      title: "The Four Winds",
      author: "Kristin Hannah",
      isbn: "978-1250178602",
      category: "Historical Fiction",
      location: { type: "checkout", id: "Member #4582", position: "Due Mar 15" },
      rfidStatus: "verified",
      lastScanned: "Mar 1, 2:15 PM",
      coverImage: "/placeholder.svg?height=60&width=40",
    },
    {
      id: "BK-12349",
      title: "The Invisible Life of Addie LaRue",
      author: "V.E. Schwab",
      isbn: "978-0765387561",
      category: "Fantasy",
      location: { type: "shelf", id: "A3", position: "Row 3" },
      rfidStatus: "misplaced",
      lastScanned: "Today, 8:20 AM",
      coverImage: "/placeholder.svg?height=60&width=40",
    },
    {
      id: "BK-12350",
      title: "The Vanishing Half",
      author: "Brit Bennett",
      isbn: "978-0525536291",
      category: "Fiction",
      location: { type: "returnCart", id: "Return Cart", position: "Awaiting shelving" },
      rfidStatus: "verified",
      lastScanned: "Today, 3:10 PM",
      coverImage: "/placeholder.svg?height=60&width=40",
    },
    {
      id: "BK-12351",
      title: "Hamnet",
      author: "Maggie O'Farrell",
      isbn: "978-1472223791",
      category: "Historical Fiction",
      location: { type: "shelf", id: "A2", position: "Row 1" },
      rfidStatus: "verified",
      lastScanned: "Yesterday, 4:30 PM",
      coverImage: "/placeholder.svg?height=60&width=40",
    },
    {
      id: "BK-12352",
      title: "The Song of Achilles",
      author: "Madeline Miller",
      isbn: "978-1408821985",
      category: "Historical Fiction",
      location: { type: "table", id: "Study Table 1", position: "Table 2" },
      rfidStatus: "verified",
      lastScanned: "Today, 10:45 AM",
      coverImage: "/placeholder.svg?height=60&width=40",
    },
    {
      id: "BK-12353",
      title: "A Promised Land",
      author: "Barack Obama",
      isbn: "978-1524763169",
      category: "Biography",
      location: { type: "checkout", id: "Member #3291", position: "Due Mar 20" },
      rfidStatus: "verified",
      lastScanned: "Mar 6, 1:15 PM",
      coverImage: "/placeholder.svg?height=60&width=40",
    },
    {
      id: "BK-12354",
      title: "Educated",
      author: "Tara Westover",
      isbn: "978-0399590504",
      category: "Memoir",
      location: { type: "shelf", id: "B1", position: "Row 3" },
      rfidStatus: "verified",
      lastScanned: "Today, 9:10 AM",
      coverImage: "/placeholder.svg?height=60&width=40",
    },
    {
      id: "BK-12355",
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      isbn: "978-0735219090",
      category: "Fiction",
      location: { type: "shelf", id: "A1", position: "Row 4" },
      rfidStatus: "misplaced",
      lastScanned: "Today, 11:05 AM",
      coverImage: "/placeholder.svg?height=60&width=40",
    },
    {
      id: "BK-12356",
      title: "The Dutch House",
      author: "Ann Patchett",
      isbn: "978-0062963673",
      category: "Fiction",
      location: { type: "computer", id: "Computer Area 1", position: "Station 3" },
      rfidStatus: "verified",
      lastScanned: "Today, 2:40 PM",
      coverImage: "/placeholder.svg?height=60&width=40",
    },
    {
      id: "BK-12357",
      title: "The Lincoln Highway",
      author: "Amor Towles",
      isbn: "978-0735222359",
      category: "Historical Fiction",
      location: { type: "checkout", id: "Member #6723", position: "Due Mar 18" },
      rfidStatus: "verified",
      lastScanned: "Mar 4, 11:30 AM",
      coverImage: "/placeholder.svg?height=60&width=40",
    },
    {
      id: "BK-12358",
      title: "Cloud Cuckoo Land",
      author: "Anthony Doerr",
      isbn: "978-1982168438",
      category: "Fiction",
      location: { type: "returnCart", id: "Return Cart", position: "Awaiting shelving" },
      rfidStatus: "verified",
      lastScanned: "Today, 3:25 PM",
      coverImage: "/placeholder.svg?height=60&width=40",
    },
    {
      id: "BK-12359",
      title: "The Last Thing He Told Me",
      author: "Laura Dave",
      isbn: "978-1501171345",
      category: "Mystery",
      location: { type: "shelf", id: "A3", position: "Row 1" },
      rfidStatus: "verified",
      lastScanned: "Yesterday, 5:15 PM",
      coverImage: "/placeholder.svg?height=60&width=40",
    },
  ]

  // Filter books based on search query and filters
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.isbn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.category.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesLocation = locationFilter === "all" || book.location.type === locationFilter
    const matchesStatus = statusFilter === "all" || book.rfidStatus === statusFilter

    return matchesSearch && matchesLocation && matchesStatus
  })

  // Pagination
  const indexOfLastBook = currentPage * booksPerPage
  const indexOfFirstBook = indexOfLastBook - booksPerPage
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook)
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage)

  // Get icon component based on location type
  const getLocationIcon = (type) => {
    const IconComponent = locationIcons[type] || BookOpen
    return <IconComponent className="h-4 w-4" />
  }

  return (
    <main className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">Books</h1>
        <Button className="w-full md:w-auto">
          <Plus className="h-4 w-4 mr-2" /> Add New Book
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle>Find Books</CardTitle>
          <CardDescription>Search and filter the book collection</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by title, author, ID, ISBN..."
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="shelf">Shelves</SelectItem>
                  <SelectItem value="desk">Reading Desks</SelectItem>
                  <SelectItem value="table">Study Tables</SelectItem>
                  <SelectItem value="computer">Computer Areas</SelectItem>
                  <SelectItem value="checkout">Checked Out</SelectItem>
                  <SelectItem value="returnCart">Return Cart</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="RFID Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="verified">Verified</SelectItem>
                  <SelectItem value="misplaced">Misplaced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Book Collection</CardTitle>
              <CardDescription>{filteredBooks.length} books found</CardDescription>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" /> Export
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Export as CSV</DropdownMenuItem>
                <DropdownMenuItem>Export as PDF</DropdownMenuItem>
                <DropdownMenuItem>Print List</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-3 px-4 font-medium">Book</th>
                  <th className="py-3 px-4 font-medium">ID / ISBN</th>
                  <th className="py-3 px-4 font-medium">Category</th>
                  <th className="py-3 px-4 font-medium">Location</th>
                  <th className="py-3 px-4 font-medium">RFID Status</th>
                  <th className="py-3 px-4 font-medium">Last Scanned</th>
                  <th className="py-3 px-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentBooks.map((book) => (
                  <tr key={book.id} className="border-b last:border-0">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={book.coverImage || "/placeholder.svg"}
                          alt={book.title}
                          className="h-12 w-8 rounded object-cover shadow-sm"
                        />
                        <div>
                          <div className="font-medium">{book.title}</div>
                          <div className="text-xs text-muted-foreground">{book.author}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-xs">
                        <div>{book.id}</div>
                        <div className="text-muted-foreground">{book.isbn}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4">{book.category}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            book.location.type === "shelf"
                              ? "default"
                              : book.location.type === "checkout"
                                ? "outline"
                                : "secondary"
                          }
                          className="flex items-center gap-1"
                        >
                          {getLocationIcon(book.location.type)}
                          <span className="capitalize">{book.location.type}</span>
                        </Badge>
                        <div className="text-xs">
                          <div>{book.location.id}</div>
                          <div className="text-muted-foreground">{book.location.position}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1">
                        {book.rfidStatus === "verified" ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-amber-500" />
                        )}
                        <Badge
                          variant={book.rfidStatus === "verified" ? "outline" : "destructive"}
                          className={
                            book.rfidStatus === "verified" ? "bg-green-100 text-green-800 border-green-300" : ""
                          }
                        >
                          {book.rfidStatus}
                        </Badge>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-xs">{book.lastScanned}</td>
                    <td className="py-3 px-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            Actions
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <MapPin className="h-4 w-4 mr-2" /> Locate
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <BookOpenCheck className="h-4 w-4 mr-2" /> Check Out
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Bookmark className="h-4 w-4 mr-2" /> Reserve
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <BookMarked className="h-4 w-4 mr-2" /> Edit Details
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
        <div className="p-4 border-t">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                const pageNumber = i + 1
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink isActive={currentPage === pageNumber} onClick={() => setCurrentPage(pageNumber)}>
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                )
              })}
              {totalPages > 5 && (
                <>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink onClick={() => setCurrentPage(totalPages)} isActive={currentPage === totalPages}>
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}
              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </Card>
    </main>
  )
}

