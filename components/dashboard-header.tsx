"use client"

import { Bell, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface DashboardHeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export function DashboardHeader({ sidebarOpen, setSidebarOpen }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle sidebar</span>
      </Button>
      <div className="w-full flex-1 md:grow-0 md:w-80">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search books by title, ID or location..."
              className="w-full bg-background pl-8 md:w-[320px]"
            />
          </div>
        </form>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                3
              </span>
              <span className="sr-only">Notifications</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>New book request</DropdownMenuItem>
            <DropdownMenuItem>5 books due today</DropdownMenuItem>
            <DropdownMenuItem>System update available</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="ghost" size="sm" className="gap-2">
          <span className="hidden md:inline-flex">Sarah Johnson</span>
          <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
            <img
              src="/placeholder.svg?height=32&width=32"
              width={32}
              height={32}
              alt="Sarah Johnson"
              className="aspect-square h-full w-full"
            />
          </span>
        </Button>
      </div>
    </header>
  )
}

