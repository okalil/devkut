import { useMediaQuery } from '../hooks/useMediaQuery'

import { Menu } from '../components/Menu'
import { Welcome } from '../components/Welcome'
import { Relations } from '../components/Relations'
import { Actions } from '../components/Actions'
import { ProfileSidebarContent } from '../components/ProfileSidebarContent'

import { Box } from '../components/Box'
import { MainGrid } from '../components/MainGrid'

export default function Home() {
  const githubUser = 'okalil'

  const friends = {
    title: 'Amigos',
    relations: ['TheJamylle', 'okalil', 'omariosouto', 'diego3g']
  }
  const communities = {
    title: 'Comunidades',
    relations: ['TheJamylle', 'okalil', 'omariosouto', 'drielisonlopes']
  }

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
        <Actions />
        <div>
          <Relations {...friends} />
          <Relations {...communities} />
        </div>
      </MainGrid>
    </>
  )
}
