import { NavigationLinkType } from "@/types/DropDownType";

export const navigationLinks: NavigationLinkType[] = [
  { 
    id: 1, 
    title: 'HOME', 
    href: '/' ,
    dropdown: false,
  },
  { 
    id: 2, 
    title: 'CONTACT US', 
    href: '/contact' ,
    dropdown: false,
  },
  { 
    id: 3, 
    title: 'MORE', 
    href: '/services',
    dropdown: true,
    options: [
      {
        id: 1,
        name: 'FIND A TRAVEL EXPERT',
        href: '/travel-expert'
      },
      {
        id: 2,
        name: 'OUR RECOMMENDATIONS',
        href: '/recommendations'
      },
      {
        id: 3,
        name: 'TRAVELER RESOURCES HUB',
        href: '/travel-resources-hub'
      },
      {
        id: 4,
        name: 'ALLIANZ TRAVEL INSURANCE',
        href: '/allianz-travel-insurance'
      },
      {
        id: 5,
        name: 'BLOG',
        href: '/blog'
      },
      {
        id: 6,
        name: 'FLIGHTS',
        href: '/flights'
      },
      {
        id: 7,
        name: 'SIGHTSEEING',
        href: '/sightseeing'
      },
    ]
  },
  { 
    id: 4, 
    title: 'GUIDE TOURS', 
    href: '/guide-tours' ,
    dropdown: false,
  },
  { 
    id: 5, 
    title: 'GROUP TRAVEL', 
    href: '/group-travel' ,
    dropdown: false,
  },
  { 
    id: 6, 
    title: 'IRRESISTIBLE OFFERS', 
    href: '/irresistible-offers' ,
    dropdown: false,
  },
]



