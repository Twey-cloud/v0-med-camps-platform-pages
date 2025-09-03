"use client"

import { useState, useMemo } from "react"
import { type Currency, CURRENCIES } from "@/lib/constants"

export function useCurrency() {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(CURRENCIES[0])

  const convertPrice = useMemo(() => {
    return (gbpPrice: number): string => {
      const convertedPrice = gbpPrice * selectedCurrency.rate
      return `${selectedCurrency.symbol}${convertedPrice.toFixed(2)}`
    }
  }, [selectedCurrency])

  return {
    selectedCurrency,
    setSelectedCurrency,
    convertPrice,
    availableCurrencies: CURRENCIES,
  }
}
