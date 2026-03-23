'use client'

import Link from 'next/link'
import Container from './Container'

export default function CTA() {
  return (
    <section id="cta" className="bg-accent py-20 text-center text-white">
      <Container className="space-y-6">
        <h2 className="text-3xl font-bold md:text-4xl">
          Un problème informatique ? Contactez-moi.
        </h2>
        <Link
          href="#contact"
          className="text-accent rounded-lg bg-white px-8 py-4 text-lg font-semibold transition hover:opacity-90"
        >
          Contact rapide
        </Link>
      </Container>
    </section>
  )
}
