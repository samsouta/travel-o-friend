import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Travel Expert",
  description: "Travel O Friend is a travel companion app that helps you plan your trips, find local attractions, and get directions to your destination.",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen' >
      {children}
    </div>
  )
}

export default Layout
