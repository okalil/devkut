import { Menu } from '../components/Menu'
import { Welcome } from '../components/Welcome'
import { Friends } from '../components/Friends'

import { Box } from '../components/Box'
import { MainGrid } from '../components/MainGrid'
import { useMediaQuery } from '../hooks/useMediaQuery'

function Profile({ githubUser }) {
  return (
    <Box style={{ gridRowEnd: 'span 3' }}>
      <img
        src={`https://github.com/${githubUser}.png`}
        style={{ borderRadius: '8px' }}
      />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'okalil'

  return (
    <>
      <Menu />
      <MainGrid>
        {useMediaQuery('(min-width: 860px)') && (
          <Profile githubUser={githubUser} />
        )}
        <Welcome />
        <Friends />

        <Box>O que você quer fazer?</Box>
        <Box style={{ gridArea: '3/3/span 2/3' }}>Comunidade</Box>
      </MainGrid>
    </>
  )
}
