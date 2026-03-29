import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

interface ImageCardProps {
  src?: string | StaticImageData
  alt?: string
  overlayText?: string
  className?: string
  children?: ReactNode
  variant?: 'blue' | 'light'
}

export default function ImageCard({
  src,
  alt,
  overlayText,
  className,
  children,
  variant = 'blue',
}: ImageCardProps) {
  const variants = {
    blue: 'bg-white/70 border-white/40',
    light: 'bg-primary/10 border-primary/10',
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative rounded-3xl p-4 shadow-xl backdrop-blur-sm ${variants[variant]} ${className}`}
    >
      <div className="group relative overflow-hidden rounded-2xl">
        {children ? (
          children
        ) : (
          <Image
            src={src!}
            alt={alt!}
            width={700}
            height={500}
            quality={100}
            className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-105"
            priority
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-70" />

        {overlayText && (
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-lg font-semibold tracking-wide">{overlayText}</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}
