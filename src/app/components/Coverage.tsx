'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from './Container'

const cities = ['Bruay-la-Buissière', 'Béthune', 'Lens', 'Lillers', 'Auchel']

export default function Coverage() {
  return (
    <section
      id="coverage"
      className="py-28 bg-blue-50 relative overflow-hidden"
    >
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

      <Container>
        {/* GRID carte + texte */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Carte glass */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl backdrop-blur-sm bg-white/70 border border-white/40 shadow-soft p-4"
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

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-700 text-lg leading-relaxed"
          >
            <p>
              D&apos;Hazebrouck à Arras, de Fruges à Carvin,{' '}
              <strong>MR Informatique</strong> se déplace directement chez vous
              pour régler votre problème avec votre ordinateur, assurer sa
              maintenance ou encore vous former à son utilisation au quotidien.
            </p>

            <p>
              Vous souhaitez faire monter votre ordinateur ? Nous concevons
              votre
              <strong> machine de rêve sur mesure</strong> en fonction de vos
              attentes et de votre budget.
            </p>

            <p>
              Votre ordinateur peut même être assemblé{' '}
              <span className="inline-flex items-center gap-1 hover:text-purple-500 transition">
                <a
                  href="https://www.twitch.tv/mr_informatique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition"
                >
                  en live sur Twitch{' '}
                  <Image
                    src="/icons/twitch.svg"
                    alt="Voir le montage PC en live sur la chaîne Twitch de MR Informatique"
                    width={18}
                    height={18}
                  />
                </a>
              </span>
              . Une fois prêt, il vous est livré <strong>clé en main</strong>{' '}
              partout en France via <strong>Boxtal</strong>.
            </p>
          </motion.div>
        </div>

        {/* Compteur rassurant */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-primary font-semibold text-lg">
            +200 interventions locales réalisées
          </p>
        </motion.div>

        {/* Badges villes animés */}
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mt-8">
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
