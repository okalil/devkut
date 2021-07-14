import { useState } from 'react'
import { Box } from '../Box'

export function Actions() {
  const [communities, setCommunities] = useState([])

  const handleCreateCommunity = event => {
    event.preventDefault()

    const formData = new FormData(event.target)
    setCommunities([...communities, 'Alurakut'])
  }

  return (
    <Box style={{ gridArea: '2' }}>
      <h2>O que você deseja fazer?</h2>
      <form onSubmit={handleCreateCommunity}>
        <div>
          <input
            placeholder="Qual vai ser o nome da sua comunidade?"
            name="title"
            aria-label="Qual vai ser o nome da sua comunidade?"
          />
        </div>
        <div>
          <input
            placeholder="Coloque uma URL para usarmos de capa"
            name="image"
            aria-label="Coloque uma URL para usarmos de capa"
          />
        </div>

        <button>Criar comunidade</button>
      </form>
    </Box>
  )
}
