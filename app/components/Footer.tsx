'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { translations } = useLanguage();

  if (!translations) {
    return null;
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {translations.navigation.home}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  {translations.footer.home}
                </Link>
              </li>
              <li>
                <Link href="/tietoa-meista" className="text-gray-400 hover:text-white">
                  {translations.footer.about}
                </Link>
              </li>
              <li>
                <Link href="/palvelut" className="text-gray-400 hover:text-white">
                  {translations.footer.services}
                </Link>
              </li>
              <li>
                <Link href="/ota-yhteytta" className="text-gray-400 hover:text-white">
                  {translations.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium mb-4">{translations.contactUs}</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Puh: <a href="tel:0443296873" className="hover:text-[#27ae60]">044 329 6873</a>
              </li>
              <li className="text-gray-400">
                Info: <a href="mailto:info@sarkersiivous.fi" className="hover:text-[#27ae60]">
                  info@sarkersiivous.fi
                </a>
              </li>
              <li className="text-gray-400">
                Myynti: <a href="mailto:myynti@sarkersiivous.fi" className="hover:text-[#27ae60]">
                  myynti@sarkersiivous.fi
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-medium mb-4">{translations.address}</h3>
            <ul className="space-y-2">
              {translations.serviceAreas.map((city: string, index: number) => (
                <li key={index} className="text-gray-400">{city}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <div className="text-sm text-gray-500 mt-4">
            <p>&copy; {new Date().getFullYear()} Sarker Siivous. {translations.allRightsReserved}</p>
            <p>Y-tunnus: 3360393-2</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
