'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from './Container'

const cities = ['Bruay-la-Buissière', 'Béthune', 'Lens', 'Lillers', 'Auchel']

export default function Coverage() {
  return (
    <section className="py-28 bg-light relative overflow-hidden">
      <Container className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-primary"
        >
          Zone d’intervention
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 mt-4 max-w-2xl mx-auto"
        >
          Intervention rapide à Bruay-la-Buissière (62700) et dans un rayon de
          30 km.
        </motion.p>
      </Container>

      <Container className="flex flex-col items-center gap-10">
        {/* Carte glass */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-[720px] rounded-3xl backdrop-blur-sm bg-white/70 border border-white/40 shadow-soft p-4"
        >
          <div className="relative group rounded-2xl overflow-hidden">
            <Image
              src="/zone-intervention.jpg"
              alt="Zone d’intervention de MR Informatique autour de Bruay-la-Buissière (rayon 30 km)"
              width={700}
              height={500}
              quality={100}
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70 pointer-events-none" />

            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg font-semibold tracking-wide">
                Rayon d’intervention 30 km
              </p>
            </div>
          </div>
        </motion.div>

        {/* Compteur rassurant */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-primary font-semibold text-lg">
            +200 interventions locales réalisées
          </p>
        </motion.div>

        {/* Badges villes animés */}
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
          {cities.map((city, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:bg-primary hover:text-white transition"
            >
              {city}
            </motion.span>
          ))}
        </div>
      </Container>
    </section>
  )
}
