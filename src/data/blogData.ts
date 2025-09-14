import { BlogPost, Category } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 Destinations in Asia",
    slug: "top-10-destinations-asia",
    excerpt: "Discover the most breathtaking destinations across Asia, from bustling cities to serene beaches and ancient temples that will leave you mesmerized.",
    content: "Full blog content here...",
    image: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    date: "Jan 15, 2025",
    readTime: "8 min read",
    category: "Destinations",
    tags: ["Asia", "Travel", "Destinations"]
  },
  {
    id: 2,
    title: "How to Pack Light for Long Trips",
    slug: "pack-light-long-trips",
    excerpt: "Master the art of minimalist packing with these expert tips and tricks that will transform your travel experience forever.",
    content: "Full blog content here...",
    image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "Mike Rodriguez",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    date: "Jan 12, 2025",
    readTime: "6 min read",
    category: "Tips",
    tags: ["Packing", "Tips", "Travel"]
  },
  {
    id: 3,
    title: "Best Street Food Around the World",
    slug: "best-street-food-worldwide",
    excerpt: "Take your taste buds on a global journey through the most incredible street food scenes from Bangkok to Mexico City.",
    content: "Full blog content here...",
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "Emma Thompson",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    date: "Jan 10, 2025",
    readTime: "10 min read",
    category: "Food",
    tags: ["Food", "Culture", "Street Food"]
  },
  {
    id: 4,
    title: "Hidden Gems of European Countryside",
    slug: "hidden-gems-european-countryside",
    excerpt: "Explore the lesser-known villages and landscapes of Europe that offer authentic experiences away from the tourist crowds.",
    content: "Full blog content here...",
    image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "Alessandro Rossi",
      avatar: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    date: "Jan 8, 2025",
    readTime: "12 min read",
    category: "Destinations",
    tags: ["Europe", "Hidden Gems", "Countryside"]
  },
  {
    id: 5,
    title: "Ultimate Guide to Solo Female Travel",
    slug: "solo-female-travel-guide",
    excerpt: "Empower yourself with essential safety tips, destination recommendations, and confidence-building advice for solo female travelers.",
    content: "Full blog content here...",
    image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "Priya Sharma",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    date: "Jan 5, 2025",
    readTime: "15 min read",
    category: "Solo Travel",
    tags: ["Solo Travel", "Female Travel", "Safety"]
  },
  {
    id: 6,
    title: "Budget Travel: Exploring on $50 a Day",
    slug: "budget-travel-50-dollars",
    excerpt: "Discover how to maximize your travel experiences while maintaining a strict budget with these proven money-saving strategies.",
    content: "Full blog content here...",
    image: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "David Kim",
      avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    date: "Jan 3, 2025",
    readTime: "9 min read",
    category: "Budget",
    tags: ["Budget Travel", "Money Saving", "Tips"]
  },
  {
    id: 7,
    title: "Photography Tips for Travel Bloggers",
    slug: "photography-tips-travel-bloggers",
    excerpt: "Elevate your travel photography game with professional techniques that will make your blog posts stand out from the crowd.",
    content: "Full blog content here...",
    image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "Lisa Park",
      avatar: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    date: "Dec 30, 2024",
    readTime: "11 min read",
    category: "Photography",
    tags: ["Photography", "Blogging", "Tips"]
  },
  {
    id: 8,
    title: "Sustainable Tourism: Travel Responsibly",
    slug: "sustainable-tourism-travel-responsibly",
    excerpt: "Learn how to minimize your environmental impact while traveling and support local communities through responsible tourism practices.",
    content: "Full blog content here...",
    image: "https://images.pexels.com/photos/1430818/pexels-photo-1430818.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "Green Explorer",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    date: "Dec 28, 2024",
    readTime: "13 min read",
    category: "Sustainable",
    tags: ["Sustainable", "Environment", "Responsible"]
  },
  {
    id: 9,
    title: "Digital Nomad Guide: Working While Traveling",
    slug: "digital-nomad-guide-working-traveling",
    excerpt: "Transform your career into a location-independent lifestyle with practical advice on tools, destinations, and work-life balance.",
    content: "Full blog content here...",
    image: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: {
      name: "Alex Turner",
      avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    date: "Dec 25, 2024",
    readTime: "14 min read",
    category: "Digital Nomad",
    tags: ["Digital Nomad", "Remote Work", "Lifestyle"]
  }
];

export const popularPosts = blogPosts.slice(0, 4);

export const categories: Category[] = [
  { name: "Destinations", slug: "destinations", count: 24 },
  { name: "Travel Tips", slug: "tips", count: 18 },
  { name: "Food & Culture", slug: "food-culture", count: 15 },
  { name: "Budget Travel", slug: "budget", count: 12 },
  { name: "Solo Travel", slug: "solo-travel", count: 9 },
  { name: "Photography", slug: "photography", count: 8 },
  { name: "Digital Nomad", slug: "digital-nomad", count: 6 }
];