import BlogGrid from '@/components/blog/BlogGrid'
import HeroSection from '@/components/blog/HeroSection'
import Pagination from '@/components/blog/Pagination'
import Sidebar from '@/components/blog/Sidebar'
import React from 'react'

const page = () => {
    return (
        <main className="min-h-screen bg-gray-50">
            <HeroSection />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                        <BlogGrid />
                        <div className="mt-12">
                            <Pagination />
                        </div>
                    </div>
                    <div className="hidden lg:block lg:w-80">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page