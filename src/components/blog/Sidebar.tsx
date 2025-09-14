'use client';

import Image from 'next/image';
import Link from 'next/link';
import { TrendingUp, Tag } from 'lucide-react';
import { categories, popularPosts } from '@/data/blogData';

export default function Sidebar() {
  return (
    <aside className="space-y-8">
      {/* Popular Posts */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-900">Popular Posts</h3>
        </div>
        
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center gap-2 mb-6">
          <Tag className="w-5 h-5 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-900">Categories</h3>
        </div>
        
        <div className="space-y-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.slug}`}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                {category.name}
              </span>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}