import Link from 'next/link'
import { RelationsContainer, UserLink } from './styles'

export function Relations({ title, relations }) {
  return (
    <RelationsContainer>
      <h3>
        {title} ({relations.length})
      </h3>
      <ul>
        {relations.slice(0, 6).map(({ id, title, imageUrl }) => {
          return (
            <li key={id}>
              <Link href="/">
                <UserLink>
                  <img src={imageUrl} alt="user img" />
                  <span>{title}</span>
                </UserLink>
              </Link>
            </li>
          )
        })}
      </ul>
    </RelationsContainer>
  )
}
