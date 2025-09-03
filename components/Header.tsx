"use client"

import { useCallback, memo } from "react"
import { Button } from "@/components/ui/button"
import type { UserState } from "@/lib/types"
import { BRAND_COLORS, NAV_LINKS } from "@/lib/constants"

interface HeaderProps {
  userState: UserState
  onSignIn: () => void
  onSignOut: () => void
}

export const Header = memo(function Header({ userState, onSignIn, onSignOut }: HeaderProps) {
  const handleSignIn = useCallback(() => {
    onSignIn()
  }, [onSignIn])

  const handleSignOut = useCallback(() => {
    onSignOut()
  }, [onSignOut])

  return (
    <header
      className="text-white px-6 relative py-5"
      style={{
        backgroundColor: BRAND_COLORS.primary,
        backgroundImage: `url('/medical-wallpaper.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      role="banner"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        {/* Logo section - clickable brand identity */}
        <div className="flex items-center">
          <a
            href="/"
            className="hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded"
            aria-label="MedCamps homepage"
          >
            <img src="/medcamps-navbar-logo.svg" alt="MedCamps" className="h-16 w-auto" />
          </a>
        </div>

        {/* Navigation menu - hidden on mobile, visible on desktop for better UX */}
        <nav
          className="hidden md:flex items-center gap-8 font-semibold text-lg"
          role="navigation"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="opacity-60 hover:opacity-100 focus:opacity-100 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Authentication section - dynamically shows sign in/out based on user state */}
        <div className="flex items-center gap-4">
          {userState === "anonymous" ? (
            <Button
              onClick={handleSignIn}
              className="text-white px-[29px] font-semibold text-base focus:ring-2 focus:ring-white focus:ring-offset-2"
              style={{ backgroundColor: BRAND_COLORS.secondary }}
              aria-label="Sign in to your account"
            >
              Sign in
            </Button>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-sm opacity-80" aria-live="polite">
                Welcome back!
              </span>
              <Button
                onClick={handleSignOut}
                size="sm"
                className="bg-white/20 text-white hover:bg-white/30 border border-white/30 focus:ring-2 focus:ring-white focus:ring-offset-2"
                aria-label="Sign out of your account"
              >
                Sign out
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
})
