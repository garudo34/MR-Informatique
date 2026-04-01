import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { FAQItem } from './types'

export function getFAQ(): FAQItem[] {
  const filePath = path.join(process.cwd(), 'src/content/faq/faq.md')
  const fileContent = fs.readFileSync(filePath, 'utf-8')

  const { content } = matter(fileContent)

  return content
    .split('\n## ')
    .filter(Boolean)
    .map((item) => {
      const [question, ...answerParts] = item.split('\n')
      return {
        question: question.trim(),
        answer: answerParts.join('\n').trim(),
      }
    })
}
