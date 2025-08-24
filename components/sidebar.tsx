"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, BookOpen, FileQuestion, BarChart3, User, Video, Settings } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Learning", href: "/learning", icon: BookOpen },
  { name: "Practice", href: "/practice", icon: FileQuestion },
  { name: "Mock Interview", href: "/mock-interview", icon: Video },
  { name: "Performance", href: "/performance", icon: BarChart3 },
  { name: "Admin", href: "/admin", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col bg-emerald-800">
      {/* Logo */}
      <div className="flex h-24 items-center justify-center border-b border-emerald-700 px-6">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-xtW6DJG22oopkP1mifyHakaW5g1QCw.svg"
          alt="MedCamps"
          className="h-24 w-auto"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-4 py-6">
        <div className="mb-4">
          <p className="italic px-3 mb-2 text-sm font-light text-slate-300">Medicine Interviews - UK</p>
        </div>
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive ? "bg-emerald-900 text-white" : "text-emerald-100 hover:bg-emerald-700 hover:text-white",
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* User info at bottom */}
      <div className="border-t border-emerald-700 p-4">
        <Link href="/profile" className="flex items-center hover:bg-emerald-700 rounded-lg p-2 transition-colors">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-900">
            <User className="h-4 w-4 text-white" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">John Doe</p>
            <p className="text-xs text-emerald-200">Future Doctor</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
