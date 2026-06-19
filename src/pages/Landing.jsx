import React, { useState, useEffect, useRef } from 'react'
import motionLines from '../assets/motion-lines.mp4'

const useCountUp = (target, duration = 1000) => {
  const [count, setCount] = useState(0)
  const elementRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const end = parseInt(target.replace(/[^0-9]/g, ''))
          const startTime = performance.now()
          const update = currentTime => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) requestAnimationFrame(update)
          }
          requestAnimationFrame(update)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (elementRef.current) observer.observe(elementRef.current)
    return () => observer.disconnect()
  }, [target, duration])
  return [elementRef, count]
}

const AnimatedNumber = ({ target, label }) => {
  const [ref, count] = useCountUp(target)
  return (
    <div
      ref={ref}
      className='glass-card p-6 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-500 hover:bg-white/5'
    >
      <h3 className='text-3xl font-bold mb-1'>
        {count}
        {target.includes('+') ? '+' : ''}
      </h3>
      <p className='text-[10px] uppercase text-gray-400 tracking-widest'>
        {label}
      </p>
    </div>
  )
}

export default function Landing () {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const phrases = ['AVIN', 'A DEVELOPER', 'A CREATOR', 'A PROBLEM SOLVER']

  useEffect(() => {
    const currentPhrase = phrases[phraseIdx]
    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentPhrase.substring(0, charIdx + 1))
          setCharIdx(c => c + 1)
          if (charIdx + 1 === currentPhrase.length)
            setTimeout(() => setIsDeleting(true), 2500)
        } else {
          setText(currentPhrase.substring(0, charIdx - 1))
          setCharIdx(c => c - 1)
          if (charIdx - 1 === 0) {
            setIsDeleting(false)
            setPhraseIdx(p => (p + 1) % phrases.length)
          }
        }
      },
      isDeleting ? 30 : 80
    )
    return () => clearTimeout(timer)
  }, [text, isDeleting, charIdx, phraseIdx])

  return (
    <div className='relative min-h-screen text-white selection:bg-blue-600/30 font-sans overflow-x-hidden'>
      {/* Global Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload='auto'
        className='fixed top-0 left-0 w-full h-full object-cover -z-20'
      >
        <source src={motionLines} type='video/mp4' />
      </video>

      {/* Overlay */}
      <div className='fixed inset-0 bg-black/75 -z-10'></div>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee { display: inline-block; white-space: nowrap; animation: marquee 20s linear infinite; }
        .fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Nav */}
      <nav className='fixed w-full z-50 p-6 text-[10px] uppercase tracking-[0.3em] text-gray-400 bg-black/50 backdrop-blur-xl border-b border-white/5'>
        <div className='flex justify-between items-center max-w-7xl mx-auto'>
          <div className='font-bold text-lg text-white'>AVIN</div>
        </div>
      </nav>

      {/* Hero */}
      <header className='relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden'>
        {/* Background Video */}
        
        {/* Content */}
        <div className='relative z-10'>
          <h1 className='text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-white'>
            HI, I'M <span className='text-blue-500'>{text}</span>
          </h1>

          <p className='max-w-xl mx-auto text-gray-400 mb-10 uppercase tracking-[0.4em] text-[10px] font-medium'>
            Full-Stack Developer | MERN Stack Enthusiast | AI Solutions
            Architect
          </p>
        </div>
      </header>

      {/* Academic Background */}
      <section className='py-8 px-6 max-w-3xl mx-auto fade-in-up'>
        <div className='text-center mb-10'>
          <p className='text-[10px] uppercase tracking-[0.5em] text-blue-500 mb-2'>
            Education
          </p>
          <h2 className='text-3xl font-bold'>Academic Background</h2>
        </div>
        <div className='space-y-4'>
          {[
            {
              inst: 'Malla Reddy University Hyderabad',
              title: 'Bachelor of Technology',
              date: '2023 – 2027',
              desc: 'Focus on Full-Stack, AI Automation, and Software Engineering.'
            },
            {
              inst: 'AAKASH INSTITUTE',
              title: 'Intermediate, MPC',
              date: '2021 – 2023',
              desc: 'Focused on advanced problem-solving.'
            },
            {
              inst: 'Sri Chaitanya Techno School',
              title: 'Schooling',
              date: '2016 – 2021',
              desc: 'Building a foundation for technical ambitions.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className='group p-5 border border-white/10 rounded-xl hover:border-blue-500/30 transition-all duration-300 hover:bg-white/5 flex flex-col md:flex-row md:items-center gap-4'
            >
              <div className='min-w-[120px] text-[10px] text-blue-400 font-bold uppercase tracking-widest'>
                {item.date}
              </div>
              <div>
                <h3 className='text-md font-bold'>{item.inst}</h3>
                <p className='text-[10px] text-gray-400 uppercase tracking-widest'>
                  {item.title}
                </p>
                <p className='text-xs text-gray-500 mt-1'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className='py-8 fade-in-up'>
        <div className='max-w-6xl mx-auto px-6 text-center'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            <AnimatedNumber target='10000+' label='Active Students' />
            <AnimatedNumber target='25+' label='Events Hosted' />
            <AnimatedNumber target='10+' label='Collaborations' />
            <AnimatedNumber target='3' label='Campus Clubs' />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className='py-8 max-w-6xl mx-auto px-6 fade-in-up'>
        <div className='text-center mb-8'>
          <p className='text-[10px] uppercase tracking-[0.5em] text-blue-500 mb-2'>
            Portfolio
          </p>
          <h2 className='text-4xl font-bold'>Explore My Projects</h2>
        </div>
        <div className='grid md:grid-cols-3 gap-6'>
          {[
            {
              title: 'LensLink',
              cat: 'PYTHON/FASTAPI',
              color: 'from-green-500 to-emerald-900',
              link: 'https://github.com/AvinVardhan07/LensLink',
              desc: 'Python FastAPI project for media editing and many more high level features.'
            },
            {
              title: 'EduPrepAI',
              cat: 'TYPESCRIPT/ML',
              color: 'from-orange-400 to-zinc-900',
              link: 'https://github.com/AvinVardhan07/EduPrepAI',
              desc: 'AI-powered educational preparation tool made with ML and TypeScript.'
            },
            {
              title: 'Fintech-Redis',
              cat: 'MERN/REDIS',
              color: 'from-blue-600 to-indigo-900',
              link: 'https://github.com/AvinVardhan07/FinTech-MERN-Redis',
              desc: 'Fintech platform utilizing MERN, Redis, and Docker for efficiency.'
            },
            {
              title: 'VetConnect',
              cat: 'JAVA/MEDICO',
              color: 'from-purple-500 to-zinc-900',
              link: 'https://github.com/AvinVardhan07/VetConnect',
              desc: 'Java-based medical solution tailored for veterinary professionals.'
            },
            {
              title: 'LoomAi',
              cat: 'AI/RESUME',
              color: 'from-red-500 to-zinc-900',
              link: 'https://github.com/AvinVardhan07/LoomAI',
              desc: 'Provides ATS corrections, resume scoring, SOP and cover letter generation.'
            },
            {
              title: 'Verse GPT',
              cat: 'GENERATIVE AI',
              color: 'from-teal-500 to-zinc-900',
              link: 'https://github.com/AvinVardhan07/Avin-gpt',
              desc: 'Generates code snippets and automated social media content.'
            }
          ].map((p, i) => (
            <div
              key={i}
              className='bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300'
            >
              <div className={`h-32 w-full bg-gradient-to-br ${p.color}`} />
              <div className='p-5'>
                <span className='text-[9px] font-bold text-blue-500'>
                  {p.cat}
                </span>
                <h3 className='text-lg font-bold mt-1 mb-2'>{p.title}</h3>
                <p className='text-xs text-gray-400 mb-6 h-10'>{p.desc}</p>
                <a
                  href={p.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block w-full text-center py-2 bg-white/5 border border-white/10 rounded-lg text-[9px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-all'
                >
                  Visit GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className='py-8 max-w-4xl mx-auto px-6 fade-in-up'>
        <p className='text-[10px] uppercase tracking-[0.5em] text-blue-500 mb-2 text-center'>
          Experience
        </p>
        <h2 className='text-3xl font-bold text-center mb-10'>
          Career Highlights
        </h2>
        <div className='relative border-l border-white/10 ml-4 md:ml-10 space-y-10'>
          {[
            {
              id: '01',
              role: 'Application Developer',
              company: 'Capabiliq INC',
              period: 'May 2026 - Present',
              desc: 'Managed critical business operations and application development.'
            },
            {
              id: '02',
              role: 'Founder',
              company: 'shiftless AI',
              period: 'May 2026 - Present',
              desc: 'Founder @Shiftless | Building Intelligent AI Systems.'
            },
            {
              id: '03',
              role: 'Developer',
              company: 'Amoire Creative',
              period: 'May 2026 - Present',
              desc: 'Built custom web platforms and business solutions.'
            },
            {
              id: '04',
              role: 'Back End Developer',
              company: 'CODTECH IT SOLUTIONS',
              period: 'Oct 2025 - Feb 2026',
              desc: 'Developed backend solutions, streamlined data pipelines.'
            }
          ].map((item, idx) => (
            <div key={idx} className='relative pl-6'>
              <div className='absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-blue-600' />
              <span className='text-blue-500 text-[10px] font-bold'>
                {item.id}
              </span>
              <h3 className='text-lg font-bold'>{item.role}</h3>
              <p className='text-blue-400/80 text-[9px] font-bold uppercase tracking-widest'>
                {item.company}
              </p>
              <p className='text-gray-500 text-[9px] uppercase tracking-widest'>
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Analytics & Insights (Updated Content) */}
      <section className='py-8 max-w-6xl mx-auto px-6 fade-in-up border-y border-white/5 my-6'>
        <div className='flex flex-col lg:flex-row gap-10 items-center'>
          <div className='lg:w-1/2'>
            <span className='text-[10px] font-bold text-blue-500 tracking-[0.3em] uppercase'>
              Development Focus
            </span>
            <h2 className='text-4xl font-bold mt-2 mb-4'>
              Intelligent Automation
            </h2>
            <p className='text-gray-400 mb-6 text-sm'>
              Automating complex business workflows with intelligent, scalable,
              and efficient AI systems.
            </p>
            <div className='space-y-4'>
              {[
                'Workflow Orchestration',
                'Real-time Processing',
                'Predictive Modeling',
                'System Integration'
              ].map((f, i) => (
                <div key={i} className='flex items-center gap-3 text-xs'>
                  <div className='w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center text-[10px] text-blue-500'>
                    ✓
                  </div>{' '}
                  {f}
                </div>
              ))}
            </div>
          </div>
          <div className='lg:w-1/2 bg-zinc-900 p-6 rounded-2xl border border-white/10 shadow-2xl'>
            <div className='flex justify-between items-center mb-6'>
              <h3 className='text-lg font-bold'>System Status</h3>
              <span className='px-2 py-0.5 rounded-full bg-blue-600 text-[9px] font-bold'>
                ACTIVE
              </span>
            </div>
            <div className='grid grid-cols-2 gap-3 text-center'>
              <div className='bg-black p-3 rounded-lg border border-white/5'>
                <p className='text-[9px] text-gray-500 uppercase'>
                  Models Deployed
                </p>
                <p className='text-xl font-bold'>12</p>
              </div>
              <div className='bg-black p-3 rounded-lg border border-white/5'>
                <p className='text-[9px] text-gray-500 uppercase'>
                  Automations
                </p>
                <p className='text-xl font-bold'>89%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Development (Updated Content) */}
      <section className='py-8 max-w-4xl mx-auto px-6 fade-in-up'>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <div>
            <h2 className='text-3xl font-bold mb-4'>
              Custom Software Architecture
            </h2>
            <p className='text-gray-400 text-sm mb-6 leading-relaxed'>
              Designing robust, secure, and performant back-end architectures
              for modern web applications.
            </p>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='glass-card p-6 border border-white/10 rounded-xl text-center flex flex-col items-center'>
              <div className='w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white mb-3'>
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' />
                </svg>
              </div>
              <p className='text-[10px] font-bold uppercase'>Backend</p>
            </div>
            <div className='glass-card p-6 border border-white/10 rounded-xl text-center flex flex-col items-center'>
              <div className='w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white mb-3'>
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm0-5H4V4h11v4z' />
                </svg>
              </div>
              <p className='text-[10px] font-bold uppercase'>Database</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-16 border-t border-white/10 mt-6 bg-black fade-in-up'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h3 className='text-white font-bold text-2xl mb-2'>Let's connect.</h3>
          <p className='text-gray-400 text-xs mb-8'>
            Building the future of software, one line of code at a time.
            Available for new collaborations.
          </p>

          <div className='flex justify-center gap-6 mb-12'>
            {[
              {
                href: 'mailto:marvelousspeaks75@gmail.com',
                icon: (
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    ></path>
                  </svg>
                )
              },
              {
                href: 'tel:+918317623672',
                icon: (
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    ></path>
                  </svg>
                )
              },
              {
                href: 'https://wa.me/918317623672',
                icon: (
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
                  </svg>
                )
              }
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className='w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition shadow-[0_0_20px_rgba(37,99,235,0.3)]'
              >
                {item.icon}
              </a>
            ))}
          </div>

          <form className='max-w-md mx-auto space-y-4'>
            <input
              type='text'
              placeholder='Your Name'
              className='w-full bg-white/5 border border-white/10 p-3 rounded-lg text-xs focus:border-blue-500 outline-none transition'
            />
            <input
              type='email'
              placeholder='Your Email'
              className='w-full bg-white/5 border border-white/10 p-3 rounded-lg text-xs focus:border-blue-500 outline-none transition'
            />
            <textarea
              placeholder='Tell me about your project...'
              className='w-full bg-white/5 border border-white/10 p-3 rounded-lg text-xs focus:border-white/20 outline-none transition h-24'
            ></textarea>
            <button className='w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-bold uppercase tracking-widest text-[10px] transition'>
              Send Message
            </button>
          </form>
        </div>
      </footer>
    </div>
  )
}
