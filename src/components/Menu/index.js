import Link from 'next/link'

import { useState } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { ProfileSidebarContent } from '../ProfileSidebarContent'

import {
  MenuWrapper,
  Container,
  Logo,
  Nav,
  ProfileSidebarContainer
} from './styles'

export function Menu({ children }) {
  const [isMenuOpen, setMenuState] = useState(false)

  const links = [
    { name: 'Início', slug: '/' },
    { name: 'Amigos', slug: '/amigos' },
    { name: 'Comunidades', slug: '/comunidades' }
  ]

  const sidebarStyle = isMenuOpen
    ? { pointerEvents: 'all' }
    : { opacity: 0, transform: 'translateY(calc(-100% - 48px))' }

  return (
    <MenuWrapper>
      <Container>
        <Logo src="/logo.svg" alt="Logo" />
        {useMediaQuery('(min-width: 860px)') && (
          <>
            <Nav>
              {links.map(item => {
                return (
                  <Link href={item.slug} key={item.name.toLocaleLowerCase()}>
                    <a>{item.name}</a>
                  </Link>
                )
              })}
            </Nav>
            <Nav>
              <Link href="/logout">
                <a>Sair</a>
              </Link>
              <div>
                <input placeholder="Pesquisar no Devkut" />
              </div>
            </Nav>
          </>
        )}

        {!useMediaQuery('(min-width: 860px)') && (
          <button onClick={() => setMenuState(!isMenuOpen)}>
            {isMenuOpen ? (
              <img src="/menu-open.svg" alt="Fechar" />
            ) : (
              <img src="/menu-closed.svg" alt="Abrir Menu" />
            )}
          </button>
        )}
      </Container>

      {!useMediaQuery('(min-width: 860px)') && (
        <ProfileSidebarContainer style={sidebarStyle}>
          <div>{children}</div>
        </ProfileSidebarContainer>
      )}
    </MenuWrapper>
  )
}
