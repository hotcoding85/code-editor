import React from 'react'
import type { Context } from 'uniforms'
import { useForm } from 'uniforms'

export interface DisplayIfFieldProps<T> {
  condition(context: Context<T>): boolean
}

export const DisplayIfField = <T,>({
  children,
  condition,
}: React.PropsWithChildren<DisplayIfFieldProps<T>>) => {
  const uniforms = useForm<T>()

  return <>{condition(uniforms) ? children || null : null}</>
}

DisplayIfField.displayName = 'DisplayIfField'
