"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Trophy, User, ClipboardList, Zap, BookOpen, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

const navigation = [
  { name: "Lobby", href: "/", icon: Home },
  { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Mock Exams", href: "/mock-exams", icon: ClipboardList },
  { name: "Speed Trainer", href: "/speed-trainer", icon: Zap },
  { name: "Dojo", href: "/dojo", icon: BookOpen },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  if (isMobile) {
    return (
      <>
        {/* Mobile menu button */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-emerald-800 px-4 py-3 md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-xtW6DJG22oopkP1mifyHakaW5g1QCw.svg"
                alt="MedCamps"
                className="h-8 w-auto"
              />
              <span className="text-sm font-bold text-blue-200">UCAT Arena</span>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:bg-emerald-700 p-2 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleMobileMenu} />
            <div className="fixed left-0 top-0 h-full w-64 bg-emerald-800 pt-16">
              {/* Navigation */}
              <nav className="flex-1 space-y-1 px-4 py-6">
                {navigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={toggleMobileMenu}
                      className={cn(
                        "flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-emerald-900 text-white"
                          : "text-emerald-100 hover:bg-emerald-700 hover:text-white",
                      )}
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </Link>
                  )
                })}
              </nav>

              {/* User info at bottom */}
              <div className="absolute bottom-0 left-0 right-0 border-t border-emerald-700 p-4">
                <Link
                  href="/profile"
                  onClick={toggleMobileMenu}
                  className="flex items-center hover:bg-emerald-700 rounded-lg p-2 transition-colors"
                >
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
          </div>
        )}
      </>
    )
  }

  return (
    <div className="hidden md:flex h-screen w-64 flex-col bg-emerald-800">
      {/* Logo & UCAT Arena branding */}
      <div className="flex flex-col items-center border-b border-emerald-700 px-6 py-4">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-xtW6DJG22oopkP1mifyHakaW5g1QCw.svg"
          alt="MedCamps"
          className="h-20 w-auto"
        />
        <span className="text-lg font-bold text-blue-300 tracking-wide mt-1">UCAT Arena</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-4 py-6">
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
