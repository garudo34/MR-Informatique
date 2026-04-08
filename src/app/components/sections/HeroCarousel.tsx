'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Cpu, Clock, User } from 'lucide-react'
import ImageSlider from '../ui/ImageSlider'
import Container from '../ui/Container'
import ImageCard from '../ui/ImageCard'

type HeroImage = {
  src: string
  alt: string
}

export default function HeroCarousel() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const yOffset = useTransform(useMotionValue(scrollY), [0, 500], [0, -20])

  const bulletVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.1, duration: 0.5 },
    }),
    hover: { scale: 1.05, textShadow: '0px 0px 4px rgba(0,0,0,0.3)' },
  }

  const [heroImages, setHeroImages] = useState<HeroImage[]>([])
  useEffect(() => {
    fetch('/api/hero-images')
      .then((res) => res.json())
      .then((data) => setHeroImages(data))
  }, [])

  if (!heroImages.length) return null

  return (
    <section className="bg-light overflow-hidden py-14 md:py-20">
      <Container className="flex flex-col items-center gap-12 md:flex-row">
        {/* Texte */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-primary text-4xl leading-tight font-bold md:text-5xl"
          >
            Dépannage et réparation informatique à domicile
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-gray-700"
          >
            Intervention rapide • PC & Mac • Particuliers et professionnels
          </motion.p>

          <motion.div className="mt-4 flex flex-col items-center justify-center gap-6 text-gray-700 sm:flex-row md:justify-start">
            {[
              { icon: Clock, text: 'Intervention rapide' },
              { icon: Cpu, text: 'PC & Mac' },
              { icon: User, text: 'Particuliers et pros' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  variants={bulletVariants}
                  className="flex cursor-default items-center gap-2"
                >
                  <Icon size={20} className="text-primary" />
                  <span>{item.text}</span>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 flex flex-col justify-center gap-4 sm:flex-row md:justify-start"
          >
            <Link
              href="#contact"
              className="bg-accent animate-pulse rounded-lg px-6 py-3 text-lg font-semibold text-white transition-all hover:opacity-90"
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="tel:0600000000"
              className="border-accent text-accent hover:bg-accent rounded-lg border-2 px-6 py-3 text-lg font-semibold transition hover:text-white"
            >
              Appeler maintenant
            </Link>
          </motion.div>
        </div>

        {/* Image parallax */}
        <motion.div
          style={{ y: yOffset }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex w-full justify-center md:flex-1"
        >
          <ImageCard
            className="h-full w-[90%] max-w-md overflow-hidden sm:w-full"
            variant="light"
          >
            <ImageSlider images={heroImages} />
          </ImageCard>
        </motion.div>
      </Container>
    </section>
  )
}
