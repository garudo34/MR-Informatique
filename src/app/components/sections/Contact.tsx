'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import { Phone, Mail, Clock } from 'lucide-react'
import ImageCard from '../ui/ImageCard'

export default function Contact() {
  return (
    <section id="contact" className="bg-light py-14 md:py-20">
      <Container className="mb-12">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Photo */}
          <ImageCard
            src="/IMG_3874.webp"
            alt="Technicien MR Informatique"
            className="mx-auto hidden w-full max-w-sm overflow-hidden rounded-3xl p-4 shadow-lg md:block"
            variant="light"
          />

          {/* Contact + horaires */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-primary text-3xl font-bold md:text-4xl">
              Nous contacter
            </h2>

            <p className="text-lg text-gray-700">
              Besoin d’un dépannage informatique ou d’un conseil ? A votre
              service y compris le soir et le week-end
            </p>

            {/* Infos contact */}
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <Phone className="text-primary" size={20} />
                <a
                  href="tel:0626148111"
                  className="hover:text-primary transition"
                >
                  06 26 14 81 11
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-primary" size={20} />
                <a
                  href="mailto:mr.informatique.pro@gmail.com"
                  className="hover:text-primary transition"
                >
                  mr.informatique.pro@gmail.com
                </a>
              </div>
            </div>

            {/* Horaires */}
            <div className="pt-4">
              <div className="mb-3 flex items-center gap-3">
                <Clock className="text-primary" size={20} />
                <span className="font-semibold text-gray-800">
                  Horaires d&apos;ouverture
                </span>
              </div>

              <ul className="space-y-1 text-gray-700">
                <li>Lundi : 8h00 – 23h00</li>
                <li>Mardi : 8h00 – 23h00</li>
                <li>Mercredi : 8h00 – 23h00</li>
                <li>Jeudi : 8h00 – 23h00</li>
                <li>Vendredi : 8h00 – 23h00</li>
                <li>Samedi : 8h00 – 23h00</li>
                <li>Dimanche : 8h00 – 23h00</li>
              </ul>
              <p className="mt-3 text-sm text-gray-700">
                (majoration de 30% le dimanche, jours fériés, et de 20h à 23h)
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
