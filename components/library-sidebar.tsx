"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BookOpen,
  Users,
  BarChart3,
  Settings,
  Calendar,
  Search,
  LogOut,
  Menu,
  Home,
  BookMarked,
  MapPin,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface LibrarySidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export function LibrarySidebar({ open, setOpen }: LibrarySidebarProps) {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: BookOpen, label: "Books", href: "/books" },
    { icon: MapPin, label: "Locations", href: "/locations" },
    { icon: Users, label: "Members", href: "/members" },
    { icon: Calendar, label: "Circulation", href: "/circulation" },
    { icon: BarChart3, label: "Reports", href: "/reports" },
    { icon: Search, label: "Search", href: "/search" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ]

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-primary text-primary-foreground transition-transform duration-200 md:relative",
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0 md:w-16",
      )}
    >
      <div className="flex h-16 items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <BookMarked className="h-6 w-6" />
          {open && <span className="text-xl font-bold">LibraryOS</span>}
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(false)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Close sidebar</span>
        </Button>
      </div>
      <nav className="flex-1 overflow-auto p-2">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive ? "bg-primary-foreground text-primary" : "hover:bg-primary-foreground hover:text-primary",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {open && <span>{item.label}</span>}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="border-t border-primary-foreground/10 p-4">
        <Button
          variant="ghost"
          className={cn("flex w-full items-center gap-3 justify-start", !open && "justify-center")}
        >
          <LogOut className="h-5 w-5" />
          {open && <span>Logout</span>}
        </Button>
      </div>
    </div>
  )
}

