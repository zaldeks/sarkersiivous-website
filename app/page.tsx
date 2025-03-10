'use client';

import Image from 'next/image';
import { useLanguage } from './context/LanguageContext';
import PriceCalculator from './components/PriceCalculator';
import Link from 'next/link';

export default function Home() {
  const { translations } = useLanguage();
  
  if (!translations) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-bg.jpg"
            alt="Hero background"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
                {translations.welcomeTitle}
              </h1>
              <p className="text-xl text-white opacity-90 mb-8">
                {translations.welcomeSubtitle}
              </p>
              <Link
                href="/ota-yhteytta"
                className="inline-block bg-[#27ae60] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#219a52] transition-colors"
              >
                {translations.contactUs}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Puhtaampi koti Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations.cleanerHome}</h2>
            <p className="text-lg text-gray-600 mb-8">{translations.cleanerHomeDescription}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {translations.ourServices}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Residential Cleaning */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/services/residental cleaning.jpg"
                  alt="Residential Cleaning"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {translations.residentialCleaning}
                </h3>
                <Link
                  href="/palvelut"
                  className="text-[#27ae60] font-medium hover:text-[#219a52] transition-colors"
                >
                  {translations.readMore} →
                </Link>
              </div>
            </div>

            {/* Window Cleaning */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/services/window cleaning.jpg"
                  alt="Window Cleaning"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {translations.windowCleaning}
                </h3>
                <Link
                  href="/palvelut"
                  className="text-[#27ae60] font-medium hover:text-[#219a52] transition-colors"
                >
                  {translations.readMore} →
                </Link>
              </div>
            </div>

            {/* Special Cleaning */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/services/special cleaning.jpg"
                  alt="Special Cleaning"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {translations.constructionCleaning}
                </h3>
                <Link
                  href="/palvelut"
                  className="text-[#27ae60] font-medium hover:text-[#219a52] transition-colors"
                >
                  {translations.readMore} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">{translations.whyChooseUs}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-[#27ae60] mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{translations.ecofriendly}</h3>
            <p className="text-gray-600">{translations.ecofriendlyDesc}</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-[#27ae60] mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{translations.professional}</h3>
            <p className="text-gray-600">{translations.professionalDesc}</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-[#27ae60] mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{translations.reliable}</h3>
            <p className="text-gray-600">{translations.reliableDesc}</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-[#27ae60] mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{translations.thorough}</h3>
            <p className="text-gray-600">{translations.thoroughDesc}</p>
          </div>
        </div>
      </section>

      {/* Price Calculator Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <PriceCalculator />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{translations.aboutTitle}</h2>
            <p className="text-lg text-gray-700 mb-8">{translations.aboutDesc}</p>
            <ul className="text-left space-y-4">
              {translations.benefitsList.map((benefit: string, index: number) => (
                <li key={index} className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-[#27ae60] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{translations.testimonialTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="ml-4">
                  <h3 className="font-semibold">{translations.testimonial1Name}</h3>
                  <p className="text-gray-600">{translations.testimonial1Title}</p>
                </div>
              </div>
              <p className="text-gray-700">{translations.testimonial1Text}</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="ml-4">
                  <h3 className="font-semibold">{translations.testimonial2Name}</h3>
                  <p className="text-gray-600">{translations.testimonial2Title}</p>
                </div>
              </div>
              <p className="text-gray-700">{translations.testimonial2Text}</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="ml-4">
                  <h3 className="font-semibold">{translations.testimonial3Name}</h3>
                  <p className="text-gray-600">{translations.testimonial3Title}</p>
                </div>
              </div>
              <p className="text-gray-700">{translations.testimonial3Text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-[#27ae60] text-white py-16 w-full">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{translations.readyToStart}</h2>
          <p className="text-xl mb-8">{translations.getInTouch}</p>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/ota-yhteytta"
              className="block w-full bg-white text-[#27ae60] py-4 text-xl font-semibold hover:bg-gray-100 transition-all"
            >
              {translations.getQuote}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
