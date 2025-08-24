"use client"

import { memo } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface NavigationItem {
  id: string
  title: string
  href: string
  completed?: boolean
}

interface SectionNavigationProps {
  items: NavigationItem[]
  currentId: string
  onPrevious?: () => void
  onNext?: () => void
  previousHref?: string
  nextHref?: string
  className?: string
}

const SectionNavigation = memo<SectionNavigationProps>(
  ({ items, currentId, onPrevious, onNext, previousHref, nextHref, className = "" }) => {
    const currentIndex = items.findIndex((item) => item.id === currentId)
    const previousItem = currentIndex > 0 ? items[currentIndex - 1] : null
    const nextItem = currentIndex < items.length - 1 ? items[currentIndex + 1] : null

    return (
      <div className={`flex justify-between items-center ${className}`}>
        {/* Previous Button */}
        {(previousItem || previousHref) && (
          <div>
            {previousHref ? (
              <Link href={previousHref}>
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
              </Link>
            ) : previousItem ? (
              <Link href={previousItem.href}>
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <ChevronLeft className="h-4 w-4" />
                  {previousItem.title}
                </Button>
              </Link>
            ) : onPrevious ? (
              <Button variant="outline" onClick={onPrevious} className="flex items-center gap-2 bg-transparent">
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
            ) : null}
          </div>
        )}

        {/* Progress Indicator */}
        <div className="flex items-center gap-2">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`w-2 h-2 rounded-full ${
                item.id === currentId
                  ? "bg-blue-500"
                  : item.completed
                    ? "bg-green-500"
                    : index < currentIndex
                      ? "bg-gray-400"
                      : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        {(nextItem || nextHref) && (
          <div>
            {nextHref ? (
              <Link href={nextHref}>
                <Button className="bg-blue-500 hover:bg-blue-600 flex items-center gap-2">
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            ) : nextItem ? (
              <Link href={nextItem.href}>
                <Button className="bg-blue-500 hover:bg-blue-600 flex items-center gap-2">
                  {nextItem.title}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            ) : onNext ? (
              <Button onClick={onNext} className="bg-blue-500 hover:bg-blue-600 flex items-center gap-2">
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : null}
          </div>
        )}
      </div>
    )
  },
)

SectionNavigation.displayName = "SectionNavigation"

export default SectionNavigation
