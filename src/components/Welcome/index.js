import { Box } from '../Box'
import { IconSetList, IconSetItem, IconTitle, IconNumber } from './styles'

export function Welcome(props) {
  const icons = [
    { name: 'Recados', icon: 'book' },
    { name: 'Fotos', icon: 'camera' },
    { name: 'Vídeos', icon: 'video-camera' },
    { name: 'Fãs', icon: 'star' },
    { name: 'Mensagens', icon: 'email' }
  ]

  const icons2 = [
    { name: 'Confiável', icon: 'smile' },
    { name: 'Legal', icon: 'cool' },
    { name: 'Sexy', icon: 'heart' }
  ]

  const total = 2

  return (
    <Box>
      <h1>Bem vindo(a)</h1>
      <IconSetList>
        {icons.map(({ name, icon }) => {
          return (
            <IconSetItem key={name.toLowerCase()}>
              <IconTitle>{name}</IconTitle>
              <IconNumber>
                <img src={`/${icon}.svg`} alt={name.toLowerCase()} />0
              </IconNumber>
            </IconSetItem>
          )
        })}
        {icons2.map(({ name, icon }, i) => {
          return (
            <IconSetItem key={`${name}-${i}`}>
              <IconTitle>{name}</IconTitle>
              <IconNumber>
                {[0, 1, 2].map((_, i) => {
                  const isActive = i <= total - 1
                  return (
                    <img
                      src={`/${icon}.svg`}
                      alt={'icon'}
                      key={name+i}
                      style={{ opacity: isActive ? 1 : 0.5 }}
                    />
                  )
                })}
              </IconNumber>
            </IconSetItem>
          )
        })}
      </IconSetList>
    </Box>
  )
}
