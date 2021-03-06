import { Link } from '../Link'
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
        <Link href={`/user/${githubUser}`}>@{githubUser}</Link>
      </p>
      <hr />

      <ProfileSidebarMenu>
        <nav>
          {sidebarLinks.map(item => {
            return (
              <Link href={item.href} key={item.name}>
                <img src={`/${item.src}.svg`} alt={item.name.toLowerCase()} />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </ProfileSidebarMenu>
    </>
  )
}
