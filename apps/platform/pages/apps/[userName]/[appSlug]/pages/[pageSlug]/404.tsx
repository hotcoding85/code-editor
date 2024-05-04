import type { CodelabPage } from '@codelab/frontend/abstract/types'
import { auth0Instance } from '@codelab/shared/infra/auth0'
import Head from 'next/head'
import React from 'react'

const Page404: CodelabPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <h1>404 - Page not found</h1>
    </>
  )
}

export default Page404

export const getServerSideProps = auth0Instance().withPageAuthRequired({})

Page404.displayName = 'Page404'
