import { useScroll } from '@codelab/frontend/shared/utils'
import type { CSSProperties, RefObject } from 'react'
import React from 'react'
import useResizeObserver from 'use-resize-observer/polyfilled'

interface OverlayToolbarProps {
  children?: React.ReactNode
  containerProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
  overlayElement: HTMLElement | React.RefObject<HTMLElement>
  toolbarProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
}

/**
 * This is the overlay container that wraps elements in our builder view.
 *
 * Preview mode: Toggle whether listeners are passed down
 */
export const OverlayToolbar = ({
  children: content,
  containerProps: { className: containerClassName, style: containerStyle } = {},
  overlayElement,
  toolbarProps: { style: toolbarStyle, ...toolbarProps } = {},
}: OverlayToolbarProps) => {
  const element = Object.hasOwnProperty.call(overlayElement, 'current')
    ? (overlayElement as RefObject<HTMLElement>).current
    : (overlayElement as HTMLElement)

  // Make sure we re-render when the element changes its size and when we scroll
  // But we don't actually care about the values, we take what we need from getBoundingClientRect
  useResizeObserver({ ref: element })
  useScroll()

  // This is not very good for performance, if we can find a way to track movement with
  // IntersectionObserver and only update the rect then, it would be much better
  const rect = element?.getBoundingClientRect()

  const style: CSSProperties =
    element && rect
      ? {
          border: '2px solid rgb(41, 205, 255)',
          bottom: `${rect.bottom}px`,
          height: `${rect.height}px`,
          left: `${rect.left}px`,
          pointerEvents: 'none',
          position: 'fixed',
          right: `${rect.right}px`,
          top: `${rect.top}px`,
          width: `${rect.width}px`,
          ...(containerStyle || {}),
        }
      : {}

  return (
    <div
      className={`overlay-toolbar z-50 ${containerClassName || ''}`}
      style={style}
    >
      {element && content && (
        <div
          style={{
            backgroundColor: 'rgb(41, 205, 255)',
            bottom: '100%',
            color: 'white',
            fontSize: '0.8rem',
            marginLeft: '-2px',
            padding: '0.1rem 0.3rem 0.1rem 0.3rem',
            pointerEvents: 'auto',
            position: 'absolute',
            ...(toolbarStyle || {}),
          }}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...toolbarProps}
        >
          {content}
        </div>
      )}
    </div>
  )
}
