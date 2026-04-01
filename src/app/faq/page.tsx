import { getFAQ } from '@/lib/faq'
import FAQPageClient from './FAQPageClient'

export default function FAQPage() {
  const faqs = getFAQ()

  return <FAQPageClient faqs={faqs} />
}
