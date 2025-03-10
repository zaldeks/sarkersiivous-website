'use client';

import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface ExperienceItem {
  title: string;
  description: string;
}

interface WhyNeedCleaningPoint {
  title: string;
  description: string;
}

interface FAQ {
  q: string;
  a: string;
}

export default function About() {
  const { translations } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Early return with loading state
  if (!translations) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#27ae60]"></div>
      </div>
    );
  }

  const experienceList: ExperienceItem[] = translations.experienceList ? 
    Object.entries(translations.experienceList).map(([title, description]) => ({
      title,
      description: description as string
    })) : [];

  const whyNeedCleaningPoints: WhyNeedCleaningPoint[] = translations.whyNeedCleaningPoints ? 
    Object.entries(translations.whyNeedCleaningPoints).map(([title, description]) => ({
      title,
      description: description as string
    })) : [];

  const faqQuestions: FAQ[] = translations.faqQuestions || [];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/about/about hero image.jpg"
            alt="Professional cleaning team"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {translations.aboutUs}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {translations.aboutHeroDesc}
            </p>
            <Link
              href="/ota-yhteytta"
              className="inline-block bg-[#27ae60] text-white px-8 py-3 rounded-lg hover:bg-[#219a52] transition-colors"
            >
              {translations.getQuote || 'Get a Quote'}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Need Cleaning Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{translations.whyNeedCleaning || 'Why Need Cleaning?'}</h2>
              <p className="text-gray-600 mb-8">{translations.whyNeedCleaningDesc || ''}</p>
              <div className="space-y-4">
                {whyNeedCleaningPoints.map((point) => (
                  <div key={point.title} className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-[#27ae60] mt-1 mr-3" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                      <p className="text-gray-700">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/about/clean home environment.jpg"
                alt="Clean home environment"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{translations.whatWeOffer || 'What We Offer'}</h2>
          <p className="text-gray-600 mb-12">{translations.whatWeOfferDesc || ''}</p>
        </div>
      </section>

      {/* Our Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/about/professional cleaning experience.jpg"
                alt="Professional cleaning experience"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{translations.ourExperience || 'Our Experience'}</h2>
              <p className="text-gray-600 mb-8">{translations.ourExperienceDesc || ''}</p>
              <div className="space-y-4">
                {experienceList.map((item) => (
                  <div key={item.title} className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-[#27ae60] mt-1 mr-3" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{translations.ourPromise || 'Our Promise'}</h2>
          <p className="text-gray-600 mb-8">{translations.ourPromiseDesc || ''}</p>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#27ae60] flex items-center justify-center">
              <CheckCircleIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{translations.serviceGuarantee || 'Tyytyväisyystakuu'}</h3>
            <p className="text-gray-600">
              {translations.satisfactionGuaranteeDesc || ''}
            </p>
            <div className="mt-8">
              <Link
                href="/ota-yhteytta"
                className="inline-block bg-[#27ae60] text-white px-8 py-3 rounded-lg hover:bg-[#219a52] transition-colors"
              >
                {translations.getQuote || 'Get a Quote'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{translations.faq || 'Frequently Asked Questions'}</h2>
          <div className="space-y-4">
            {faqQuestions.map((faq, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-lg">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUpIcon className="w-5 h-5 text-[#27ae60]" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-[#27ae60]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{translations.readyToStart}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {translations.readyToStartDesc}
          </p>
          <Link
            href="/ota-yhteytta"
            className="inline-block bg-[#27ae60] hover:bg-[#219a54] text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            {translations.getQuote}
          </Link>
        </div>
      </section>
    </div>
  );
}
