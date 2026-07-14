import React from 'react';
import { useRouter } from '../context/RouterContext';

export default function Footer() {
  const { navigate } = useRouter();

  const handleNav = (to) => {
    navigate(to);
  };

  return (
    <footer className='border-t border-white/5 bg-zinc-950/80 backdrop-blur-md relative z-10 w-full mt-auto text-gray-400 text-xs py-12 md:py-16'>
      <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10'>
        {/* Brand info */}
        <div className='space-y-4'>
          <h3 className='text-white font-bold text-lg tracking-[0.2em]'>AVIN</h3>
          <p className='text-gray-500 text-xs leading-relaxed max-w-sm'>
            Building the future of software, one line of code at a time. Specialize in full-stack engineering, custom backend architectures, and intelligent workflows.
          </p>
          <div className='flex items-center gap-4 pt-2'>
            <a 
              href='https://github.com/AvinVardhan07' 
              target='_blank' 
              rel='noopener noreferrer' 
              className='hover:text-blue-500 transition duration-300 text-md'
              aria-label='GitHub Profile'
            >
              GitHub
            </a>
            <span className='text-zinc-800'>|</span>
            <a 
              href='#' 
              className='hover:text-blue-500 transition duration-300 text-md'
              aria-label='LinkedIn Profile'
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Sitemap links */}
        <div className='space-y-4'>
          <h4 className='text-white font-bold text-xs uppercase tracking-widest border-b border-white/5 pb-2'>Sitemap</h4>
          <ul className='space-y-2 text-xs'>
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Projects', path: '/projects' },
              { name: 'Experience', path: '/experience' },
              { name: 'Contact', path: '/contact' }
            ].map((link) => (
              <li key={link.path}>
                <button
                  onClick={() => handleNav(link.path)}
                  className='text-gray-400 hover:text-blue-400 hover:translate-x-1 transition duration-300 cursor-pointer block'
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact channels */}
        <div className='space-y-4'>
          <h4 className='text-white font-bold text-xs uppercase tracking-widest border-b border-white/5 pb-2'>Direct Channels</h4>
          <ul className='space-y-3 text-xs'>
            <li className='flex items-center gap-2'>
              <span className='text-zinc-500 font-medium uppercase tracking-widest text-[9px] min-w-[70px] inline-block'>Email</span>
              <a href='mailto:marvelousspeaks75@gmail.com' className='hover:text-white transition duration-300 font-mono text-gray-300'>
                marvelousspeaks75@gmail.com
              </a>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-zinc-500 font-medium uppercase tracking-widest text-[9px] min-w-[70px] inline-block'>Phone</span>
              <a href='tel:+918317623672' className='hover:text-white transition duration-300 font-mono text-gray-300'>
                +91 8317623672
              </a>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-zinc-500 font-medium uppercase tracking-widest text-[9px] min-w-[70px] inline-block'>WhatsApp</span>
              <a href='https://wa.me/918317623672' target='_blank' rel='noopener noreferrer' className='hover:text-white transition duration-300 font-mono text-gray-300'>
                Chat Live
              </a>
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-zinc-500 font-medium uppercase tracking-widest text-[9px] min-w-[70px] inline-block'>Location</span>
              <span className='text-gray-500 font-mono'>Hyderabad, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className='border-t border-white/5 pt-8 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-600'>
        <div>
          © {new Date().getFullYear()} AVIN. All Rights Reserved.
        </div>
        <div className='flex gap-6'>
          <span className='hover:text-gray-400 transition duration-300 cursor-pointer'>Privacy Policy</span>
          <span className='hover:text-gray-400 transition duration-300 cursor-pointer'>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
