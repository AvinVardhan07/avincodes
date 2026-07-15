import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import Reveal from '../components/Reveal';
import TiltedMarquee from '../components/TiltedMarquee';
import SpecularButton from '../components/SpecularButton';

export default function ExperiencePage() {
  const { navigate } = useRouter();
  const [expandedId, setExpandedId] = useState('01');

  const experienceData = [
    {
      id: '01',
      role: 'Application Developer',
      company: 'Capabiliq INC',
      period: 'May 2026 - Present',
      desc: 'Managed critical business operations and application development.',
      detailedDesc: 'At Capabiliq INC, I focus on building high-performance modules for business administration platforms. Working with modern architectures to optimize operations and automate standard operations.',
      bullets: [
        'Designed and implemented microservice integrations to streamline invoice management systems.',
        'Refactored legacy database queries, reducing data-loading times by 35%.',
        'Coordinated closely with product management to deliver client-specific custom widgets.'
      ],
      stack: ['React', 'Node.js', 'Express', 'SQL', 'Git']
    },
    {
      id: '02',
      role: 'Founder',
      company: 'shiftless AI',
      period: 'May 2026 - Present',
      desc: 'Founder @Shiftless | Building Intelligent AI Systems.',
      detailedDesc: 'Shiftless AI is my venture focusing on building customized AI automation pipelines for small to medium-sized business organizations. We design automated content agents, document analysis utilities, and intelligent chat workflows.',
      bullets: [
        'Built autonomous workflow runners integrating Gemini API and Python backend services.',
        'Engineered an ATS resume analysis system that processes thousands of documents monthly.',
        'Consulted with enterprise clients to implement task-level agentic architectures.'
      ],
      stack: ['FastAPI', 'Gemini API', 'LangChain', 'Docker', 'Redis', 'Tailwind']
    },
    {
      id: '03',
      role: 'Developer',
      company: 'Amoire Creative',
      period: 'May 2026 - Present',
      desc: 'Built custom web platforms and business solutions.',
      detailedDesc: 'Collaborating with designers to construct bespoke, asset-rich marketing websites and responsive administrative dashboards for client operations.',
      bullets: [
        'Built optimized web interfaces with smooth CSS keyframes and robust state-management structures.',
        'Integrated multi-layered payment gateways and invoice PDF generation tools.',
        'Maintained 100% responsive standards across diverse client layouts.'
      ],
      stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'REST APIs']
    },
    {
      id: '04',
      role: 'Back End Developer',
      company: 'CODTECH IT SOLUTIONS',
      period: 'Oct 2025 - Feb 2026',
      desc: 'Developed backend solutions, streamlined data pipelines.',
      detailedDesc: 'Worked on backend API structures, database auditing schemes, and server caching procedures to maintain reliable application performances.',
      bullets: [
        'Developed clean RESTful API endpoints using Node.js/Express and Java Spring Boot.',
        'Implemented Redis memory caches to store recurrent user queries, reducing DB read hits by 40%.',
        'Collaborated on git-flow standards, managing code reviews and test writing.'
      ],
      stack: ['Node.js', 'Spring Boot', 'MongoDB', 'Redis', 'PostgreSQL']
    }
  ];

  const services = [
    {
      title: 'Intelligent Automation',
      icon: (
        <svg className='w-8 h-8 text-blue-500 mb-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z' />
        </svg>
      ),
      desc: 'Designing automated system processes, scraping pipelines, and custom AI agent workflows to replace tedious administrative tasks.'
    },
    {
      title: 'Software Architecture',
      icon: (
        <svg className='w-8 h-8 text-blue-500 mb-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' />
        </svg>
      ),
      desc: 'Constructing robust, scalable, and dockerized microservices with secure endpoints, Redis caches, and optimized relational or document databases.'
    },
    {
      title: 'Full-Stack Solutions',
      icon: (
        <svg className='w-8 h-8 text-blue-500 mb-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
        </svg>
      ),
      desc: 'Creating custom MERN stack responsive dashboards, administrative portals, and client web systems with fluid visual dynamics.'
    }
  ];

  return (
    <div className='relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-16 space-y-24'>
      {/* Title */}
      <Reveal>
        <div className='text-center mb-12'>
          <p className='text-[10px] uppercase tracking-[0.4em] text-blue-500 mb-2 font-bold'>
            Experience
          </p>
          <h1 className='text-4xl font-black uppercase text-white tracking-tight'>Professional Journey</h1>
        </div>
      </Reveal>

      {/* Experience Timeline Grid */}
      <section className='text-left'>
        <Reveal>
          <h2 className='text-xl font-bold mb-8 uppercase tracking-[0.2em] text-gray-300 border-l-2 border-blue-500 pl-3'>
            Career Milestones
          </h2>
        </Reveal>

        <div className='grid md:grid-cols-5 gap-8 items-start'>
          {/* Timeline Left: Role selection buttons */}
          <div className='md:col-span-2 space-y-3'>
            {experienceData.map((item, idx) => {
              const isActive = expandedId === item.id;
              return (
                <Reveal key={item.id} delay={idx * 100}>
                  <SpecularButton
                    onClick={() => setExpandedId(item.id)}
                    size="md"
                    radius={12}
                    baseColor={isActive ? '#1e40af' : '#09090b'}
                    lineColor={isActive ? '#60a5fa' : '#27272a'}
                    textColor={isActive ? '#ffffff' : '#a1a1aa'}
                    intensity={isActive ? 1.0 : 0.4}
                    className="w-full text-left !p-4"
                  >
                    <div className="w-full text-left">
                      <span className='text-[9px] font-bold text-blue-400 block mb-1 font-mono'>{item.period}</span>
                      <div className={`font-semibold text-sm transition-colors duration-300 ${isActive ? 'text-white' : 'text-zinc-400'}`}>{item.role}</div>
                      <div className='text-xs text-gray-500 mt-0.5'>{item.company}</div>
                    </div>
                  </SpecularButton>
                </Reveal>
              );
            })}
          </div>

          {/* Timeline Right: Details of selected role */}
          <div className='md:col-span-3 w-full'>
            <Reveal delay={200}>
              <div className='bg-zinc-900/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 min-h-[350px] flex flex-col justify-between space-y-6'>
                {(() => {
                  const active = experienceData.find((x) => x.id === expandedId);
                  return (
                    <div className='space-y-6'>
                      <div>
                        <span className='text-blue-500 text-[9px] font-bold tracking-widest font-mono'>{active.id} / ARCHIVE</span>
                        <h3 className='text-2xl font-bold mt-1 text-white uppercase tracking-tight'>{active.role}</h3>
                        <p className='text-blue-400 text-xs font-bold uppercase tracking-wider mt-0.5'>{active.company}</p>
                        <p className='text-gray-500 text-[10px] uppercase font-mono mt-1'>{active.period}</p>
                      </div>

                      <p className='text-gray-300 text-xs leading-relaxed'>{active.detailedDesc}</p>

                      <div className='space-y-3.5'>
                        <h4 className='text-[9px] font-bold uppercase tracking-wider text-blue-400 font-mono'>Key Responsibilities & Impact</h4>
                        <ul className='space-y-2.5'>
                          {active.bullets.map((b, i) => (
                            <li key={i} className='flex items-start gap-2.5 text-xs text-gray-400 leading-relaxed'>
                              <span className='text-blue-500 mt-1 flex-shrink-0'>▪</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className='pt-4 border-t border-white/5'>
                        <h4 className='text-[9px] font-bold uppercase tracking-wider text-blue-400 mb-2 font-mono'>Core Toolset</h4>
                        <div className='flex flex-wrap gap-2'>
                          {active.stack.map((s, idx) => (
                            <span key={idx} className='px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono text-gray-300 uppercase'>
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Decorative Interactive Tilted Marquee */}
      <TiltedMarquee 
        items={['DEVELOPMENT', 'AUTOMATION', 'SCALING', 'SHIFTLESS AI', 'APPLICATION WORK', 'DATABASES']}
        bgColor='bg-blue-600'
        textColor='text-black'
        rotate='-rotate-[1.5deg]'
        speed='12s'
      />

      {/* Services / Expertise */}
      <section className='text-left'>
        <Reveal>
          <h2 className='text-xl font-bold mb-8 uppercase tracking-[0.2em] text-gray-300 border-l-2 border-blue-500 pl-3'>
            Focus Capabilities
          </h2>
        </Reveal>

        <div className='grid md:grid-cols-3 gap-6'>
          {services.map((srv, index) => (
            <Reveal key={index} delay={index * 100} className='h-full flex'>
              <div
                className='glass-card p-6 border border-white/10 rounded-2xl bg-zinc-900/40 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between items-start group w-full h-full'
              >
                <div className='w-full'>
                  {srv.icon}
                  <h3 className='text-lg font-bold mb-3 text-white group-hover:text-blue-400 transition duration-300'>{srv.title}</h3>
                  <p className='text-xs text-gray-400 leading-relaxed mb-6'>{srv.desc}</p>
                </div>
                <SpecularButton
                  onClick={() => navigate('/contact')}
                  size="sm"
                  radius={8}
                  baseColor="#1e40af"
                  lineColor="#60a5fa"
                  textColor="#ffffff"
                  className="font-medium uppercase tracking-widest text-[9px] mt-4"
                >
                  Discuss Project →
                </SpecularButton>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
