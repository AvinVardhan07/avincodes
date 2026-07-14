import React, { useState } from 'react';
import Reveal from '../components/Reveal';
import TiltedMarquee from '../components/TiltedMarquee';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeModal, setActiveModal] = useState(null);

  const projectsData = [
    {
      title: 'LensLink',
      cat: 'PYTHON/FASTAPI',
      type: 'Python / Java',
      color: 'from-green-500 to-emerald-900',
      link: 'https://github.com/AvinVardhan07/LensLink',
      desc: 'Python FastAPI project for media editing and advanced processing features.',
      detailedDesc: 'LensLink is a backend-intensive web service engineered with Python FastAPI to facilitate fast, automated image and video manipulation. It supports background removal, filter applications, aspect ratio adjustments, and batch processing pipelines with optimized asynchronous tasks.',
      features: ['Asynchronous media processing with Celery', 'Secure file upload and validation', 'Cloudinary storage integration', 'Custom image transformation filters'],
      stack: ['Python', 'FastAPI', 'Celery', 'Pillow', 'Cloudinary', 'Docker']
    },
    {
      title: 'EduPrepAI',
      cat: 'TYPESCRIPT/ML',
      type: 'AI & Automation',
      color: 'from-orange-400 to-zinc-900',
      link: 'https://github.com/AvinVardhan07/EduPrepAI',
      desc: 'AI-powered educational preparation tool made with ML and TypeScript.',
      detailedDesc: 'EduPrepAI leverages machine learning algorithms to personalize study schedules, generate automated practice tests, and analyze performance gaps for students. Built with a responsive TypeScript frontend and intelligent grading algorithms.',
      features: ['Personalized study plan generator', 'AI-assisted quiz formulation from raw text', 'Dynamic progress tracking analytics', 'Real-time feedback engine'],
      stack: ['TypeScript', 'React', 'Node.js', 'Python', 'Scikit-Learn', 'Gemini API']
    },
    {
      title: 'Fintech-Redis',
      cat: 'MERN/REDIS',
      type: 'Full Stack / MERN',
      color: 'from-blue-600 to-indigo-900',
      link: 'https://github.com/AvinVardhan07/FinTech-MERN-Redis',
      desc: 'Fintech platform utilizing MERN, Redis, and Docker for efficiency.',
      detailedDesc: 'A high-performance financial transactions ledger dashboard using Node.js/Express, MongoDB, and Redis caching. Employs Docker for seamless multi-container staging. Redis is utilized for session caching, transaction queuing, and locking mechanisms to avoid double-spend hazards.',
      features: ['Secure user authentication via JWT & HTTP-only cookies', 'Real-time transaction locking using Redis Redlock', 'Interactive charts detailing spending trends', 'Dockerized microservice orchestrations'],
      stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Redis', 'Docker', 'Recharts']
    },
    {
      title: 'VetConnect',
      cat: 'JAVA/MEDICO',
      type: 'Python / Java',
      color: 'from-purple-500 to-zinc-900',
      link: 'https://github.com/AvinVardhan07/VetConnect',
      desc: 'Java-based medical solution tailored for veterinary professionals.',
      detailedDesc: 'VetConnect streamlines clinical workflows for veterinarians. Built on Java and Spring Boot, it handles patient records, appointment scheduling, treatment histories, and prescription tracking. It includes a client portal for pet owners to view medical cards.',
      features: ['Spring Security authentication and role management', 'Medical record auditing log', 'Automated email appointment reminders', 'Digital prescription builder'],
      stack: ['Java', 'Spring Boot', 'Hibernate', 'PostgreSQL', 'Thymeleaf', 'Maven']
    },
    {
      title: 'LoomAi',
      cat: 'AI/RESUME',
      type: 'AI & Automation',
      color: 'from-red-500 to-zinc-900',
      link: 'https://github.com/AvinVardhan07/LoomAI',
      desc: 'Provides ATS corrections, resume scoring, SOP and cover letter generation.',
      detailedDesc: 'LoomAi is an automated recruitment-readiness assistant. Users upload their resumes in PDF format to receive instant parser feedback, ATS compatibility scores, semantic improvement suggestions, and customizable Cover Letter or Statement of Purpose (SOP) copy draftings.',
      features: ['PDF text extraction and parsing analytics', 'Resume scoring against job specifications', 'AI generation of targeted Cover Letters', 'User dashboard tracking previous designs'],
      stack: ['React', 'Tailwind CSS', 'Node.js', 'Gemini API', 'PDF-parse', 'Express']
    },
    {
      title: 'Verse GPT',
      cat: 'GENERATIVE AI',
      type: 'AI & Automation',
      color: 'from-teal-500 to-zinc-900',
      link: 'https://github.com/AvinVardhan07/Avin-gpt',
      desc: 'Generates code snippets and automated social media content.',
      detailedDesc: 'Verse GPT is a customized LLM assistant optimized for software developers and content creators. It provides direct, highly formatted boilerplate generation, contextual bug-finding feedback, and exports automated social post captions optimized for platforms like LinkedIn and Twitter.',
      features: ['Multi-language syntax highlighting support', 'Optimized prompt libraries for prompt engineering', 'Social media caption templates with hashtags', 'Quick copy-to-clipboard actions'],
      stack: ['Vite', 'React', 'Tailwind CSS', 'Google Gemini models', 'Marked.js']
    }
  ];

  const categories = ['All', 'AI & Automation', 'Full Stack / MERN', 'Python / Java'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.type === filter);

  return (
    <div className='relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 min-h-[70vh]'>
      <Reveal>
        <div className='text-center mb-10'>
          <p className='text-[10px] uppercase tracking-[0.4em] text-blue-500 mb-2 font-bold'>
            Portfolio
          </p>
          <h1 className='text-4xl md:text-5xl font-black uppercase text-white tracking-tight'>Explore My Work</h1>
        </div>
      </Reveal>

      {/* Decorative Interactive Tilted Marquee */}
      <TiltedMarquee 
        items={['LATEST WORK', 'CASE STUDIES', 'PRODUCTION CODE', 'REPOSITORIES', 'AI SYSTEMS', 'MERN STACK']}
        bgColor='bg-blue-600'
        textColor='text-black'
        rotate='-rotate-[1.5deg]'
        speed='12s'
      />

      {/* Filter Navigation */}
      <Reveal delay={100}>
        <div className='flex flex-wrap justify-center gap-3 mb-12'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 border rounded-full text-[10px] uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? 'bg-blue-600 border-blue-500 text-black shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Projects Grid */}
      <div className='grid md:grid-cols-3 gap-6 mb-16'>
        {filteredProjects.map((p, idx) => (
          <Reveal key={idx} delay={idx * 80} className='h-full flex'>
            <div
              className='bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group w-full h-full'
            >
              <div>
                <div className={`h-32 w-full bg-gradient-to-br ${p.color} relative overflow-hidden`}>
                  <div className='absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-300' />
                </div>
                <div className='p-5 text-left'>
                  <span className='text-[9px] font-bold text-blue-500 uppercase tracking-widest block mb-1'>
                    {p.cat}
                  </span>
                  <h3 className='text-lg font-bold text-white group-hover:text-blue-400 transition duration-300'>{p.title}</h3>
                  <p className='text-xs text-gray-400 mt-2 leading-relaxed h-12 overflow-hidden text-ellipsis line-clamp-3'>{p.desc}</p>
                </div>
              </div>
              <div className='p-5 pt-0 space-y-2.5 w-full'>
                <button
                  onClick={() => setActiveModal(p)}
                  className='w-full text-center py-2 bg-blue-600/10 border border-blue-500/20 rounded-lg text-[9px] font-bold uppercase tracking-widest text-blue-400 hover:bg-blue-600 hover:text-black transition-all cursor-pointer'
                >
                  View Case Study
                </button>
                <a
                  href={p.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block w-full text-center py-2 bg-white/5 border border-white/10 rounded-lg text-[9px] font-bold uppercase tracking-widest text-gray-400 hover:bg-white/10 hover:text-white transition-all'
                >
                  Visit GitHub
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Case Study Modal */}
      {activeModal && (
        <div 
          onClick={() => setActiveModal(null)}
          className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in cursor-pointer'
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className='bg-zinc-950 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative cursor-default'
          >
            {/* Header Gradient */}
            <div className={`h-4 bg-gradient-to-r ${activeModal.color}`} />
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className='absolute top-6 right-6 text-gray-400 hover:text-white transition text-xl cursor-pointer'
              aria-label='Close modal'
            >
              ✕
            </button>

            <div className='p-8 text-left'>
              <span className='text-[10px] font-bold text-blue-500 uppercase tracking-widest block mb-1'>
                {activeModal.cat}
              </span>
              <h2 className='text-3xl font-bold mt-2 mb-4 text-white uppercase tracking-tight'>{activeModal.title}</h2>
              
              <p className='text-gray-300 text-sm mb-6 leading-relaxed'>
                {activeModal.detailedDesc}
              </p>

              <div className='mb-6'>
                <h4 className='text-xs uppercase tracking-wider text-blue-400 font-bold mb-3'>Key Features & Solutions</h4>
                <ul className='space-y-2'>
                  {activeModal.features.map((feature, fIdx) => (
                    <li key={fIdx} className='flex items-start gap-3 text-xs text-gray-400'>
                      <span className='text-blue-500 mt-0.5'>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mb-8'>
                <h4 className='text-xs uppercase tracking-wider text-blue-400 font-bold mb-3'>Tech Stack</h4>
                <div className='flex flex-wrap gap-2'>
                  {activeModal.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className='px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] text-gray-300 uppercase font-mono'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-3 border-t border-white/5 pt-6'>
                <a
                  href={activeModal.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex-1 text-center py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-[10px] font-bold uppercase tracking-widest transition text-black'
                >
                  Source Code
                </a>
                <button
                  onClick={() => setActiveModal(null)}
                  className='flex-1 py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-[10px] text-gray-300 font-bold uppercase tracking-widest transition cursor-pointer'
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
