export type FAQItem = {
  question: string
  answer: string
}

export type GoogleReview = {
  name: string
  relativePublishTimeDescription: string
  rating: number

  text?: {
    text: string
    languageCode: string
  }

  originalText?: {
    text: string
    languageCode: string
  }

  authorAttribution: {
    displayName: string
    uri?: string
    photoUri?: string
  }

  publishTime: string
}

export type GooglePlaceResponse = {
  name: string
  rating: number
  displayName: {
    text: string
    languageCode: string
  }
  reviews: GoogleReview[]
}
