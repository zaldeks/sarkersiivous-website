'use client';

import { useLanguage } from '../context/LanguageContext';
import { blogs } from '../data/blogs';
import Link from 'next/link';

export default function BlogPage() {
  const { language, translations } = useLanguage();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{translations?.blog || 'Blog'}</h1>
          <p className="text-gray-600">
            {translations?.blogDesc || 'Read about our cleaning success stories'}
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link
                href={`/blogi/${blog.id}`}
                key={blog.id}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 bg-gray-200">
                    <img
                      src={blog.imageUrl}
                      alt={language === 'fi' ? blog.titleFi : blog.titleEn}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-[#27ae60] transition-colors">
                      {language === 'fi' ? blog.titleFi : blog.titleEn}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {language === 'fi' ? blog.summaryFi : blog.summaryEn}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{blog.author}</span>
                      <span>{new Date(blog.date).toLocaleDateString(
                        language === 'fi' ? 'fi-FI' : 'en-US',
                        { year: 'numeric', month: 'long', day: 'numeric' }
                      )}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
