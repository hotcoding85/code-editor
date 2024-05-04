import { nonEmptyString } from '@codelab/frontend/presentation/view'
import type { JSONSchemaType } from 'ajv'

export interface CreateLambdaData {
  body: string
  name: string
}

export const createLambdaSchema: JSONSchemaType<CreateLambdaData> = {
  properties: {
    body: {
      type: 'string',
      uniforms: {
        component: () => null,
        // component: monacoFieldFactory({
        //   editorOptions: {
        //     language: 'javascript',
        //   },
        //   containerProps: {
        //     style: {
        //       height: '240px',
        //     },
        //   },
        // }),
      },
    },
    name: {
      autoFocus: true,
      ...nonEmptyString,
    },
  },
  required: ['name', 'body'],
  title: 'Create Lambda Input',
  type: 'object',
}
