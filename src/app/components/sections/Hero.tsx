'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import Container from '../ui/Container'

export default function HeroBackground() {
  const { scrollY } = useScroll()

  // déplacement vertical de l'image
  const y = useTransform(scrollY, [0, 700], [0, 350])

  return (
    <section className="relative flex h-[85vh] min-h-150 w-full items-center justify-center overflow-hidden">
      {/* Image de fond avec parallax */}
      <motion.div style={{ y }} className="absolute inset-0 -z-20">
        <Image
          src="/background_dark_hero.png"
          alt="Technicien informatique à domicile"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay sombre */}
      <div className="absolute inset-0 -z-10 bg-black/60" />

      {/* Contenu */}
      <Container className="text-center md:text-left">
        <div className="max-w-3xl space-y-6 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl leading-tight font-bold md:text-6xl"
          >
            Dépannage & Réparation Informatique à Domicile
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-200 md:text-xl"
          >
            Intervention rapide à Bruay-la-Buissière et dans un rayon de 30 km.
            PC, Mac, assistance particuliers et professionnels.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start"
          >
            <Link
              href="#contact"
              className="bg-accent rounded-lg px-6 py-3 text-lg font-semibold text-white transition hover:opacity-90"
            >
              Demander un devis gratuit
            </Link>

            <Link
              href="tel:0626148111"
              className="rounded-lg border-2 border-white px-6 py-3 text-lg font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Appeler maintenant
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
