import { useMobileOrTabletMediaQuery } from '@codelab/frontend/shared/style'
import type { PropsWithChildren, ReactElement } from 'react'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { Footer } from '../sections/footer/Footer'
import { MenuDesktop } from './menu/DesktopNavigation'
import { menuState } from './menu/menu-state'
import { CodelabMenuContainer } from './menu/MenuContainer'
import { MenuMobile } from './menu/MobileMenu'

export interface HomeTemplateProps {
  children(): ReactElement
}

const Header = ({ children }: PropsWithChildren) => {
  return <header>{children}</header>
}

const Layout = ({ children }: PropsWithChildren) => {
  const isMenuOpen = useRecoilValue(menuState)

  return (
    <div className={isMenuOpen ? 'backdrop-blur' : ''} id="home">
      {children}
    </div>
  )
}

const Content = ({ children }: PropsWithChildren) => {
  return <section>{children}</section>
}

const HomeTemplate = ({ children }: HomeTemplateProps) => {
  const isMobileOrTablet = useMobileOrTabletMediaQuery()

  if (typeof window === 'undefined') {
    return <></>
  }

  return (
    <Layout>
      <Header>
        <CodelabMenuContainer>
          <>{isMobileOrTablet ? <MenuMobile /> : <MenuDesktop />}</>
        </CodelabMenuContainer>
      </Header>
      <Content>{children()}</Content>
      <Footer></Footer>
    </Layout>
  )
}

// const LayoutTest = ({ children }: PropsWithChildren<any>) => {
//   const isMenuOpen = useRecoilValue(menuState)

//   return (
//     <div css={[isMenuOpen ?? tw`backdrop-blur`]} id="home">
//       {children}
//     </div>
//   )
// }

// export const Layout2 = ({ children }: any) => (
//   <LayoutTest>
//     <Header>
//       <CodelabMenuContainer>
//         <MenuDesktop />
//       </CodelabMenuContainer>
//     </Header>
//     <Content>{children}</Content>
//     <Footer></Footer>
//   </LayoutTest>
// )

export default HomeTemplate
