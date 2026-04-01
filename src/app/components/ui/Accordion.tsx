'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'
import type { FAQItem } from '@/lib/types'

export default function Accordion({ items }: { items: FAQItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = activeIndex === index

        return (
          <div
            key={index}
            className="rounded-2xl bg-white shadow-lg backdrop-blur transition-all"
          >
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>

              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-base whitespace-pre-line text-gray-700">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
