'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '../ui/Container'
import { Banknote } from 'lucide-react'

export default function Pricing() {
  return (
    <section id="pricing" className="bg-blue-50 py-20">
      <Container className="max-w-4xl text-center">
        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-primary text-3xl font-bold md:text-4xl"
        >
          Nos tarifs
        </motion.h2>

        {/* Texte */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg leading-relaxed text-gray-700"
        >
          Nous vous proposons une liste non exhaustive de services variés,
          n&apos;hésitez pas à nous contacter pour obtenir un devis, notre
          diagnostic de panne à domicile est déductible de la réparation. Outre
          l&apos;espèce, vous pourrez également nous régler via carte bancaire
          (avec ou sans contact) ou Paypal. Nous n&apos;acceptons pas les
          chèques.
        </motion.p>

        {/* Bouton PDF */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <a
            href="/misc/tarifs-mr-informatique.pdf"
            download
            className="bg-accent inline-block rounded-lg px-8 py-4 text-lg font-semibold text-white shadow-md transition hover:opacity-90"
          >
            Télécharger la grille tarifaire (PDF)
          </a>
        </motion.div>

        {/* Moyens de paiement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-14"
        >
          <p className="mb-6 text-gray-600">Moyens de paiement acceptés</p>

          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-700">
            <div className="flex items-center gap-2">
              <Banknote size={24} />
              <span>Espèces</span>
            </div>

            <Image
              src="/icons/paiement.png"
              alt="Moyens de paiement acceptés - Carte bancaire"
              width={150}
              height={24}
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
