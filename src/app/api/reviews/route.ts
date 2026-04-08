import { NextResponse } from 'next/server'

const PLACE_ID = process.env.GOOGLE_PLACE_ID!
const API_KEY = process.env.GOOGLE_API_KEY!

export async function GET() {
  try {
    const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=displayName,rating,reviews&key=${API_KEY}`

    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'force-cache',
      next: { revalidate: 86400 }, // 1day
    })

    if (!res.ok) {
      throw new Error('Erreur API Google')
    }

    const data = await res.json()

    return NextResponse.json({
      name: data.displayName?.text,
      rating: data.rating,
      reviews: data.reviews || [],
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Impossible de récupérer les avis' },
      { status: 500 }
    )
  }
}
