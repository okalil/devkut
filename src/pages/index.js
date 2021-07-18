import axios from 'axios'
import nookies from 'nookies'
import jwt from 'jsonwebtoken'
import { useState } from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'

import { Menu } from '../components/Menu'
import { Welcome } from '../components/Welcome'
import { Relations } from '../components/Relations'
import { Actions } from '../components/Actions'
import { ProfileSidebarContent } from '../components/ProfileSidebarContent'

import { Box } from '../components/Box'
import { MainGrid } from '../components/MainGrid'

export default function Home({ githubUser, followers, allCommunities }) {
  const [communities, setCommunities] = useState(allCommunities)

  const githubURL = user => `https://github.com/${user}.png`
  const friends = [
    { id: 21, title: 'Jamylle', imageUrl: githubURL('TheJamylle') },
    { id: 22, title: 'Kalil', imageUrl: githubURL('okalil') },
    { id: 23, title: 'Mário Souto', imageUrl: githubURL('omariosouto') },
    { id: 24, title: 'Diego', imageUrl: githubURL('diego3g') }
  ]

  const largeScreen = useMediaQuery('(min-width: 860px)')

  return (
    <>
      <Menu>
        <ProfileSidebarContent githubUser={githubUser} />
      </Menu>
      <MainGrid>
        {largeScreen && (
          <Box as="aside" style={{ gridRow: '1/span 3' }}>
            <ProfileSidebarContent githubUser={githubUser} />
          </Box>
        )}
        <Welcome />
        <Actions {...{ communities, setCommunities }} />
        <div>
          <Relations {...{ title: 'Comunidades', relations: communities }} />
          <Relations title="Seguidores" relations={followers} />
          <Relations {...{ title: 'Amigos', relations: friends }} />
        </div>
      </MainGrid>
    </>
  )
}

export const getServerSideProps = async ctx => {
  const token = nookies.get(ctx).USER_TOKEN

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  const { githubUser } = jwt.decode(token)

  const githubFollowers = await axios.get(
    `https://api.github.com/users/${githubUser}/followers`
  )
  const followers = githubFollowers.data.map(user => {
    return {
      id: user.id,
      title: user.login,
      imageUrl: user.avatar_url
    }
  })

  const response = await axios.post(
    'https://graphql.datocms.com/',
    {
      query: `
        {allCommunities {
          id
          title
          imageUrl
        }}
      `
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.DATO_FULL_API_KEY}`
      }
    }
  )

  const allCommunities = response.data.data.allCommunities

  return {
    props: { githubUser, followers, allCommunities }
  }
}
