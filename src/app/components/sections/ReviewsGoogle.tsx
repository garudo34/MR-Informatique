'use client'

import Script from 'next/script'
import Container from '../ui/Container'

export default function ReviewsGoogle() {
  return (
    <section id="reviews" className="bg-light py-20">
      <Container className="mb-12 text-center">
        <h2 className="text-primary text-3xl font-bold md:text-4xl">
          Avis clients de Google
        </h2>
      </Container>

      <Container className="flex justify-center px-0 pt-20 pb-0">
        <div
          className="trustindex-widget"
          data-widget-id="f88cdda67ad52183a9068062193"
        >
          <Script
            src="https://cdn.trustindex.io/loader.js?f88cdda67ad52183a9068062193"
            strategy="lazyOnload"
          />
        </div>
      </Container>
    </section>
  )
}
