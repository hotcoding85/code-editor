import { PlusOutlined } from '@ant-design/icons'
import type { CodelabPage } from '@codelab/frontend/abstract/types'
import {
  ComponentsTable,
  CreateComponentModal,
  DeleteComponentModal,
  UpdateComponentModal,
} from '@codelab/frontend/domain/component'
import {
  CuiHeader,
  CuiHeaderBreadcrumb,
  CuiHeaderToolbar,
} from '@codelab/frontend/presentation//codelab-ui'
import { useStore } from '@codelab/frontend/presentation/container'
import type { DashboardTemplateProps } from '@codelab/frontend/presentation/view'
import {
  ContentSection,
  DashboardTemplate,
} from '@codelab/frontend/presentation/view'
import { withPageAuthRedirect } from '@codelab/frontend/shared/utils'
import { Image } from 'antd'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import React from 'react'

const ComponentsPage: CodelabPage<DashboardTemplateProps> = observer(() => {
  return (
    <>
      <Head>
        <title>Components | Codelab</title>
      </Head>

      <CreateComponentModal />
      <UpdateComponentModal />
      <DeleteComponentModal />

      <ContentSection>
        <ComponentsTable />
      </ContentSection>
    </>
  )
})

const AtomsHeader = observer(() => {
  const { componentService } = useStore()

  const toolbarItems = [
    {
      icon: <PlusOutlined />,
      key: 'create',
      onClick: () => componentService.createModal.open(),
      title: 'Create Component',
    },
  ]

  return (
    <CuiHeader
      direction={<CuiHeaderBreadcrumb items={[{ title: 'Components' }]} />}
      logo={
        <Image
          alt="codelab logo"
          className="h-full w-full"
          preview={false}
          src="/logo.png"
        />
      }
      toolbar={
        <CuiHeaderToolbar items={toolbarItems} title="My Header Toolbar" />
      }
    />
  )
})

export default ComponentsPage

export const getServerSideProps = withPageAuthRedirect()

ComponentsPage.Layout = ({ children }) => {
  return (
    <DashboardTemplate Header={AtomsHeader}>{children()}</DashboardTemplate>
  )
}
