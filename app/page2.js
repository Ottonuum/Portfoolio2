'use client'
import { Main } from "next/document"
import Work from "./components/Work"

export default function Home() {
   return  (
        <main className='flex min-h-screen flex-col bg-[#121212]'>
            <Work />
        </main>
   )
}