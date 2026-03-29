'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '../ui/Container'
import ImageCard from '../ui/ImageCard'

const cities = ['Bruay-la-Buissière', 'Béthune', 'Lens', 'Lillers', 'Auchel']

export default function Coverage() {
  return (
    <section
      id="coverage"
      className="relative overflow-hidden bg-blue-50 py-14 md:py-20"
    >
      <Container className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-primary text-3xl font-bold md:text-4xl"
        >
          Zone d’intervention
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-gray-700"
        >
          Intervention rapide à Bruay-la-Buissière (62700) et dans un rayon de
          30 km.
        </motion.p>
      </Container>

      <Container>
        {/* GRID carte + texte */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Carte glass */}
          <ImageCard
            src="/zone-intervention.jpg"
            alt="Zone d’intervention MR Informatique"
            overlayText="Rayon d’intervention 30 km"
            variant="blue"
          />

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg leading-relaxed text-gray-700"
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
              <span className="inline-flex items-center gap-1 transition hover:text-purple-500">
                <a
                  href="https://www.twitch.tv/mr_informatique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition hover:opacity-80"
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
          className="mt-14 text-center"
        >
          <p className="text-primary text-lg font-semibold">
            +200 interventions locales réalisées
          </p>
        </motion.div>

        {/* Badges villes animés */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
          {cities.map((city, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="hover:bg-primary rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:text-white"
            >
              {city}
            </motion.span>
          ))}
        </div>
      </Container>
    </section>
  )
}
