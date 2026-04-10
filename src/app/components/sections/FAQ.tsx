// /sections/FAQ.tsx
import { getFAQ } from '@/lib/faq'
import FAQClient from './FAQClient'

export default function FAQ() {
  const faqs = getFAQ().slice(0, 3)

  return (
    <section id="faq" className="bg-blue-50 py-14 md:py-20">
      <FAQClient faqs={faqs} />
    </section>
  )
}
