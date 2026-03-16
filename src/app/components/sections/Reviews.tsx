'use client'

import Container from '../ui/Container'

const reviews = [
  {
    text: 'Rapide, efficace et très pédagogue. Mon PC refonctionne parfaitement.',
    author: 'Client local',
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-light">
      <Container className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Avis clients
        </h2>
      </Container>

      <Container className="flex justify-center">
        {reviews.map((rev, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg p-8 max-w-xl text-center"
          >
            <p className="text-gray-700 mb-4">“{rev.text}”</p>
            <span className="font-semibold text-gray-900">{rev.author}</span>
          </div>
        ))}
      </Container>
    </section>
  )
}
