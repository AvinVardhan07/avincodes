import React, { useState } from 'react';
import Reveal from '../components/Reveal';
import SpecularButton from '../components/SpecularButton';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', projectType: 'AI Automation', message: '' });
  const [status, setStatus] = useState('');
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', projectType: 'AI Automation', message: '' });
    }, 1500);
  };

  const faqs = [
    {
      q: "What are your typical project timelines?",
      a: "Depending on scale, automation pipelines typically take 2-4 weeks, while full-scale MERN backend/frontend platforms require 6-10 weeks."
    },
    {
      q: "Do you collaborate with international clients?",
      a: "Yes, I regularly collaborate with remote global teams. I adapt to various time zones to ensure seamless engineering handoffs and review loops."
    },
    {
      q: "What is your main technology stack?",
      a: "My core stack includes MongoDB, Express, React, Node.js, Python FastAPI, Java Spring Boot, Redis, and Docker."
    },
    {
      q: "How can I book a detailed project consultation?",
      a: "Simply drop a message via the form above or email marvelousspeaks75@gmail.com. I respond within 24 hours and will share a link to schedule a Google Meet call."
    }
  ];

  return (
    <div className='relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-16 space-y-24'>
      {/* Title */}
      <Reveal>
        <div className='text-center mb-12'>
          <p className='text-[10px] uppercase tracking-[0.4em] text-blue-500 mb-2 font-bold'>
            Get In Touch
          </p>
          <h1 className='text-4xl font-black uppercase text-white tracking-tight'>Start A Conversation</h1>
        </div>
      </Reveal>

      {/* Contact Grid */}
      <div className='grid md:grid-cols-2 gap-8 items-start mb-16 text-left'>
        {/* Left Side: Contact Channels */}
        <div className='space-y-6'>
          <Reveal>
            <div className='glass-card p-6 md:p-8 border border-white/10 rounded-2xl bg-zinc-900/60 backdrop-blur-sm space-y-6'>
              <h2 className='text-md font-bold uppercase tracking-widest text-blue-400 border-b border-white/5 pb-2'>Direct Channels</h2>
              
              <div className='space-y-6 text-sm'>
                <div className='flex items-baseline gap-4 py-2.5 border-b border-white/5'>
                  <span className='text-zinc-500 font-medium uppercase tracking-widest text-[9px] min-w-[80px] inline-block'>Email</span>
                  <a href='mailto:marvelousspeaks75@gmail.com' className='text-gray-300 hover:text-blue-400 transition font-mono text-xs'>
                    marvelousspeaks75@gmail.com
                  </a>
                </div>

                <div className='flex items-baseline gap-4 py-2.5 border-b border-white/5'>
                  <span className='text-zinc-500 font-medium uppercase tracking-widest text-[9px] min-w-[80px] inline-block'>Phone</span>
                  <a href='tel:+918317623672' className='text-gray-300 hover:text-blue-400 transition font-mono text-xs'>
                    +91 8317623672
                  </a>
                </div>

                <div className='flex items-baseline gap-4 py-2.5 border-b border-white/5'>
                  <span className='text-zinc-500 font-medium uppercase tracking-widest text-[9px] min-w-[80px] inline-block'>WhatsApp</span>
                  <a href='https://wa.me/918317623672' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-blue-400 transition font-mono text-xs'>
                    +91 8317623672
                  </a>
                </div>

                <div className='flex items-baseline gap-4 py-2.5'>
                  <span className='text-zinc-500 font-medium uppercase tracking-widest text-[9px] min-w-[80px] inline-block'>Location</span>
                  <span className='text-gray-500 text-xs font-mono'>Hyderabad, India</span>
                </div>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={150}>
            <div className='glass-card p-6 border border-white/10 rounded-2xl bg-zinc-900/60 backdrop-blur-sm flex justify-around py-4'>
              <a href='https://github.com/AvinVardhan07' target='_blank' rel='noopener noreferrer' className='text-xs uppercase tracking-widest text-gray-400 hover:text-blue-400 font-bold transition'>
                GitHub
              </a>
              <span className='text-gray-700'>|</span>
              <a href='#' className='text-xs uppercase tracking-widest text-gray-400 hover:text-blue-400 font-bold transition'>
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Side: Message Form */}
        <Reveal delay={200}>
          <div className='glass-card p-6 md:p-8 border border-white/10 rounded-2xl bg-zinc-900/60 backdrop-blur-sm'>
            <h2 className='text-lg font-bold uppercase tracking-widest text-blue-400 border-b border-white/5 pb-2 mb-6'>Send a message</h2>
            
            <form onSubmit={handleSubmit} className='space-y-4 text-left'>
              <div>
                <label className='text-[9px] text-gray-400 uppercase tracking-wider font-bold block mb-1'>Your Name</label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Avin Vardhan'
                  className='w-full bg-white/5 border border-white/10 p-3 rounded-lg text-xs text-white focus:border-blue-500 outline-none transition'
                  required
                />
              </div>

              <div>
                <label className='text-[9px] text-gray-400 uppercase tracking-wider font-bold block mb-1'>Your Email</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='example@domain.com'
                  className='w-full bg-white/5 border border-white/10 p-3 rounded-lg text-xs text-white focus:border-blue-500 outline-none transition'
                  required
                />
              </div>

              <div>
                <label className='text-[9px] text-gray-400 uppercase tracking-wider font-bold block mb-1'>Project Scope</label>
                <select
                  name='projectType'
                  value={formData.projectType}
                  onChange={handleChange}
                  className='w-full bg-zinc-950 border border-white/10 p-3 rounded-lg text-xs text-white focus:border-blue-500 outline-none transition'
                >
                  <option value='AI Automation'>AI Automation & LLMs</option>
                  <option value='Full-Stack Development'>Full-Stack MERN Development</option>
                  <option value='Consulting / Architecture'>Consulting & Architecture</option>
                  <option value='Other'>Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className='text-[9px] text-gray-400 uppercase tracking-wider font-bold block mb-1'>Project Brief</label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Describe your requirements, system status, or ideas...'
                  className='w-full bg-white/5 border border-white/10 p-3 rounded-lg text-xs text-white focus:border-white/20 outline-none transition h-28'
                  required
                ></textarea>
              </div>

              {status === 'sending' && (
                <p className='text-xs text-blue-400 text-center animate-pulse font-medium'>Sending request...</p>
              )}
              {status === 'success' && (
                <p className='text-xs text-green-400 text-center font-bold'>Inquiry received! We will connect shortly.</p>
              )}

              <SpecularButton
                type='submit'
                disabled={status === 'sending'}
                size="md"
                radius={8}
                baseColor="#1e40af"
                lineColor="#60a5fa"
                textColor="#ffffff"
                intensity={1.2}
                className="w-full font-medium uppercase tracking-widest text-[10px] !py-3"
              >
                Launch Inquiry
              </SpecularButton>
            </form>
          </div>
        </Reveal>
      </div>

      {/* FAQs Accordion */}
      <section className='text-left'>
        <Reveal>
          <h2 className='text-xl font-bold mb-8 uppercase tracking-[0.2em] text-gray-300 text-center'>
            Common Questions
          </h2>
        </Reveal>

        <div className='max-w-2xl mx-auto space-y-4'>
          {faqs.map((faq, index) => {
            const isOpen = faqOpen === index;
            return (
              <Reveal key={index} delay={index * 100}>
                <div className='border-b border-white/5 pb-4'>
                  <button
                    onClick={() => toggleFaq(index)}
                    className='w-full flex justify-between items-center text-left py-3 font-bold text-sm text-white hover:text-blue-400 transition duration-300 cursor-pointer'
                  >
                    <span>{faq.q}</span>
                    <span className='text-blue-500 font-mono text-lg leading-none'>{isOpen ? '−' : '+'}</span>
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className='text-xs text-gray-400 leading-relaxed pl-2 pb-2'>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
