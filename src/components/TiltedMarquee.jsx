import React from 'react';

export default function TiltedMarquee({
  items = [],
  bgColor = 'bg-blue-600',
  textColor = 'text-black',
  rotate = '-rotate-[1.5deg]',
  speed = '12s'
}) {
  // Triple the items to ensure wide screen overflow for seamless infinite loops
  const renderItems = [...items, ...items, ...items];

  return (
    <div className={`w-full overflow-hidden flex items-center ${bgColor} py-5 my-12 transform ${rotate} scale-[1.03] z-10 shadow-[0_4px_25px_rgba(0,102,255,0.25)] border-y border-white/10`}>
      <div className='relative w-full flex overflow-x-hidden'>
        <div 
          className={`marquee flex whitespace-nowrap ${textColor} font-semibold text-xs md:text-sm uppercase tracking-[0.3em] items-center`}
          style={{ animationDuration: speed }}
        >
          {renderItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <span>{item}</span>
              {idx < renderItems.length - 1 && <span className='mx-8 opacity-40'>|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
