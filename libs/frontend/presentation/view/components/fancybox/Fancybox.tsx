import './fancybox.module.css'
import { Fancybox as NativeFancybox } from '@fancyapps/ui/dist/fancybox.umd.js'
import React, { useEffect } from 'react'

interface FancyboxProps {
  children: unknown
  delegate?: string
  options?: Record<string, unknown>
}

export const Fancybox = ({
  children,
  delegate = '[data-fancybox]',
  options = {},
}: FancyboxProps) => {
  useEffect(() => {
    NativeFancybox.bind(delegate, {
      ...options,
      on: {
        '*': (event: unknown, fancybox: unknown, slide: unknown) => {
          console.log(`event: ${event}`)
        },
      },
    })

    return () => {
      NativeFancybox.destroy()
    }
  }, [])

  return <>{children}</>
}
