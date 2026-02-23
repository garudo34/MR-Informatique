'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Cpu, Clock, User } from 'lucide-react'
import Container from './Container'

export default function Hero() {
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

  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <Container className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Texte */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-primary leading-tight"
          >
            Dépannage et réparation informatique à domicile
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 text-lg"
          >
            Intervention rapide • PC & Mac • Particuliers et professionnels
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 text-gray-700 mt-4">
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
                  className="flex items-center gap-2 cursor-default"
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
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6"
          >
            <Link
              href="#contact"
              className="bg-accent text-white px-6 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-all animate-pulse"
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="tel:0600000000"
              className="border-2 border-accent text-accent px-6 py-3 rounded-lg font-semibold text-lg hover:bg-accent hover:text-white transition"
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
          className="flex-1 flex justify-center md:justify-end"
        >
          <img
            src="/hero-technicien.jpg"
            alt="Technicien informatique à domicile"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </motion.div>
      </Container>
    </section>
  )
}
