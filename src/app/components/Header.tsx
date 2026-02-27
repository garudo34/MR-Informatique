'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'
import Container from './Container'

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
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      {/* Bandeau contact */}
      <div className="bg-secondary text-white text-sm">
        <Container className="flex items-center justify-between h-10">
          <span>Intervention rapide à domicile</span>
          <a
            href="tel:0600000000"
            className="flex items-center gap-2 font-semibold hover:underline"
          >
            <Phone size={16} /> 06 00 00 00 00
          </a>
        </Container>
      </div>

      {/* Barre principale */}
      <div className="border-b border-gray-200">
        <Container className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-primary tracking-tight"
          >
            MR <span className="text-secondary">INFORMATIQUE</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link href="#services" className="hover:text-primary transition">
              Services
            </Link>
            <Link href="#tarifs" className="hover:text-primary transition">
              Tarifs
            </Link>
            <Link href="#contact" className="hover:text-primary transition">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition"
          >
            <Phone size={16} /> Intervention
          </Link>

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
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} bg-white border-b border-gray-200`}
      >
        <Container className="flex flex-col py-6 gap-5 text-gray-700 font-medium">
          <Link href="#services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="#tarifs" onClick={() => setIsOpen(false)}>
            Tarifs
          </Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <a
            href="tel:0600000000"
            className="mt-4 flex items-center justify-center gap-2 bg-accent text-white py-3 rounded-lg font-semibold"
          >
            <Phone size={18} /> Appeler maintenant
          </a>
        </Container>
      </div>
    </header>
  )
}
