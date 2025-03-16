"use client"

import { DashboardStats } from "./dashboard-stats"
import { RecentActivity } from "./recent-activity"
import { LibraryMap } from "./library-map"
import { BooksByLocation } from "./books-by-location"

export function DashboardPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <DashboardStats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <LibraryMap />
        <RecentActivity />
      </div>
      <BooksByLocation />
    </main>
  )
}

