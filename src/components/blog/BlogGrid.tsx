'use client';

import { blogPosts } from '@/data/blogData';
import BlogCard from './BlogCard';

export default function BlogGrid() {
  return (
    <section id="blog-section" className="py-8">
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Latest Stories
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Discover amazing destinations, travel tips, and inspiring stories from fellow adventurers around the globe.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}