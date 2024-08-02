import React from 'react';
import { features } from '../../constants/data';

const FeaturesSection = () => {
  return (
    <div className="my-20 border-b border-neutral-800">
      <div className="text-center">
        <span className="bg-zinc-800 text-slate-200 rounded-full h-8 text-font-medium px-4 py-1 uppercase block w-fit m-auto mb-20">
          Features
        </span>

        <h2
          className="text-3xl
       sm:text-5xl lg:text-6xl tracking-tight font-semibold font-costomFontEn text-center"
        >
          Easily Build{' '}
          <span className="bg-gradient-to-r from-slate-300 to-slate-700 text-transparent bg-clip-text">
            Your Code
          </span>
        </h2>
        <div>
          {features.map((item, idx) => (
            <div key={idx}>{item.icon}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
