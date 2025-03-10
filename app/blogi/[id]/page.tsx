'use client';

import { useLanguage } from '../../context/LanguageContext';
import { blogs } from '../../data/blogs';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPost() {
  const { language } = useLanguage();
  const params = useParams();
  const router = useRouter();
  
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) {
    router.push('/blogi');
    return null;
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src={blog.imageUrl}
          alt={language === 'fi' ? blog.titleFi : blog.titleEn}
          width={800}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-4">
              {language === 'fi' ? blog.titleFi : blog.titleEn}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <span>{blog.author}</span>
              <span>•</span>
              <span>{new Date(blog.date).toLocaleDateString(
                language === 'fi' ? 'fi-FI' : 'en-US',
                { year: 'numeric', month: 'long', day: 'numeric' }
              )}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <article className="max-w-3xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          {(language === 'fi' ? blog.contentFi : blog.contentEn)
            .split('\n')
            .map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
        </div>

        <div className="mt-16 pt-8 border-t">
          <Link
            href="/blogi"
            className="text-[#27ae60] hover:text-[#219a54] font-medium"
          >
            ← {language === 'fi' ? 'Takaisin blogiin' : 'Back to blog'}
          </Link>
        </div>
      </article>
    </div>
  );
}
