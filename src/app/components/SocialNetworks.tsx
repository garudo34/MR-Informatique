'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from './Container'

export default function SocialNetworks() {
  return (
    <section id="socialnetworks" className="py-20 bg-blue-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-primary">
              Suivez-nous sur les réseaux
            </h3>
            <p className="text-gray-700 text-lg">
              Likez, partagez, donnez votre avis
            </p>

            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.facebook.com/mr.informatique.entreprise/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-accent transition"
                >
                  <Image
                    src="/icons/fb_mini.png"
                    alt="Facebook"
                    width={32}
                    height={32}
                  />
                  Likez nous sur Facebook
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/mr.informatique?igshid=vrzyxgjb5ku2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-accent transition"
                >
                  <Image
                    src="/icons/insta_mini.png"
                    alt="Instagram"
                    width={32}
                    height={32}
                  />
                  Abonnez vous sur Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://www.twitch.tv/mr_informatique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-accent transition"
                >
                  <Image
                    src="/icons/twitch_mini.png"
                    alt="Twitch"
                    width={32}
                    height={32}
                  />
                  Suivez nous sur Twitch
                </a>
              </li>

              <li>
                <a
                  href="https://www.pagesjaunes.fr/pros/60729491"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-accent transition"
                >
                  <Image
                    src="/icons/pj_mini.png"
                    alt="PagesJaunes"
                    width={32}
                    height={32}
                  />
                  Laissez un avis sur les Pages Jaunes
                </a>
              </li>

              <li>
                <a
                  href="https://g.page/r/CXi5ulO2zwTJEAI/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-accent transition"
                >
                  <Image
                    src="/icons/gmb_mini.png"
                    alt="Google My Business"
                    width={32}
                    height={32}
                  />
                  Laissez un avis sur Google My Business
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/mr-informatique/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-accent transition"
                >
                  <Image
                    src="/icons/li_mini.png"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                  />
                  Suivez nous sur Linkedin
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-md mx-auto aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/reseaux.jpg"
              alt="Technicien MR Informatique"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
