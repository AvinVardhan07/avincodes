import React from 'react';
import Reveal from '../components/Reveal';
import TiltedMarquee from '../components/TiltedMarquee';

export default function About() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / CSS3", "Responsive Design"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Python FastAPI", "Java", "RESTful APIs", "System Architecture"]
    },
    {
      title: "Databases & DevOps",
      skills: ["MongoDB", "Redis", "Docker", "Git / GitHub", "SQL / NoSQL", "Cloud Deployment"]
    },
    {
      title: "AI & Automation",
      skills: ["Generative AI", "LLM Orchestration", "Workflow Automation", "LangChain / AI Agents", "Model Deployment", "Intelligent Systems"]
    }
  ];

  const education = [
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
  ];

  return (
    <div className='relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 space-y-24'>
      {/* Intro Section */}
      <section className='text-left'>
        <Reveal>
          <span className='text-[10px] font-bold text-blue-500 tracking-[0.4em] uppercase block mb-2'>
            About Me
          </span>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight text-white uppercase leading-tight'>
            Building Intelligent Systems & Modern Architectures
          </h1>
        </Reveal>

        <div className='grid md:grid-cols-3 gap-8 items-start mt-8'>
          <div className='md:col-span-2 text-gray-400 text-sm leading-relaxed space-y-6'>
            <Reveal delay={100}>
              <p>
                Hi, I'm Avin, a Full-Stack Developer, MERN Stack enthusiast, and AI Solutions Architect based in India. I specialize in designing robust backend systems, building automated workflows, and engineering intelligent applications.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                As the founder of <span className='text-blue-400 font-bold'>shiftless AI</span>, I work on orchestrating AI agents, optimizing systems with modern technologies like Redis and Docker, and constructing secure, performant software.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p>
                Currently pursuing my Bachelor of Technology at Malla Reddy University (2023 - 2027), I constantly bridge the gap between academic theory and bleeding-edge industrial technologies.
              </p>
            </Reveal>
          </div>
          
          <div className='w-full'>
            <Reveal delay={400}>
              <div className='glass-card p-6 border border-white/10 rounded-2xl bg-white/5 hover:border-blue-500/30 transition duration-300 space-y-4'>
                <h3 className='text-white font-bold text-xs uppercase tracking-widest mb-4 border-b border-white/10 pb-2'>Quick Info</h3>
                <ul className='space-y-3 text-xs text-gray-400'>
                  <li className='flex justify-between'><strong className='text-white'>Location:</strong> <span>Hyderabad, India</span></li>
                  <li className='flex justify-between'><strong className='text-white'>Role:</strong> <span>Application Developer</span></li>
                  <li className='flex justify-between'><strong className='text-white'>Enterprise:</strong> <span>Founder @shiftless AI</span></li>
                  <li className='flex justify-between'><strong className='text-white'>Interests:</strong> <span>Gen AI, Automation, FinTech</span></li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Decorative Interactive Tilted Marquee */}
      <TiltedMarquee 
        items={['MERN STACK', 'FASTAPI', 'REDIS', 'DOCKER', 'LLM ORCHESTRATION', 'AI AUTOMATION']}
        bgColor='bg-blue-600'
        textColor='text-black'
        rotate='-rotate-[1.5deg]'
        speed='12s'
      />

      {/* Technical Skills Grid */}
      <section className='text-left'>
        <Reveal>
          <div className='text-center mb-12'>
            <span className='text-[10px] font-bold text-blue-500 tracking-[0.4em] uppercase block mb-2'>
              Expertise
            </span>
            <h2 className='text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight'>Technical Skillset</h2>
          </div>
        </Reveal>

        <div className='grid md:grid-cols-2 gap-6'>
          {skillCategories.map((category, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div
                className='p-6 border border-white/10 rounded-2xl bg-zinc-900/60 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 space-y-4 h-full'
              >
                <h3 className='text-sm font-bold text-white uppercase tracking-widest border-b border-white/5 pb-2 text-blue-400'>
                  {category.title}
                </h3>
                <div className='flex flex-wrap gap-2.5'>
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className='px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-white transition duration-300 font-medium'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Academic Background */}
      <section className='text-left'>
        <Reveal>
          <div className='text-center mb-12'>
            <span className='text-[10px] font-bold text-blue-500 tracking-[0.4em] uppercase block mb-2'>
              Education
            </span>
            <h2 className='text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight'>Academic Timeline</h2>
          </div>
        </Reveal>

        <div className='max-w-3xl mx-auto space-y-6'>
          {education.map((item, idx) => (
            <Reveal key={idx} delay={idx * 150}>
              <div
                className='group p-6 border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:bg-white/5 flex flex-col md:flex-row md:items-center gap-6'
              >
                <div className='min-w-[140px] text-xs text-blue-400 font-extrabold uppercase tracking-widest font-mono'>
                  {item.date}
                </div>
                <div className='space-y-1'>
                  <h3 className='text-md font-bold text-white group-hover:text-blue-400 transition duration-300'>{item.inst}</h3>
                  <p className='text-[9px] text-gray-400 uppercase tracking-widest font-semibold'>
                    {item.title}
                  </p>
                  <p className='text-xs text-gray-500 leading-relaxed mt-2'>{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
