'use client'

import { FaTools, FaCogs, FaDesktop, FaGraduationCap } from 'react-icons/fa'
import Container from './Container'

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
    <section id="services" className="py-20 bg-blue-50">
      <Container className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Nos services
        </h2>
        <p className="text-gray-700 mt-2">
          Tout ce qu’il vous faut pour votre PC, à domicile
        </p>
      </Container>

      <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => {
          const Icon = service.icon
          return (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <Icon size={40} className="text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          )
        })}
      </Container>
    </section>
  )
}
