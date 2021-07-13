import Link from 'next/link'

import { useState } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'

import {
  MenuWrapper,
  Container,
  Logo,
  Nav,
  ProfileSideBarContainer,
  ProfileSidebarMenu
} from './styles'

export function Menu({ githubUser = 'okalil' }) {
  const [isMenuOpen, setMenuState] = useState(false)

  const links = [
    { name: 'Início', slug: '/' },
    { name: 'Amigos', slug: '/amigos' },
    { name: 'Comunidades', slug: '/comunidades' }
  ]

  const sidebarLinks = [
    { name: 'Perfil', href: '/', src: 'user' },
    { name: 'Recados', href: '/', src: 'book' },
    { name: 'Fotos', href: '/', src: 'camera' },
    { name: 'Depoimentos', href: '/', src: 'sun' }
  ]

  const sidebarStyle = isMenuOpen
    ? { pointerEvents: 'all' }
    : { opacity: 0, transform: 'translateY(calc(-100% - 48px))' }

  return (
    <MenuWrapper>
      <Container>
        <Nav>
          <Logo src="/logo.svg" alt="Logo" />

          {links.map(item => {
            return (
              <Link href={item.slug}>
                <a key={item.name.toLocaleLowerCase()}>{item.name}</a>
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
        <ProfileSideBarContainer style={sidebarStyle}>
          <div>
            <img src={`https://github.com/${githubUser}.png`} />
            <hr />
            <p>
              <Link href={`/user/${githubUser}`}>
                <a>@{githubUser}</a>
              </Link>
            </p>
            <hr />

            <ProfileSidebarMenu>
              <nav>
                {sidebarLinks.map(item => {
                  return (
                    <Link href={item.href}>
                      <a>
                        <img src={item.src} alt={item.name.toLowerCase()} />
                        {item.name}
                      </a>
                    </Link>
                  )
                })}
              </nav>
            </ProfileSidebarMenu>
          </div>
        </ProfileSideBarContainer>
      )}
    </MenuWrapper>
  )
}
