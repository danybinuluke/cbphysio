'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Lower Back Pain Treatment',
    date: 'March 06, 2024',
    image: '/backpain.webp',
    slug: 'lower-back-pain-treatment',
  },
  {
    title: 'Knee Pain Treatment in Coimbatore',
    date: 'March 06, 2024',
    image: '/kneepain.webp',
    slug: 'knee-pain-treatment-in-coimbatore',
  },
];

const BlogTitle = () => {
  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Latest Blog Posts
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              href={`/blogs/${post.slug}`}
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-transparent group-hover:bg-white transition duration-300 p-6 flex justify-between items-center">
                <div>
                  <h3 className="text-black group-hover:text-blue-600 text-xl font-semibold transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-sm text-black group-hover:text-gray-600 mt-1 transition-colors duration-300">
                    {post.date}
                  </p>
                </div>
                <ArrowRight
                  className="text-black group-hover:text-blue-600 transition-transform duration-300 transform group-hover:-rotate-45"
                  size={24}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogTitle;
