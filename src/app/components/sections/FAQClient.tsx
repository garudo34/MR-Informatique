'use client'

import Accordion from '../ui/Accordion'
import Container from '../ui/Container'
import { motion } from 'framer-motion'
import type { FAQItem } from '@/lib/types'

type Props = {
  faqs: FAQItem[]
}

export default function FAQClient({ faqs }: Props) {
  return (
    <section id="faq" className="bg-light py-14 md:py-20">
      <Container className="mb-12 max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-primary text-3xl font-bold md:text-4xl"
        >
          Questions fréquentes
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-16 max-w-4xl text-lg leading-relaxed text-gray-700"
        >
          <Accordion items={faqs} />
        </motion.div>
      </Container>
    </section>
  )
}
