import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PopularBooks() {
  const books = [
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      checkouts: 42,
      cover: "/placeholder.svg?height=60&width=40",
    },
    {
      title: "Project Hail Mary",
      author: "Andy Weir",
      checkouts: 38,
      cover: "/placeholder.svg?height=60&width=40",
    },
    {
      title: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      checkouts: 35,
      cover: "/placeholder.svg?height=60&width=40",
    },
    {
      title: "The Four Winds",
      author: "Kristin Hannah",
      checkouts: 31,
      cover: "/placeholder.svg?height=60&width=40",
    },
  ]

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Popular Books</CardTitle>
        <CardDescription>Most checked out books this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {books.map((book, i) => (
            <div key={i} className="flex items-center gap-4">
              <img
                src={book.cover || "/placeholder.svg"}
                alt={book.title}
                className="h-15 w-10 rounded object-cover shadow-sm"
              />
              <div className="flex-1">
                <h4 className="text-sm font-medium">{book.title}</h4>
                <p className="text-xs text-muted-foreground">{book.author}</p>
              </div>
              <div className="text-sm font-medium">
                {book.checkouts} <span className="text-xs text-muted-foreground">checkouts</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

