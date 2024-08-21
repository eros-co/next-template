import Image from 'next/image'
import { config } from 'app-config'
import { Section } from '@/components/layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Home | ${config.name}`,
  description: '',
}

export default function Home() {
  return (
    <Section>
      <p>Welcome To Your New App</p>
    </Section>
  )
}
