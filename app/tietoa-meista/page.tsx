'use client';

import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';

interface Value {
  title: string;
  description: string;
}

interface Reason {
  title: string;
  description: string;
}

interface Translation {
  aboutTitle: string;
  aboutDesc: string;
  ourStory: string;
  ourStoryContent: string;
  ourStoryExtra: string;
  ourValues: string;
  valuesList: Value[];
  whyChooseUs: string;
  whyChooseUsList: Reason[];
  ourTeam: string;
  ourTeamDesc: string;
  teamQualities: string[];
  ourCommitment: string;
  ourCommitmentDesc: string;
  commitmentPoints: string[];
  serviceAreas: string;
  regions: string;
  footer: {
    serviceAreas: string[];
  };
}

export default function AboutPage() {
  const { translations } = useLanguage();

  if (!translations) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#27ae60]"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-16">
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">{translations.aboutTitle}</h1>
          <p className="text-xl text-gray-600 text-center mb-12">{translations.aboutDesc}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold mb-4">{translations.ourStory}</h2>
              <p className="text-gray-700 mb-4">{translations.ourStoryContent}</p>
              <p className="text-gray-700">{translations.ourStoryExtra}</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold mb-4">{translations.ourValues}</h2>
              <ul className="space-y-4">
                {translations.valuesList.map((value: Value, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-[#27ae60] bg-opacity-10 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      <span className="text-[#27ae60] font-semibold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{value.title}</h3>
                      <p className="text-gray-700">{value.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">{translations.whyChooseUs}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {translations.whyChooseUsList.map((reason: Reason, index: number) => (
                <div key={index} className="flex items-start">
                  <div className="bg-[#27ae60] bg-opacity-10 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-[#27ae60] font-semibold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{reason.title}</h3>
                    <p className="text-gray-700">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold mb-4">{translations.ourTeam}</h2>
              <p className="text-gray-700 mb-4">{translations.ourTeamDesc}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {translations.teamQualities.map((quality: string, index: number) => (
                  <li key={index}>{quality}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold mb-4">{translations.ourCommitment}</h2>
              <p className="text-gray-700 mb-4">{translations.ourCommitmentDesc}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {translations.commitmentPoints.map((point: string, index: number) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">{translations.serviceAreas}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">{translations.regions}</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {translations.footer.serviceAreas.map((area: string, index: number) => (
                    <li key={index}>{area}</li>
                  ))}
                </ul>
              </div>
              <div>
                <Image
                  src="/images/helsinki-map.jpg"
                  alt="Service Areas Map"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
