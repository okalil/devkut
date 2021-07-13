import { FriendsContainer, UserLink } from './styles'

export function Friends() {
  const friends = ['TheJamylle', 'okalil', 'omariosouto', 'diego3g']

  return (
    <FriendsContainer style={{ gridArea: 'span 2' }}>
      <h2>Amigos ({friends.length})</h2>
      <ul>
        {friends.map((user, i) => {
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
    </FriendsContainer>
  )
}
