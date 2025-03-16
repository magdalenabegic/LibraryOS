"use client"

import type React from "react"

import { useState } from "react"
import { LibrarySidebar } from "@/components/library-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex min-h-screen bg-background">
      <LibrarySidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 overflow-auto">
        <DashboardHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {children}
      </div>
    </div>
  )
}

