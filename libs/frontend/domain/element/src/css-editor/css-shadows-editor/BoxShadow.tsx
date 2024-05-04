import type { CssMap, IElement } from '@codelab/frontend/abstract/core'
import type { Nullish } from '@codelab/shared/abstract/types'
import { observer } from 'mobx-react-lite'
import { ObjectTyped } from 'object-typed'
import React, { useEffect } from 'react'
import { CssPropEditorItem } from '../components'
import { ColorPicker } from '../components/ColorPicker'
import { InputNumberWithUnits } from '../components/InputNumberWithUnits'
import {
  extractCssNumber,
  extractCssUnit,
  updateGuiCssProperty,
} from '../utils'

interface BoxShadowEditorProps {
  element: IElement
  guiCssObj: CssMap
}

interface BooleanProp {
  name: 'inset' | 'boxShadow'
  type: 'boolean'
  value: boolean
}

interface NumberProp {
  name: 'offsetX' | 'offsetY' | 'blurRadius' | 'spreadRadius'
  type: 'input-number-with-unit'
  value: number
  units: Array<string>
  unit: string
}

interface ColorPickerProp {
  name: 'color'
  type: 'color-picker'
  value: string
}

interface BoxShadowState {
  boxShadow: BooleanProp
  inset: BooleanProp
  offsetX: NumberProp
  offsetY: NumberProp
  blurRadius: NumberProp
  spreadRadius: NumberProp
  color: ColorPickerProp
}

const props: BoxShadowState = {
  boxShadow: {
    name: 'boxShadow',
    type: 'boolean',
    value: false,
  },
  inset: {
    name: 'inset',
    type: 'boolean',
    value: false,
  },
  offsetX: {
    name: 'offsetX',
    type: 'input-number-with-unit',
    units: ['px', 'em', 'rem', 'ch', 'vh', 'vw'],
    unit: 'px',
    value: 5,
  },
  offsetY: {
    name: 'offsetY',
    type: 'input-number-with-unit',
    units: ['px', 'em', 'rem', 'ch', 'vh', 'vw'],
    unit: 'px',
    value: 5,
  },
  blurRadius: {
    name: 'blurRadius',
    type: 'input-number-with-unit',
    units: ['unset', 'px', 'em', 'rem', 'ch', 'vh', 'vw'],
    unit: 'unset',
    value: 5,
  },
  spreadRadius: {
    name: 'spreadRadius',
    type: 'input-number-with-unit',
    units: ['unset', 'px', 'em', 'rem', 'ch', 'vh', 'vw'],
    unit: 'unset',
    value: 5,
  },
  color: {
    name: 'color',
    type: 'color-picker',
    value: '#000000',
  },
}

const parseBoxShadow = (boxShadow: Nullish<string>): BoxShadowState => {
  if (!boxShadow) {
    return { ...props }
  }

  // extract inset value it exists
  const inset = boxShadow.includes('inset')

  if (inset) {
    boxShadow = boxShadow.replace('inset ', '')
  }

  // extract color if it exists
  const color = (
    boxShadow.match(/\s*(#[0-9a-fA-F]{3,6}|rgba?\([^)]+\))/)?.[0] ?? ''
  ).trim()

  if (color !== '') {
    boxShadow = boxShadow.replace(color, '')
  }

  // extract the rest of the values (the numbers)
  const [offsetX, offsetY, blurRadius, spreadRadius] = boxShadow.split(' ')
  // separate the numbers from the units
  const offsetXNumber = extractCssNumber(offsetX ?? '')
  const offsetXUnit = extractCssUnit(offsetX ?? '')
  const offsetYNumber = extractCssNumber(offsetY ?? '')
  const offsetYUnit = extractCssUnit(offsetY ?? '')
  const blurRadiusNumber = extractCssNumber(blurRadius ?? '')
  const blurRadiusUnit = extractCssUnit(blurRadius ?? '')
  const spreadRadiusNumber = extractCssNumber(spreadRadius ?? '')
  const spreadRadiusUnit = extractCssUnit(spreadRadius ?? '')

  return {
    boxShadow: { ...props.boxShadow, value: true },
    inset: { ...props.inset, value: inset },
    offsetX: {
      ...props.offsetX,
      value: offsetXNumber ?? props.offsetX.value,
      unit: offsetXUnit ?? props.offsetX.unit,
    },
    offsetY: {
      ...props.offsetY,
      value: offsetYNumber ?? props.offsetY.value,
      unit: offsetYUnit ?? props.offsetY.unit,
    },
    blurRadius: {
      ...props.blurRadius,
      value: blurRadiusNumber ?? props.blurRadius.value,
      unit: blurRadiusUnit ?? props.blurRadius.unit,
    },
    spreadRadius: {
      ...props.spreadRadius,
      value: spreadRadiusNumber ?? props.spreadRadius.value,
      unit: spreadRadiusUnit ?? props.spreadRadius.unit,
    },
    color: {
      ...props.color,
      value: color,
    },
  }
}

export const BoxShadow = observer(
  ({ element, guiCssObj }: BoxShadowEditorProps) => {
    const [boxShadowState, setBoxShadowState] = React.useState<BoxShadowState>(
      parseBoxShadow(guiCssObj.boxShadow),
    )

    useEffect(() => {
      updateGuiCssProperty(
        element,
        'boxShadow',
      )(
        // if boxShadow is false, remove the boxShadow property
        // else combine the boxShadow properties into a string
        boxShadowState['boxShadow'].value === false
          ? null
          : `${
              boxShadowState['inset'].value ? 'inset ' : ''
            }${`${boxShadowState['offsetX'].value}${boxShadowState['offsetX'].unit}`} ${`${boxShadowState['offsetY'].value}${boxShadowState['offsetY'].unit}`} ${
              boxShadowState['blurRadius'].unit !== 'unset'
                ? `${boxShadowState['blurRadius'].value}${boxShadowState['blurRadius'].unit}`
                : '0'
            } ${
              boxShadowState['spreadRadius'].unit !== 'unset'
                ? `${boxShadowState['spreadRadius'].value}${boxShadowState['spreadRadius'].unit}`
                : '0'
            } ${boxShadowState['color'].value}`,
      )
    }, [element, boxShadowState])

    return (
      <>
        {/* Object.values lost typing for no reason */}
        {ObjectTyped.values(boxShadowState).map((property) =>
          property.type === 'boolean' ? (
            <CssPropEditorItem
              checked={property.value}
              enableCheckbox
              onCheck={(value) =>
                setBoxShadowState({
                  ...boxShadowState,
                  [property.name]: {
                    ...boxShadowState[property.name],
                    value,
                  },
                })
              }
              title={property.name}
            >
              {
                // eslint-disable-next-line react/jsx-no-useless-fragment
                <></>
              }
            </CssPropEditorItem>
          ) : property.type === 'input-number-with-unit' ? (
            <InputNumberWithUnits
              currentUnit={property.unit}
              currentValue={property.value}
              disabled={property.unit === 'unset'}
              name={property.name}
              onChange={(value, unit) =>
                setBoxShadowState({
                  ...boxShadowState,
                  [property.name]: {
                    ...boxShadowState[property.name],
                    value,
                    unit,
                  },
                })
              }
              units={property.units}
            />
          ) : (
            <ColorPicker
              currentValue={property.value}
              name={property.name}
              onChange={(value) =>
                setBoxShadowState({
                  ...boxShadowState,
                  [property.name]: {
                    ...boxShadowState[property.name],
                    value,
                  },
                })
              }
            />
          ),
        )}
      </>
    )
  },
)
