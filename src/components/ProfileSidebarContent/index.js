import Link from 'next/link'
import { ProfileSidebarMenu } from './styles'

export function ProfileSidebarContent({ githubUser }) {
  const sidebarLinks = [
    { name: 'Perfil', href: '/', src: 'user' },
    { name: 'Recados', href: '/', src: 'book' },
    { name: 'Fotos', href: '/', src: 'camera' },
    { name: 'Depoimentos', href: '/', src: 'sun' }
  ]

  return (
    <>
      <img
        src={`https://github.com/${githubUser}.png`}
        al="user profile"
        style={{ borderRadius: '8px' }}
      />
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
              <Link href={item.href} key={item.name}>
                <a>
                  <img src={`/${item.src}.svg`} alt={item.name.toLowerCase()} />
                  {item.name}
                </a>
              </Link>
            )
          })}
        </nav>
      </ProfileSidebarMenu>
    </>
  )
}
