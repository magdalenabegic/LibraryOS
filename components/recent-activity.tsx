import { ArrowUpRight, BookOpen, MapPin, RotateCcw } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function RecentActivity() {
  const activities = [
    {
      type: "misplaced",
      book: "The Invisible Life of Addie LaRue",
      location: "Found at Shelf B2, belongs in A3",
      time: "10 minutes ago",
      icon: MapPin,
    },
    {
      type: "checkout",
      user: "Emma Thompson",
      book: "The Midnight Library",
      time: "45 minutes ago",
      icon: ArrowUpRight,
    },
    {
      type: "reshelved",
      book: "Project Hail Mary",
      location: "Shelf B3, Row 1",
      time: "1 hour ago",
      icon: BookOpen,
    },
    {
      type: "return",
      user: "Michael Chen",
      book: "Dune",
      time: "2 hours ago",
      icon: RotateCcw,
    },
  ]

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest library transactions and events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <activity.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium leading-none">
                    {activity.type === "misplaced" && "Misplaced Book Detected"}
                    {activity.type === "checkout" && `${activity.user} checked out`}
                    {activity.type === "reshelved" && "Book Reshelved"}
                    {activity.type === "return" && `${activity.user} returned`}
                  </p>
                  <Badge variant="outline" className="ml-auto">
                    {activity.type === "checkout" && "Checkout"}
                    {activity.type === "return" && "Return"}
                    {activity.type === "misplaced" && "Misplaced"}
                    {activity.type === "reshelved" && "Reshelved"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{activity.book}</p>
                {activity.location && <p className="text-xs text-muted-foreground">{activity.location}</p>}
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

