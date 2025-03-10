'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface PriceCalculatorProps {
  initialService?: string;
  initialSize?: string;
  onChange?: (service: string, size: string) => void;
}

const PriceCalculator = ({ initialService = 'basic', initialSize = '20-50', onChange }: PriceCalculatorProps) => {
  const { translations } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [service, setService] = useState(initialService);
  const [size, setSize] = useState(initialSize);

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Update parent component when values change
  useEffect(() => {
    onChange?.(service, size);
  }, [service, size, onChange]);

  if (!translations || !mounted) {
    return null;
  }

  // Calculate estimated time based on service and size
  const calculateTime = () => {
    const [minSize, maxSize] = size.split('-').map(s => parseInt(s) || parseInt(size));
    const avgSize = maxSize || minSize;
    let baseTime = 0;

    switch (service) {
      case 'basic':
        baseTime = Math.ceil(avgSize / 50) * 2; // 2 hours per 50m²
        break;
      case 'move':
        baseTime = Math.ceil(avgSize / 30) * 3; // 3 hours per 30m²
        break;
      case 'window':
        baseTime = Math.ceil(avgSize / 60); // 1 hour per 60m²
        break;
      default:
        baseTime = 2;
    }

    return Math.max(2, baseTime); // Minimum 2 hours
  };

  // Calculate price based on time (including VAT)
  const calculatePrice = () => {
    const time = calculateTime();
    const hourlyRate = 46; // €46 per hour (with VAT)
    return time * hourlyRate;
  };

  // Calculate price without VAT
  const calculatePriceWithoutVAT = () => {
    const priceWithVAT = calculatePrice();
    return priceWithVAT / 1.255; // Remove 25.5% VAT
  };

  // Calculate price after tax deduction
  const calculatePriceAfterDeduction = () => {
    const priceWithVAT = calculatePrice();
    return priceWithVAT * 0.65; // 35% tax deduction
  };

  const estimatedTime = calculateTime();
  const priceWithVAT = calculatePrice();
  const priceWithoutVAT = calculatePriceWithoutVAT();
  const priceAfterDeduction = calculatePriceAfterDeduction();

  return (
    <div className="w-full max-w-6xl mx-auto bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        {translations.priceCalculator.priceEstimator}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <label className="block text-gray-700 font-semibold mb-2">
              {translations.priceCalculator.formService}
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#27ae60] focus:border-transparent transition-all"
            >
              <option value="basic">{translations.priceCalculator.basicCleaning}</option>
              <option value="move">{translations.priceCalculator.moveCleaning}</option>
              <option value="window">{translations.priceCalculator.windowCleaning}</option>
            </select>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <label className="block text-gray-700 font-semibold mb-2">
              {translations.priceCalculator.formSize}
            </label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#27ae60] focus:border-transparent transition-all"
            >
              <option value="20-50">20-50 m²</option>
              <option value="50-75">50-75 m²</option>
              <option value="75-100">75-100 m²</option>
              <option value="100-150">100-150 m²</option>
              <option value="150-200">150-200 m²</option>
              <option value="200-250">200-250 m²</option>
              <option value="250">250+ m²</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-gray-100">
            <span className="text-gray-600">{translations.priceCalculator.estimatedTime}</span>
            <span className="text-lg font-semibold text-gray-800">{estimatedTime} {translations.priceCalculator.hours}</span>
          </div>

          <div className="flex justify-between items-center pb-3 border-b border-gray-100">
            <span className="text-gray-600">{translations.priceCalculator.priceWithVAT}</span>
            <span className="text-lg font-semibold text-gray-800">{priceWithVAT.toFixed(2)} €</span>
          </div>

          <div className="flex justify-between items-center pb-3 border-b border-gray-100">
            <span className="text-gray-600">{translations.priceCalculator.priceWithoutVAT}</span>
            <span className="text-lg font-semibold text-gray-800">{priceWithoutVAT.toFixed(2)} €</span>
          </div>

          <div className="flex justify-between items-center pb-3">
            <span className="text-gray-600">{translations.priceCalculator.priceAfterDeduction}</span>
            <span className="text-xl font-bold text-[#27ae60]">{priceAfterDeduction.toFixed(2)} €</span>
          </div>

          <a
            href="/ota-yhteytta"
            className="mt-4 block w-full bg-[#27ae60] text-white text-center px-6 py-3 rounded-lg hover:bg-[#219a54] transition-colors font-semibold shadow-sm hover:shadow-md"
          >
            {translations.getQuote}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
