import { useMediaQuery } from '../hooks/useMediaQuery'

import { Menu } from '../components/Menu'
import { Welcome } from '../components/Welcome'
import { Relations } from '../components/Relations'
import { Actions } from '../components/Actions'
import { ProfileSidebarContent } from '../components/ProfileSidebarContent'

import { Box } from '../components/Box'
import { MainGrid } from '../components/MainGrid'
import { useState } from 'react'
import axios from 'axios'

export default function Home({ followers }) {
  const githubUser = 'okalil'

  const [communities, setCommunities] = useState([
    {
      id: 1232453647,
      title: 'Chess Club',
      image:
        'https://media.digistormhosting.com.au/svc-au-tas-512-website/content/Chess-Club-Logo.jpg?mtime=20210205030705'
    }
  ])

  const githubURL = user => `https://github.com/${user}.png`
  const friends = [
    { id: 21, title: 'Jamylle', image: githubURL('TheJamylle') },
    { id: 22, title: 'Kalil', image: githubURL('okalil') },
    { id: 23, title: 'Mário Souto', image: githubURL('omariosouto') },
    { id: 24, title: 'Diego', image: githubURL('diego3g') }
  ]

  const largeScreen = useMediaQuery('(min-width: 860px)')

  return (
    <>
      <Menu>
        <ProfileSidebarContent githubUser={githubUser} />
      </Menu>
      <MainGrid>
        {largeScreen && (
          <Box style={{ gridRow: '1/span 3' }}>
            <ProfileSidebarContent githubUser={githubUser} />
          </Box>
        )}
        <Welcome />
        <Actions {...{ communities, setCommunities }} />
        <div>
          <Relations title="Seguidores" relations={followers} />
          <Relations {...{ title: 'Amigos', relations: friends }} />
          <Relations {...{ title: 'Comunidades', relations: communities }} />
        </div>
      </MainGrid>
    </>
  )
}

export const getStaticProps = async () => {
  const { data } = await axios.get(
    'https://api.github.com/users/okalil/followers'
  )
  const followers = data.map(user => {
    return {
      id: user.id,
      title: user.login,
      image: user.avatar_url
    }
  })

  return {
    props: { followers }
  }
}
