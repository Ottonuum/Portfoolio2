import { Main } from 'next/document';
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <div class='mx-auto px-py-4'>
        <HeroSection />
        </div>
    </main>
  );
}
