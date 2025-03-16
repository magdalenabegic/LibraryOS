"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LibraryMap() {
  const [activeFloor, setActiveFloor] = useState("floor1")

  // Simulated data for shelves and their book counts
  const shelfData = {
    floor1: [
      { id: "A1", books: 124, available: 98, status: "normal" },
      { id: "A2", books: 156, available: 132, status: "normal" },
      { id: "A3", books: 89, available: 76, status: "attention" },
      { id: "B1", books: 112, available: 94, status: "normal" },
      { id: "B2", books: 145, available: 120, status: "normal" },
      { id: "B3", books: 78, available: 65, status: "normal" },
      { id: "C1", books: 134, available: 110, status: "normal" },
      { id: "C2", books: 167, available: 142, status: "attention" },
      { id: "C3", books: 98, available: 82, status: "normal" },
    ],
    floor2: [
      { id: "D1", books: 145, available: 120, status: "normal" },
      { id: "D2", books: 178, available: 150, status: "normal" },
      { id: "D3", books: 102, available: 85, status: "attention" },
      { id: "E1", books: 132, available: 110, status: "normal" },
      { id: "E2", books: 165, available: 140, status: "normal" },
      { id: "E3", books: 95, available: 80, status: "normal" },
    ],
  }

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Library Map</CardTitle>
        <CardDescription>Real-time book locations and shelf status</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="floor1" className="mb-4">
          <TabsList>
            <TabsTrigger value="floor1" onClick={() => setActiveFloor("floor1")}>
              Floor 1
            </TabsTrigger>
            <TabsTrigger value="floor2" onClick={() => setActiveFloor("floor2")}>
              Floor 2
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {shelfData[activeFloor].map((shelf) => (
            <Button
              key={shelf.id}
              variant={shelf.status === "attention" ? "outline" : "secondary"}
              className={`h-24 flex flex-col items-center justify-center gap-1 ${
                shelf.status === "attention" ? "border-2 border-amber-500" : ""
              }`}
            >
              <span className="text-lg font-bold">Shelf {shelf.id}</span>
              <span className="text-xs">
                {shelf.available}/{shelf.books} books
              </span>
              {shelf.status === "attention" && (
                <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-300">
                  Needs attention
                </Badge>
              )}
            </Button>
          ))}
        </div>

        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span>Normal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span>Needs attention</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-muted"></div>
            <span>Empty</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

