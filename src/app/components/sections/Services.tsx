'use client'

import { FaTools, FaCogs, FaDesktop, FaGraduationCap } from 'react-icons/fa'
import Container from '../ui/Container'

const services = [
  {
    icon: FaTools,
    title: 'Dépannage & réparation PC',
    desc: 'Pannes, virus, écrans bleus, lenteurs',
  },
  {
    icon: FaCogs,
    title: 'Maintenance & optimisation',
    desc: 'Nettoyage, mises à jour, sauvegardes',
  },
  {
    icon: FaDesktop,
    title: 'Montage PC sur mesure',
    desc: 'Gaming, bureautique, professionnel',
  },
  {
    icon: FaGraduationCap,
    title: 'Formation informatique',
    desc: 'Cours personnalisés à domicile',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-blue-50 py-14 md:py-20">
      <Container className="mb-12 text-center">
        <h2 className="text-primary text-3xl font-bold md:text-4xl">
          Nos services
        </h2>
        <p className="mt-2 text-gray-700">
          Tout ce qu’il vous faut pour votre PC, à domicile
        </p>
      </Container>

      <Container className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => {
          const Icon = service.icon
          return (
            <div
              key={i}
              className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-lg transition-transform hover:scale-105"
            >
              <Icon size={40} className="text-primary mb-4" />
              <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-700">{service.desc}</p>
            </div>
          )
        })}
      </Container>
    </section>
  )
}
