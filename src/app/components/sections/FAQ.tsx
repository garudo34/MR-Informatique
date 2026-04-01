// /sections/FAQ.tsx
import { getFAQ } from '@/lib/faq'
import FAQClient from './FAQClient'

export default function FAQ() {
  const faqs = getFAQ().slice(0, 4)

  return <FAQClient faqs={faqs} />
}
