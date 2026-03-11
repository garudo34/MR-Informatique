'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from './Container'
import { Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-light">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-sm mx-auto md:mx-0 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg p-4"
          >
            <Image
              src="/IMG_3874.jfif"
              alt="Technicien MR Informatique"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Contact + horaires */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Nous contacter
            </h2>

            <p className="text-gray-700 text-lg">
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
              <div className="flex items-center gap-3 mb-3">
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
              <p className="mt-3 text-gray-700 text-sm">
                (majoration de 30% le dimanche, jours fériés, et de 20h à 23h)
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
