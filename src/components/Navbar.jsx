import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';

export default function Navbar() {
  const { path, navigate } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Projects', to: '/projects' },
    { name: 'Experience', to: '/experience' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav className='fixed w-full z-50 p-6 text-[10px] uppercase tracking-[0.3em] text-gray-400 bg-black/50 backdrop-blur-xl border-b border-white/5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        {/* Brand */}
        <div 
          onClick={() => navigate('/')}
          className='font-bold text-lg text-white cursor-pointer hover:text-blue-500 transition duration-300'
        >
          AVIN
        </div>

        {/* Desktop Links */}
        <div className='hidden md:flex items-center gap-8'>
          {links.map((link) => {
            const isActive = path === link.to;
            return (
              <button
                key={link.to}
                onClick={() => navigate(link.to)}
                className={`cursor-pointer transition duration-300 hover:text-white ${
                  isActive ? 'text-blue-500 font-bold' : 'text-gray-400'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden text-white hover:text-blue-500 transition duration-300 focus:outline-none'
          aria-label='Toggle menu'
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            {isOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Links Dropdown */}
      {isOpen && (
        <div className='md:hidden absolute top-[73px] left-0 w-full bg-black/90 backdrop-blur-xl border-b border-white/5 py-4 px-6 flex flex-col gap-4 animate-fade-in'>
          {links.map((link) => {
            const isActive = path === link.to;
            return (
              <button
                key={link.to}
                onClick={() => {
                  navigate(link.to);
                  setIsOpen(false);
                }}
                className={`text-left cursor-pointer py-2 transition duration-300 hover:text-white tracking-widest ${
                  isActive ? 'text-blue-500 font-bold' : 'text-gray-400'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
