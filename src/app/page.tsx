import React from 'react'
import HeroSection from '@/app/components/HeroSection'
import SolutionSection from '@/app/components/SolutionSection'
import NewsSection from '@/app/components/NewsSection'
import RecruitSection from '@/app/components/RecruitSection'
import ContactSection from '@/app/components/ContactSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SolutionSection />
      <NewsSection />
      <RecruitSection />
      <ContactSection />
    </main>
  )
} 