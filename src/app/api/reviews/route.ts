import { NextResponse } from 'next/server'

export const revalidate = 604800

const PLACE_ID = process.env.GOOGLE_PLACE_ID!
const API_KEY = process.env.GOOGLE_API_KEY!

export async function GET() {
  try {
    const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=displayName,rating,reviews,userRatingCount`

    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': API_KEY,
      },
      next: { revalidate: 604800 }, // 1week in seconds
    })

    if (!res.ok) {
      throw new Error('Erreur API Google')
    }

    const data = await res.json()

    return NextResponse.json({
      name: data.displayName?.text,
      rating: data.rating,
      userRatingCount: data.userRatingCount,
      reviews: data.reviews || [],
    })
  } catch {
    return NextResponse.json(
      { error: 'Impossible de récupérer les avis' },
      { status: 500 }
    )
  }
}
