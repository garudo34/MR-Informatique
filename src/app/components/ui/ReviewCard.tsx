'use client'

import { useState } from 'react'
import { GoogleReview } from '@/lib/types'
import Image from 'next/image'

type Props = {
  review: GoogleReview
}

export default function ReviewCard({ review }: Props) {
  const {
    authorAttribution,
    rating,
    originalText,
    relativePublishTimeDescription,
  } = review
  const [expanded, setExpanded] = useState(false)
  const toggleExpand = () => setExpanded((prev) => !prev)

  return (
    <div className="mb-2 flex h-full gap-4 rounded-2xl bg-white p-6 shadow-lg transition-shadow duration-200 hover:shadow-xl">
      {/* Photo de profil */}
      <div className="shrink-0">
        <Image
          src={authorAttribution.photoUri || '/default-avatar.png'}
          alt={authorAttribution.displayName}
          width={48}
          height={48}
          className="rounded-full object-cover"
          onError={(e) => {
            e.currentTarget.src = '/default-avatar.png'
          }}
        />
      </div>

      {/* Contenu */}
      <div className="flex-1">
        {/* Nom, badge et rating */}
        <div className="mb-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h4 className="font-body text-primary text-sm font-semibold">
              {authorAttribution.displayName}
            </h4>
          </div>

          {/* Étoiles */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.072 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Texte de l'avis */}
        {originalText?.text && (
          <p className="mb-2 text-sm text-gray-700">
            {expanded ? originalText?.text : originalText?.text.slice(0, 50)}
            {originalText?.text.length > 50 && (
              <button
                className="ml-1 text-xs text-blue-600 hover:underline"
                onClick={toggleExpand}
              >
                {expanded ? 'Voir moins' : 'Voir plus'}
              </button>
            )}
          </p>
        )}

        {/* Date relative */}
        {relativePublishTimeDescription && (
          <p className="text-xs text-gray-400">
            {relativePublishTimeDescription}
          </p>
        )}
      </div>
    </div>
  )
}
