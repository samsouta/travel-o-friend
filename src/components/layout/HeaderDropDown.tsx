"use client";

import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { NavigationLinkTypeWithOptions } from "@/types/DropDownType";
import Link from "next/link";

interface HeaderDropDownProps {
  label: string
  options: NavigationLinkTypeWithOptions[] | [];
  onSelect?: (option: string) => void
  triggerClassName?: string
  contentClassName?: string
}

const HeaderDropDown: React.FC<HeaderDropDownProps> = ({
  label,
  options,
  onSelect,
  triggerClassName,
  contentClassName
}) => {
  const handleSelect = (option: NavigationLinkTypeWithOptions) => {
    onSelect?.(option.href)
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className={triggerClassName}>
        {label}
        <ChevronDown className="w-4 h-4 ml-1" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={contentClassName}
        align="start"
        sideOffset={8}
      >
        {options.map((option) => (
          <DropdownMenuItem
            key={option.id}
            asChild
            className="cursor-pointer w-full text-sm font-roboto font-light hover:text-blue-600 transition-colors whitespace-nowrap px-4 py-2"
            onClick={() => handleSelect(option)}
          >
            <Link 
              href={option.href} 
              className="block w-full"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              {option.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default HeaderDropDown
