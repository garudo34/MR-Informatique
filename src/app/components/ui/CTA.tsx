'use client'

import Link from 'next/link'
import Container from './Container'

export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-accent text-white text-center">
      <Container className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Un problème informatique ? Contactez-moi.
        </h2>
        <Link
          href="#contact"
          className="bg-white text-accent px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition"
        >
          Contact rapide
        </Link>
      </Container>
    </section>
  )
}
