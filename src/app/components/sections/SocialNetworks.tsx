'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '../ui/Container'
import ImageCard from '../ui/ImageCard'

export default function SocialNetworks() {
  return (
    <section id="socialnetworks" className="bg-blue-50 py-14 md:py-20">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-primary text-3xl font-bold md:text-4xl">
              Suivez-nous sur les réseaux
            </h3>
            <p className="text-lg text-gray-700">
              Likez, partagez, donnez votre avis
            </p>

            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.facebook.com/mr.informatique.entreprise/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent flex items-center gap-3 transition"
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
                  className="hover:text-accent flex items-center gap-3 transition"
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
                  className="hover:text-accent flex items-center gap-3 transition"
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
                  className="hover:text-accent flex items-center gap-3 transition"
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
                  className="hover:text-accent flex items-center gap-3 transition"
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
                  className="hover:text-accent flex items-center gap-3 transition"
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

          <ImageCard
            src="/reseaux.jpg"
            alt="Technicien MR Informatique"
            className="mx-auto w-full max-w-md overflow-hidden"
            variant="blue"
          />
        </div>
      </Container>
    </section>
  )
}
