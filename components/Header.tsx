"use client"

import { Button } from "@/components/ui/button"
import type { UserState } from "@/lib/types"
import { BRAND_COLORS, NAV_LINKS } from "@/lib/constants"

interface HeaderProps {
  userState: UserState
  onSignIn: () => void
  onSignOut: () => void
}

export function Header({ userState, onSignIn, onSignOut }: HeaderProps) {
  return (
    <header
      className={`bg-[${BRAND_COLORS.primary}] text-white px-6 relative py-5`}
      style={{
        backgroundImage: `url('/medical-wallpaper.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        {/* Logo section - clickable brand identity */}
        <div className="flex items-center">
          <a href="/" className="hover:opacity-80 transition-opacity duration-200">
            <img src="/medcamps-navbar-logo.svg" alt="MedCamps" className="h-16 w-auto" />
          </a>
        </div>

        {/* Navigation menu - hidden on mobile, visible on desktop for better UX */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="opacity-60 hover:opacity-100 transition-opacity duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Authentication section - dynamically shows sign in/out based on user state */}
        <div className="flex items-center gap-4">
          {userState === "anonymous" ? (
            <Button
              onClick={onSignIn}
              className={`bg-[${BRAND_COLORS.secondary}] hover:bg-[${BRAND_COLORS.secondary}]/90 text-white px-[29px] font-semibold text-base`}
            >
              Sign in
            </Button>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-sm opacity-80">Welcome back!</span>
              <Button
                onClick={onSignOut}
                size="sm"
                className="bg-white/20 text-white hover:bg-white/30 border border-white/30"
              >
                Sign out
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
