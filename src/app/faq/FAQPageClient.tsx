'use client'

import { motion } from 'framer-motion'
import Container from '@/app/components/ui/Container'
import Accordion from '@/app/components/ui/Accordion'
import type { FAQItem } from '@/lib/types'

type Props = {
  faqs: FAQItem[]
}

export default function FAQPageClient({ faqs }: Props) {
  return (
    <section className="bg-light py-14 md:py-20">
      <Container className="mb-12 max-w-4xl text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-primary text-3xl font-bold md:text-4xl"
        >
          Questions fréquentes
        </motion.h2>

        {/* Accordion */}
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
