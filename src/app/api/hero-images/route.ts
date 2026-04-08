import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const dir = path.join(process.cwd(), 'public/hero')

  const files = fs.readdirSync(dir)

  const images = files
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map((file) => ({
      src: `/hero/${file}`,
      alt: 'Technicien informatique à domicile à Bruay-la-Buissière',
    }))

  return NextResponse.json(images)
}
