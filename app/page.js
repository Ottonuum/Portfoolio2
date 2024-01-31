'use client'
import { Main } from 'next/document';
import Image from 'next/image'
import HeroSection from '@/app/components/HeroSection'
import NavBar from './components/NavBar';
import About from './components/About';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <NavBar />
      <div className='mx-auto px-py-4'>
        <HeroSection />
        </div>
      <div>
        <About />
      </div>
      <div>
        <Languages />
      </div>
      <div>
        <Projects />      
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
