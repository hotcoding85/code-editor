import { NextSeo } from 'next-seo'
import React from 'react'

interface SeoHeadProps {
  description: string
  title: string
}

export const SeoHead = ({ description, title }: SeoHeadProps) => (
  <NextSeo
    description={description}
    openGraph={{ description: description, title }}
    title={title}
    titleTemplate="%s"
  />
)
