'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Container from '../ui/Container'
import { GoogleReview } from '@/lib/types'
import ReviewCard from '../ui/ReviewCard'
import Link from 'next/link'

export default function Reviews() {
  const [reviews, setReviews] = useState<GoogleReview[]>([])
  const [rating, setRating] = useState<number | null>(null)

  useEffect(() => {
    fetch('api/reviews')
      .then((res) => res.json())
      .then((data) => {
        setReviews(
          data.reviews
            .filter((r: GoogleReview) => r.rating >= 4)
            .sort((a: GoogleReview, b: GoogleReview) => b.rating - a.rating) ||
            []
        )
        setRating(data.rating || null)
      })
  }, [])

  return (
    <section id="reviews" className="bg-light py-14 md:py-20">
      <Container>
        {/* HEADER */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-3xl font-bold md:text-4xl"
          >
            Avis clients
          </motion.h2>

          {rating && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-4 flex items-center justify-center gap-2"
            >
              <span className="text-xl text-yellow-500">★★★★★</span>
              <span className="font-semibold text-gray-700">
                {rating} / 5 sur Google
              </span>
            </motion.div>
          )}
        </div>
        {/* GRID AVIS */}

        <div className="grid gap-8 md:grid-cols-3">
          <AnimatePresence>
            {reviews.map((review, idx) => (
              <motion.div
                key={review.name} // id unique pour chaque review
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.03 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.15, // effet décalé pour chaque review
                }}
              >
                <ReviewCard key={idx} review={review} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="https://www.google.com/search?sca_esv=15ff0100134ea361&rlz=1C1GCEA_enFR773FR773&sxsrf=ANbL-n463CX9m7tR6_bSpMKmVUELejHUdQ:1775685986871&q=mr+informatique+bruay&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qORleCh8U9vyHb_UJS070JIJkFuKG_gP7ozTg2XyecGp1IEeYb7KXYTvs9-iMeyF9mfKPy_0%3D&uds=ALYpb_lx5Hup9BUa31h6AkHudUb2IPhyqpefkitSJwRid_RYQ1pSqiaEa5uIVaCAatwRl2ADyyY9Vw7G29u8pMoWS_8zLkHpiYvewpDz-OVhByrfQsZndl1j9A0QQBE_haFk4v3vCshH&sa=X&ved=2ahUKEwiTruvjod-TAxWMRKQEHYuPMkMQ3PALegQIGRAE"
            className="bg-accent rounded-lg px-6 py-3 text-lg font-semibold text-white transition-all hover:opacity-90"
          >
            Voir tous les avis Google
          </Link>
        </div>
      </Container>
    </section>
  )
}
