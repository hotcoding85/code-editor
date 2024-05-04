import type { CssMap, IElement } from '@codelab/frontend/abstract/core'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { InputNumberWithUnits } from '../components/InputNumberWithUnits'
import {
  extractCssNumber,
  extractCssUnit,
  updateGuiCssProperty,
} from '../utils'

interface PaddingEditorProps {
  element: IElement
  guiCssObj: CssMap
}

const options = ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft']
const units = ['px', '%', 'em', 'rem', 'ch', 'vh', 'vw']

export const PaddingEditor = observer(
  ({ element, guiCssObj }: PaddingEditorProps) => {
    return (
      <>
        {options.map((option) => (
          <InputNumberWithUnits
            currentUnit={extractCssUnit(guiCssObj[option] ?? '') ?? 'px'}
            currentValue={extractCssNumber(guiCssObj[option] ?? '') ?? 0}
            name={option}
            onChange={(value, unit) =>
              updateGuiCssProperty(element, option)(`${value}${unit}`)
            }
            units={units}
          />
        ))}
      </>
    )
  },
)
