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
    <section id="reviews" className="bg-light py-20">
      <Container className="mb-12 text-center">
        <h2 className="text-primary text-3xl font-bold md:text-4xl">
          Avis clients
        </h2>
      </Container>

      <Container className="flex justify-center">
        {reviews.map((rev, i) => (
          <div
            key={i}
            className="max-w-xl rounded-xl bg-white p-8 text-center shadow-lg"
          >
            <p className="mb-4 text-gray-700">“{rev.text}”</p>
            <span className="font-semibold text-gray-900">{rev.author}</span>
          </div>
        ))}
      </Container>
    </section>
  )
}
