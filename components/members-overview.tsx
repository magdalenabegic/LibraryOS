import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function MembersOverview() {
  const members = [
    {
      name: "Emma Thompson",
      email: "emma.t@example.com",
      status: "active",
      booksOut: 3,
      memberSince: "Jan 2022",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Michael Chen",
      email: "michael.c@example.com",
      status: "active",
      booksOut: 1,
      memberSince: "Mar 2021",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Sophia Rodriguez",
      email: "sophia.r@example.com",
      status: "new",
      booksOut: 0,
      memberSince: "Today",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "James Wilson",
      email: "james.w@example.com",
      status: "overdue",
      booksOut: 2,
      memberSince: "Nov 2022",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <Card className="mt-6">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-1">
          <CardTitle>Recent Members</CardTitle>
          <CardDescription>Manage member information and activity</CardDescription>
        </div>
        <Button className="ml-auto" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-3 font-medium">Member</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Books Out</th>
                <th className="pb-3 font-medium">Member Since</th>
                <th className="pb-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={member.avatar || "/placeholder.svg"}
                        alt={member.name}
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-xs text-muted-foreground">{member.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3">
                    <Badge
                      variant={
                        member.status === "active" ? "default" : member.status === "new" ? "outline" : "destructive"
                      }
                    >
                      {member.status}
                    </Badge>
                  </td>
                  <td className="py-3">{member.booksOut}</td>
                  <td className="py-3">{member.memberSince}</td>
                  <td className="py-3 text-right">
                    <Button variant="ghost" size="sm">
                      Details
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

