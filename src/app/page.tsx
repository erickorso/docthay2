// app/page.tsx

import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="relative z-0"> 
      <ParticleBackground />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}