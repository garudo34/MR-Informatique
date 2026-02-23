'use client'

import { CheckCircle } from 'lucide-react'
import Container from './Container'

const advantages = [
  'Intervention rapide à domicile',
  'Explications simples et claires',
  'Tarifs transparents',
  'Service humain et local',
]

export default function Advantages() {
  return (
    <section className="py-20">
      <Container className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Pourquoi nous choisir ?
        </h2>
      </Container>

      <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {advantages.map((text, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:scale-105 transition-transform"
          >
            <CheckCircle size={36} className="text-primary mb-4" />
            <p className="text-gray-700 font-medium text-center">{text}</p>
          </div>
        ))}
      </Container>
    </section>
  )
}
