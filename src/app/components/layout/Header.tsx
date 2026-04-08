'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Menu, X } from 'lucide-react'
import Container from '../ui/Container'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-white'
      }`}
    >
      {/* Bandeau contact */}
      <div className="bg-secondary text-sm text-white">
        <Container className="flex h-10 items-center justify-between">
          <span>Intervention rapide à domicile</span>
          <a
            href="tel:0626148111"
            className="flex items-center gap-2 font-semibold hover:underline"
          >
            <Phone size={16} /> 06 26 14 81 11
          </a>
        </Container>
      </div>

      {/* Barre principale */}
      <div className="border-b border-gray-200">
        <Container className="flex h-16 items-center justify-between">
          <Link
            href="/#top"
            className="group flex items-center gap-2 drop-shadow-sm"
          >
            <Image
              src="/logo.png"
              alt="MR Informatique"
              width={140}
              height={100}
              priority
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />

            {/* Optionnel : texte discret */}
            <span className="text-primary font-title text-lg">
              MR <span className="text-secondary">INFORMATIQUE</span>
            </span>
          </Link>
          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
            <Link href="/#services" className="hover:text-primary transition">
              Services
            </Link>
            <Link href="/#coverage" className="hover:text-primary transition">
              Zone d&apos;Intervention
            </Link>
            <Link href="/#pricing" className="hover:text-primary transition">
              Tarifs
            </Link>
            <Link href="/#contact" className="hover:text-primary transition">
              Contact
            </Link>
            <Link href="/#faq" className="hover:text-primary transition">
              FAQ
            </Link>
          </nav>

          {/* Burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} border-b border-gray-200 bg-white`}
      >
        <Container className="flex flex-col gap-5 py-6 font-medium text-gray-700">
          <Link href="/#services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="/#coverage" onClick={() => setIsOpen(false)}>
            Zone d&apos;Intervention
          </Link>
          <Link href="/#pricing" onClick={() => setIsOpen(false)}>
            Tarifs
          </Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </Container>
      </div>
    </header>
  )
}
