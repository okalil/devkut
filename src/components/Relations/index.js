import { RelationsContainer, UserLink } from './styles'

export function Relations({ title, relations }) {
  return (
    <RelationsContainer>
      <h3>
        {title} ({relations.length})
      </h3>
      <ul>
        {relations.map(({id, title, imageUrl}) => {
          return (
            <li key={id}>
              <UserLink href="/">
                <img src={imageUrl} alt="user img" />
                <span>{title}</span>
              </UserLink>
            </li>
          )
        })}
      </ul>
    </RelationsContainer>
  )
}
