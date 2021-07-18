import { useRouter } from 'next/router'
import { useState } from 'react'

import nookies from 'nookies'

import { Link } from '../../components/Link'

import {
  Wrapper,
  LoginContainer,
  LogoArea,
  LoginFormSection,
  LoginForm,
  FormSectionFooter,
  Footer
} from './styles'

export default function Login() {
  const router = useRouter()
  const [githubUser, setGithubUser] = useState('')

  const handle = async event => {
    event.preventDefault()
    console.log(githubUser)

    const fetching = await fetch('https://alurakut.vercel.app/api/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ githubUser: githubUser })
    })
    const response = await fetching.json()
    const token = response.token

    nookies.set(null, 'USER_TOKEN', token, {
      path: '/',
      maxAge: 86400
    })
    router.push('/')
  }

  return (
    <Wrapper>
      <LoginContainer>
        <LogoArea>
          <img src="https://alurakut.vercel.app/logo.svg" />

          <p>
            <strong>Conecte-se</strong> aos seus amigos e familiares usando
            recados e mensagens instantâneas
          </p>
          <p>
            <strong>Conheça</strong> novas pessoas através de amigos de seus
            amigos e comunidades
          </p>
          <p>
            <strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só
            lugar
          </p>
        </LogoArea>

        <LoginFormSection className="formArea">
          <LoginForm onSubmit={handle}>
            <p>
              Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
            </p>
            <input
              placeholder="Usuário"
              onChange={event => {
                setGithubUser(event.target.value)
              }}
              value={githubUser}
            />
            {githubUser.length === 0 ? 'Preencha o campo' : ''}
            <button type="submit">Login</button>
          </LoginForm>

          <FormSectionFooter>
            <p>
              Ainda não é membro? <br />
              <Link href="/login">
                <strong>ENTRAR JÁ</strong>
              </Link>
            </p>
          </FormSectionFooter>
        </LoginFormSection>

        <Footer className="footerArea">
          <p>
            © 2021 alura.com.br - <Link href="/">Sobre o Orkut.br</Link> -{' '}
            <Link href="/">Centro de segurança</Link> -{' '}
            <Link href="/">Privacidade</Link> - <Link href="/">Termos</Link> -{' '}
            <Link href="/">Contato</Link>
          </p>
        </Footer>
      </LoginContainer>
    </Wrapper>
  )
}
