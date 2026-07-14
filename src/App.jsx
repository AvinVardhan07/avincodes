import React from 'react';
import { RouterProvider, Route } from './context/RouterContext';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import ExperiencePage from './pages/ExperiencePage';
import Contact from './pages/Contact';

function App() {
  return (
    <RouterProvider>
      <div className='relative min-h-screen text-white font-sans selection:bg-blue-600/30 overflow-x-hidden flex flex-col justify-between'>
        {/* Global Background Video (loaded once, won't restart on page change) */}
        <Background />

        {/* Global Navbar */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className='flex-grow'>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<ExperiencePage />} />
          <Route path='/contact' element={<Contact />} />
        </main>

        {/* Global Constant Footer */}
        <Footer />
      </div>
    </RouterProvider>
  );
}

export default App;