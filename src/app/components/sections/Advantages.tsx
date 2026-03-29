'use client'

import { CheckCircle } from 'lucide-react'
import Container from '../ui/Container'

const advantages = [
  'Intervention rapide à domicile',
  'Explications simples et claires',
  'Tarifs transparents',
  'Service humain et local',
]

export default function Advantages() {
  return (
    <section
      id="advantages"
      className="bg-light scroll-mt-24 py-14 md:scroll-mt-28 md:py-20"
    >
      <Container className="mb-12 text-center">
        <h2 className="text-primary text-3xl font-bold md:text-4xl">
          Pourquoi nous choisir ?
        </h2>
      </Container>

      <Container className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {advantages.map((text, i) => (
          <div
            key={i}
            className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-lg transition-transform hover:scale-105"
          >
            <CheckCircle size={40} className="text-primary mb-4" />
            <p className="font-medium text-gray-700">{text}</p>
          </div>
        ))}
      </Container>
    </section>
  )
}
