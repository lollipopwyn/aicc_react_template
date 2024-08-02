import React from 'react';
import { heroLinks } from '../../constants/data';
import { Link } from 'react-router-dom';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 gap-10">
      <h1 className="text-4xl lg:text-7xl sm:text-6xl font-costomFontEn tracking-tight text-slate-700 dark:text-slate-200 font-semibold text-center">
        AceDot Build Tools{' '}
        <span className="bg-gradient-to-r from-slate-300 to-slate-700 text-transparent bg-clip-text">
          for Developers
        </span>
      </h1>
      <p className="mb-10 text-center text-slate-300 max-w-4xl font-costomFontKr lg:text-lg mb:text-sm]">
        언론·출판에 대한 허가나 검열과 집회·결사에 대한 허가는 인정되지
        아니한다. 모든 국민은 신체의 자유를 가진다. 누구든지 법률에 의하지
        아니하고는 체포·구속·압수·수색 또는 심문을 받지 아니하며, 법률과 적법한
        절차에 의하지 아니하고는 처벌·보안처분 또는 강제노역을 받지 아니한다.
      </p>
      <div className="flex gap-4">
        {heroLinks.map((item, idx) => (
          <Link
            to={item.to}
            key={idx}
            className={` font-customFontEn border border-neutral-500 py-1 px-4 rounded-md ${
              idx === 0 &&
              'bg-gradient-to-r from-slate-800 to-slate-500 text-white border-0'
            }`}
          >
            {item.text}
          </Link>
        ))}
      </div>
      <div className="flex mt-10 gap-4 justify-center flex-col md:flex-row items-center">
        <video autoPlay muted loop className="vid md:w-1/3">
          <source src={video1} />
        </video>
        <video autoPlay muted loop className="vid md:w-1/3">
          <source src={video2} />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
