import type { ICreateActionData } from '@codelab/frontend/abstract/core'
import { HttpMethod, HttpResponseType } from '@codelab/frontend/abstract/core'
import {
  CodeMirrorField,
  CodeMirrorGraphqlField,
  idSchema,
  nonEmptyString,
  showFieldOnDev,
} from '@codelab/frontend/presentation/view'
import { CodeMirrorLanguage } from '@codelab/shared/abstract/codegen'
import { IActionKind } from '@codelab/shared/abstract/core'
import type { JSONSchemaType } from 'ajv'
import keys from 'lodash/keys'

export const createActionSchema: JSONSchemaType<ICreateActionData> = {
  properties: {
    ...idSchema,
    code: {
      type: 'string',
      uniforms: {
        component: CodeMirrorField({
          language: CodeMirrorLanguage.Typescript,
        }),
      },
    },
    config: {
      label: '',
      properties: {
        ...idSchema,
        data: {
          type: 'object',
          properties: {
            body: {
              nullable: true,
              type: 'string',
              uniforms: {
                component: CodeMirrorField({
                  language: CodeMirrorLanguage.Json,
                }),
              },
            },
            headers: {
              nullable: true,
              type: 'string',
              uniforms: {
                component: CodeMirrorField({
                  language: CodeMirrorLanguage.Json,
                }),
              },
            },
            method: {
              enum: keys(HttpMethod) as Array<HttpMethod>,
              showSearch: true,
              type: 'string',
            },
            query: {
              // nullable: true,
              type: 'string',
              uniforms: {
                component: CodeMirrorGraphqlField({}),
              },
            },
            queryParams: {
              nullable: true,
              type: 'string',
              uniforms: {
                component: CodeMirrorField({
                  language: CodeMirrorLanguage.Json,
                }),
              },
            },
            responseType: {
              enum: Object.values(HttpResponseType),
              showSearch: true,
              type: 'string',
            },
            urlSegment: {
              type: 'string',
            },
            variables: {
              nullable: true,
              type: 'string',
              uniforms: {
                component: CodeMirrorField({
                  language: CodeMirrorLanguage.Json,
                }),
              },
            },
          },
          required: [],
        },
      },
      required: [],
      type: 'object',
    },
    errorActionId: {
      label: 'Error Action',
      nullable: true,
      type: 'string',
    },
    name: {
      autoFocus: true,
      ...nonEmptyString,
    },
    resourceId: {
      label: 'Resource',
      type: 'string',
    },
    storeId: {
      disabled: true,
      type: 'string',
      ...showFieldOnDev(),
    },
    successActionId: {
      label: 'Success Action',
      nullable: true,
      type: 'string',
    },
    type: {
      enum: Object.values(IActionKind),
      type: 'string',
    },
  },
  required: ['name', 'type', 'storeId'],
  title: 'Create Action',
  type: 'object',
}
