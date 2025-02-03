"use client";
import React from 'react';
import Image from 'next/image';

export default function TheyTrustUs() {
  const partners = [
    { id: 1, logo: '/assets/bp.png', alt: 'Partner 1' },
    { id: 2, logo: '/assets/entp.png', alt: 'Partner 2' },
    { id: 3, logo: '/assets/samsung.png', alt: 'Partner 3' },
    { id: 4, logo: '/assets/shneider-electric.png', alt: 'Partner 4' },
    { id: 5, logo: '/assets/petrofac.png', alt: 'Partner 5' },
    { id: 6, logo: '/assets/totalgazz.png', alt: 'Partner 6' },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto mb-8">
        <h2 className="text-3xl font-bold text-center mb-12">They Trust Us</h2>
      </div>
      
      <div className="relative">
        {/* Reduced gradient opacity for subtler fade effect */}
        <div className="absolute top-0 left-0 z-10 w-[100px] sm:w-[150px] md:w-[250px] lg:w-[300px] h-full 
          bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        <div className="absolute top-0 right-0 z-10 w-[100px] sm:w-[150px] md:w-[250px] lg:w-[300px] h-full 
          bg-gradient-to-l from-white via-white/80 to-transparent"></div>
        
        <div className="relative flex overflow-x-hidden group">
          {/* First set of logos */}
          <div className="py-12 animate-marquee whitespace-nowrap flex group-hover:[animation-play-state:paused]">
            {partners.map((partner) => (
              <div 
                key={`first-${partner.id}`}
                className="mx-8 sm:mx-12 md:mx-16 flex items-center justify-center bg-white rounded-lg hover:scale-110 transition-transform duration-300"
                style={{ 
                  minWidth: '150px',
                  height: '80px'
                }}
              >
                <div className="relative w-[100px] sm:w-[120px] md:w-[150px] h-[40px] sm:h-[50px] md:h-[60px]">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 150px"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Second set of logos (duplicate) */}
          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex group-hover:[animation-play-state:paused]">
            {partners.map((partner) => (
              <div 
                key={`second-${partner.id}`}
                className="mx-8 sm:mx-12 md:mx-16 flex items-center justify-center bg-white rounded-lg hover:scale-110 transition-transform duration-300"
                style={{ 
                  minWidth: '150px',
                  height: '80px'
                }}
              >
                <div className="relative w-[100px] sm:w-[120px] md:w-[150px] h-[40px] sm:h-[50px] md:h-[60px]">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 150px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}