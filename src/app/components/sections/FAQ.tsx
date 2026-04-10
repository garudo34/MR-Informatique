// /sections/FAQ.tsx
import { getFAQ } from '@/lib/faq'
import FAQClient from './FAQClient'

export default function FAQ() {
  const faqs = getFAQ()

  return <FAQClient faqs={faqs} />
}
