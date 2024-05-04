/* eslint-disable react/jsx-props-no-spreading */
import { Space } from 'antd'
import React from 'react'
import { DeleteLambdaButton } from '../../delete-lambda'
import { ExecuteLambdaButton } from '../../execute-lambda'
import { UpdateLambdaButton } from '../../update-lambda'
import type { ActionColumnProps } from './types'

export const ActionColumn = ({ lambda }: ActionColumnProps) => {
  return (
    <Space size="middle">
      <ExecuteLambdaButton {...lambda} />
      <UpdateLambdaButton {...lambda} />
      <DeleteLambdaButton {...lambda} />
    </Space>
  )
}
