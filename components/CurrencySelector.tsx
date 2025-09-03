"use client"

import { useState } from "react"
import { Globe, ChevronDown } from "lucide-react"
import type { Currency } from "@/lib/types"
import { CURRENCIES } from "@/lib/constants"

interface CurrencySelectorProps {
  selectedCurrency: string
  onCurrencyChange: (currencyCode: string) => void
}

export function CurrencySelector({ selectedCurrency, onCurrencyChange }: CurrencySelectorProps) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const currentCurrency: Currency = CURRENCIES.find((c) => c.code === selectedCurrency) || CURRENCIES[0]

  return (
    <div className="flex justify-center mb-8">
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="bg-white border border-gray-200 rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm"
        >
          <Globe className="w-4 h-4 text-gray-500" />
          <span className="text-lg">{currentCurrency.flag}</span>
          <span className="text-sm font-medium">{currentCurrency.code}</span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </button>
        {showDropdown && (
          <div className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px] z-20">
            {CURRENCIES.map((currency) => (
              <button
                key={currency.code}
                onClick={() => {
                  onCurrencyChange(currency.code)
                  setShowDropdown(false)
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3 text-gray-800"
              >
                <span className="text-lg">{currency.flag}</span>
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
