'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from './Container'

export default function HeroBackground() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/background_dark_hero.png"
          alt="Technicien informatique à domicile"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Contenu */}
      <Container className="text-center md:text-left">
        <div className="max-w-3xl text-white space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Dépannage & Réparation Informatique à Domicile
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200"
          >
            Intervention rapide à Bruay-la-Buissière et dans un rayon de 30 km.
            PC, Mac, assistance particuliers et professionnels.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              href="#contact"
              className="bg-accent text-white px-6 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition"
            >
              Demander un devis gratuit
            </Link>

            <Link
              href="tel:0600000000"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition"
            >
              Appeler maintenant
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
