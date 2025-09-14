export type NavigationLinkType = {
  id: number
  title: string
  href: string
  dropdown: boolean
  options?: NavigationLinkTypeWithOptions[];
}

export type NavigationLinkTypeWithOptions = {
    id: number
    name: string
    href: string
}
