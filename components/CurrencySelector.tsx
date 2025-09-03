"use client"

import type React from "react"

import { useState, useMemo, useCallback, useRef, useEffect } from "react"
import { Globe, ChevronDown } from "lucide-react"
import type { Currency } from "@/lib/types"
import { CURRENCIES } from "@/lib/constants"

interface CurrencySelectorProps {
  selectedCurrency: string
  onCurrencyChange: (currencyCode: string) => void
}

export function CurrencySelector({ selectedCurrency, onCurrencyChange }: CurrencySelectorProps) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentCurrency: Currency = useMemo(
    () => CURRENCIES.find((c) => c.code === selectedCurrency) || CURRENCIES[0],
    [selectedCurrency],
  )

  const handleToggleDropdown = useCallback(() => {
    setShowDropdown((prev) => !prev)
  }, [])

  const handleCurrencySelect = useCallback(
    (currencyCode: string) => {
      onCurrencyChange(currencyCode)
      setShowDropdown(false)
    },
    [onCurrencyChange],
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showDropdown])

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setShowDropdown(false)
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      setShowDropdown((prev) => !prev)
    }
  }, [])

  return (
    <div className="flex justify-center mb-8">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={handleToggleDropdown}
          onKeyDown={handleKeyDown}
          aria-expanded={showDropdown}
          aria-haspopup="listbox"
          aria-label={`Select currency. Current: ${currentCurrency.name}`}
          className="bg-white border border-gray-200 rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Globe className="w-4 h-4 text-gray-500" aria-hidden="true" />
          <span className="text-lg" aria-hidden="true">
            {currentCurrency.flag}
          </span>
          <span className="text-sm font-medium">{currentCurrency.code}</span>
          <ChevronDown
            className={`w-4 h-4 text-gray-500 transition-transform ${showDropdown ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
        {showDropdown && (
          <div
            className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px] z-20"
            role="listbox"
            aria-label="Currency options"
          >
            {CURRENCIES.map((currency) => (
              <button
                key={currency.code}
                onClick={() => handleCurrencySelect(currency.code)}
                role="option"
                aria-selected={currency.code === selectedCurrency}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none flex items-center gap-3 text-gray-800"
              >
                <span className="text-lg" aria-hidden="true">
                  {currency.flag}
                </span>
                <div>
                  <div className="text-sm font-medium">{currency.name}</div>
                  <div className="text-xs text-gray-500">{currency.code}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
