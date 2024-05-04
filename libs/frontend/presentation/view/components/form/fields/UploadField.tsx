import { notify } from '@codelab/frontend/shared/utils'
import type { DraggerProps } from 'antd/lib/upload/Dragger'
import Dragger from 'antd/lib/upload/Dragger'
import React from 'react'
import type { FieldProps } from 'uniforms'
import { connectField } from 'uniforms'
import { wrapField } from 'uniforms-antd'

export type UploadFieldProps = FieldProps<
  string,
  DraggerProps,
  { children?: React.ReactNode }
>

const UploadFieldInternal = (props: UploadFieldProps) =>
  wrapField(
    props,
    <Dragger
      name={props.name}
      onChange={(info) => {
        const { status } = info.file

        if (status === 'error') {
          notify(
            { title: 'File upload failed', type: 'error' },
            info.file.error,
          )
        }

        if (status === 'done') {
          props.onChange(info.file.toString())
        }
      }}
    >
      {props.children}
    </Dragger>,
  )

export const UploadField = connectField<UploadFieldProps>(UploadFieldInternal, {
  kind: 'leaf',
})
