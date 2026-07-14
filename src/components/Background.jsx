import React from 'react';
import PixelSnow from './PixelSnow';

export default function Background() {
  return (
    <>
      {/* Global Background Snow Canvas */}
      <div className='fixed top-0 left-0 w-full h-full -z-20 bg-black'>
        <PixelSnow 
          color="#ffffff"
          flakeSize={0.01}
          minFlakeSize={1.25}
          pixelResolution={200}
          speed={1.25}
          density={0.3}
          direction={125}
          brightness={1}
          depthFade={8}
          farPlane={20}
          gamma={0.4545}
          variant="square"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlay */}
      <div className='fixed inset-0 bg-black/75 -z-10'></div>
      
      {/* Keyframe animation declarations */}
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee { display: inline-block; white-space: nowrap; animation: marquee 20s linear infinite; }
        .fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
}
