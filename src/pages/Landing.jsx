import React, { useState, useEffect, useRef } from 'react'
import Reveal from '../components/Reveal'
import TiltedMarquee from '../components/TiltedMarquee'

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
      className='glass-card p-6 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-500 hover:bg-white/5 flex flex-col justify-center items-center text-center'
    >
      <h3 className='text-3xl font-bold mb-2 text-white font-mono'>
        {count}
        {target.includes('+') ? '+' : ''}
        {target.includes('%') ? '%' : ''}
      </h3>
      <p className='text-[9px] uppercase text-gray-400 tracking-[0.2em] font-medium leading-none'>
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
    <div className='relative z-10 w-full flex flex-col items-center'>
      {/* Hero */}
      <header className='relative min-h-[50vh] md:min-h-[60vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden w-full max-w-7xl pt-12'>
        <Reveal>
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter text-white uppercase leading-none'>
            HI, I'M <span className='text-blue-500'>{text}</span>
          </h1>
        </Reveal>
        
        <Reveal delay={200}>
          <p className='max-w-xl mx-auto text-gray-400 mb-6 uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold leading-relaxed'>
            Full-Stack Developer | MERN Stack Enthusiast | AI Solutions Architect
          </p>
        </Reveal>
      </header>

      {/* Tilted Marquee Banner */}
      <TiltedMarquee 
        items={['DATA ANALYTICS', 'CLOUD ARCHITECTURE', 'AUTOMATION', 'SCALING', 'WEB DEVELOPMENT']}
        bgColor='bg-blue-600'
        textColor='text-black'
        rotate='-rotate-[1.5deg]'
        speed='12s'
      />

      {/* Stats */}
      <section className='py-12 w-full max-w-6xl px-6'>
        <Reveal>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            <AnimatedNumber target='1500+' label='Active Users' />
            <AnimatedNumber target='15+' label='Projects Completed' />
            <AnimatedNumber target='12+' label='AI Models Deployed' />
            <AnimatedNumber target='99%' label='System Uptime' />
          </div>
        </Reveal>
      </section>

      {/* Development Focus */}
      <section className='py-16 w-full max-w-6xl px-6 border-y border-white/5 my-12'>
        <div className='flex flex-col lg:flex-row gap-12 items-center'>
          <div className='lg:w-1/2 text-left space-y-6'>
            <Reveal>
              <span className='text-[10px] font-bold text-blue-500 tracking-[0.4em] uppercase'>
                Development Focus
              </span>
              <h2 className='text-3xl md:text-4xl font-extrabold mt-2 mb-4 text-white uppercase tracking-tight'>
                Scale products that dominate markets
              </h2>
              <p className='text-gray-400 text-sm leading-relaxed max-w-md'>
                Shiftless gives you the command infrastructure to architect, automate, and deploy high-velocity digital assets.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className='space-y-4 pt-2'>
                {[
                  'Brand-First Design Systems',
                  'Smart Automation & Workflow Orchestration',
                  'Reliable Development & Launch Support',
                  'Content & Growth Systems'
                ].map((f, i) => (
                  <div key={i} className='flex items-center gap-3 text-xs text-gray-300'>
                    <div className='w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center text-[10px] text-blue-500 font-bold'>
                      ✓
                    </div>{' '}
                    {f}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className='lg:w-1/2 w-full'>
            <Reveal delay={300}>
              <div className='bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl space-y-6 text-left'>
                <div className='flex justify-between items-center pb-4 border-b border-white/5'>
                  <h3 className='text-md font-bold text-white uppercase tracking-wider'>Infrastructure v2.0</h3>
                  <span className='px-2.5 py-0.5 rounded-full bg-blue-600 text-[9px] font-bold text-white tracking-widest'>
                    LIVE
                  </span>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 text-center'>
                  <div className='bg-black/50 p-4 rounded-xl border border-white/5 flex flex-col justify-center items-center'>
                    <p className='text-[9px] text-gray-500 uppercase tracking-widest font-semibold mb-1'>
                      Active Users
                    </p>
                    <p className='text-2xl font-bold text-white font-mono'>1.4K</p>
                  </div>
                  <div className='bg-black/50 p-4 rounded-xl border border-white/5 flex flex-col justify-center items-center'>
                    <p className='text-[9px] text-gray-500 uppercase tracking-widest font-semibold mb-1'>
                      Avg Latency
                    </p>
                    <p className='text-2xl font-bold text-white font-mono'>45ms</p>
                  </div>
                  <div className='bg-black/50 p-4 rounded-xl border border-white/5 flex flex-col justify-center items-center'>
                    <p className='text-[9px] text-gray-500 uppercase tracking-widest font-semibold mb-1'>
                      Uptime
                    </p>
                    <p className='text-2xl font-bold text-white font-mono'>99.9%</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Software Development */}
      <section className='py-16 w-full max-w-4xl px-6 mb-16'>
        <div className='grid md:grid-cols-2 gap-12 items-center text-left'>
          <Reveal>
            <span className='text-[10px] font-bold text-blue-500 tracking-[0.4em] uppercase block mb-2'>
              Engineering
            </span>
            <h2 className='text-3xl font-extrabold mb-4 text-white uppercase tracking-tight'>
              Elevated System Engineering
            </h2>
            <p className='text-gray-400 text-sm leading-relaxed'>
              We combine strategy, design, development, and automation into one cohesive service experience that feels elevated and easy to manage.
            </p>
          </Reveal>
          
          <div className='grid grid-cols-2 gap-4 w-full'>
            <Reveal delay={200}>
              <div className='glass-card p-6 border border-white/10 rounded-xl text-center flex flex-col items-center hover:border-blue-500/30 transition duration-300 bg-white/5'>
                <div className='w-12 h-12 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 mb-4'>
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' />
                  </svg>
                </div>
                <p className='text-[10px] font-bold uppercase tracking-widest text-white'>Backend</p>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div className='glass-card p-6 border border-white/10 rounded-xl text-center flex flex-col items-center hover:border-blue-500/30 transition duration-300 bg-white/5'>
                <div className='w-12 h-12 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 mb-4'>
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm0-5H4V4h11v4z' />
                  </svg>
                </div>
                <p className='text-[10px] font-bold uppercase tracking-widest text-white'>Database</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
