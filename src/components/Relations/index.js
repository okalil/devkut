import { RelationsContainer, UserLink } from './styles'

export function Relations({ title, relations }) {
  return (
    <RelationsContainer>
      <h3>
        {title} ({relations.length})
      </h3>
      <ul>
        {relations.map((user, i) => {
          return (
            <li key={i}>
              <UserLink href="/">
                <img src={`https://github.com/${user}.png`} alt="user img" />
                <sapn>{user}</sapn>
              </UserLink>
            </li>
          )
        })}
      </ul>
    </RelationsContainer>
  )
}
