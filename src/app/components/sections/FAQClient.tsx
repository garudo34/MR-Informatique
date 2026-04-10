'use client'

import Accordion from '../ui/Accordion'
import Container from '../ui/Container'
import { motion } from 'framer-motion'
import type { FAQItem } from '@/lib/types'
import Link from 'next/link'

type Props = {
  faqs: FAQItem[]
}

export default function FAQClient({ faqs }: Props) {
  return (
    <Container>
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-primary text-3xl font-bold md:text-4xl"
        >
          Questions fréquentes
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-700"
      >
        <Accordion items={faqs} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-16 text-center"
      >
        <Link
          href="/faq"
          className="bg-accent rounded-lg px-6 py-3 text-lg font-semibold text-white transition-all hover:opacity-90"
        >
          Voir les autres questions
        </Link>
      </motion.div>
    </Container>
  )
}
