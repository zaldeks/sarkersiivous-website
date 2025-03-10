'use client';

import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import { CheckIcon, CalendarDaysIcon, HandRaisedIcon, SparklesIcon, CreditCardIcon, MapPinIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function Services() {
  const { translations } = useLanguage();

  if (!translations) {
    return null;
  }

  const residentialServices = [
    'Pölyjen pyyhintä ja imurointi',
    'Lattioiden pesu',
    'Kylpyhuoneen ja WC:n siivous',
    'Keittiön siivous',
    'Vuodevaatteiden vaihto',
    'Ikkunalautojen pyyhintä'
  ];

  const windowServices = [
    'Ikkunoiden sisä- ja ulkopinnat',
    'Karmit ja puitteet',
    'Ikkunalaudat',
    'Sälekaihtimet',
    'Turvallinen korkealla työskentely',
    'Ympärivuotinen palvelu'
  ];

  const specialServices = [
    'Muuttosiivoukset',
    'Rakennussiivoukset',
    'Suursiivous',
    'Desinfiointi',
    'Hajunpoisto',
    'Allergiasiivoukset'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <img
            src="/images/services/hero-image.jpg"
            alt="Professional cleaning services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {translations.ourServices}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {translations.servicesHeroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Residential Cleaning */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/images/services/residental cleaning.jpg"
                  alt="Residential cleaning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{translations.residentialCleaning}</h3>
                <p className="text-gray-600 mb-6">{translations.residentialDesc}</p>
                <div className="space-y-3 mb-6">
                  {residentialServices.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-[#27ae60] flex-shrink-0 mr-2 mt-1" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/ota-yhteytta"
                  className="inline-block bg-[#27ae60] hover:bg-[#219a54] text-white font-medium py-2 px-6 rounded-full transition-colors"
                >
                  {translations.getQuote}
                </Link>
              </div>
            </div>

            {/* Window Cleaning */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/images/services/window cleaning.jpg"
                  alt="Window cleaning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{translations.windowCleaning}</h3>
                <p className="text-gray-600 mb-6">{translations.windowDesc}</p>
                <div className="space-y-3 mb-6">
                  {windowServices.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-[#27ae60] flex-shrink-0 mr-2 mt-1" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/ota-yhteytta"
                  className="inline-block bg-[#27ae60] hover:bg-[#219a54] text-white font-medium py-2 px-6 rounded-full transition-colors"
                >
                  {translations.getQuote}
                </Link>
              </div>
            </div>

            {/* Special Cleaning */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/images/services/special cleaning.jpg"
                  alt="Special cleaning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{translations.specialCleaning}</h3>
                <p className="text-gray-600 mb-6">{translations.specialDesc}</p>
                <div className="space-y-3 mb-6">
                  {specialServices.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-[#27ae60] flex-shrink-0 mr-2 mt-1" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/ota-yhteytta"
                  className="inline-block bg-[#27ae60] hover:bg-[#219a54] text-white font-medium py-2 px-6 rounded-full transition-colors"
                >
                  {translations.getQuote}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {translations.processTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {translations.processDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 text-center relative z-10">
                <div className="w-16 h-16 bg-[#27ae60] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <CalendarDaysIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {translations.step1Title}
                </h3>
                <p className="text-gray-600">
                  {translations.step1Desc}
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-[#27ae60] -translate-y-1/2 transform" style={{ width: 'calc(100% - 2rem)' }}></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 text-center relative z-10">
                <div className="w-16 h-16 bg-[#27ae60] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <HandRaisedIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {translations.step2Title}
                </h3>
                <p className="text-gray-600">
                  {translations.step2Desc}
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-[#27ae60] -translate-y-1/2 transform" style={{ width: 'calc(100% - 2rem)' }}></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 text-center relative z-10">
                <div className="w-16 h-16 bg-[#27ae60] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <SparklesIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {translations.step3Title}
                </h3>
                <p className="text-gray-600">
                  {translations.step3Desc}
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-[#27ae60] -translate-y-1/2 transform" style={{ width: 'calc(100% - 2rem)' }}></div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 text-center relative z-10">
                <div className="w-16 h-16 bg-[#27ae60] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <CreditCardIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {translations.step4Title}
                </h3>
                <p className="text-gray-600">
                  {translations.step4Desc}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/ota-yhteytta"
              className="inline-flex items-center justify-center bg-[#27ae60] hover:bg-[#219a54] text-white font-medium py-3 px-8 rounded-full transition-colors text-lg"
            >
              {translations.getQuote}
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Map */}
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg bg-gray-50 order-2 md:order-1">
              <Image
                src="/images/south-finland-map.png"
                alt="Service Area Map"
                width={1920}
                height={1080}
                className="w-full h-full object-contain"
                priority
                quality={100}
              />
              <div className="absolute inset-0 bg-[#27ae60] bg-opacity-5"></div>
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <MapPinIcon className="w-12 h-12 text-[#27ae60] mb-4" />
                <h2 className="text-3xl font-bold mb-4">
                  {translations.serviceAreaTitle}
                </h2>
                <p className="text-gray-600 mb-4">
                  {translations.serviceAreaDesc}
                </p>
                <div className="space-y-2">
                  {translations.serviceAreas.map((city: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <CheckIcon className="w-5 h-5 text-[#27ae60] mr-2" />
                      <span className="text-gray-700">{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
