import styled, { css } from 'styled-components'

const Wrapper = styled.main`
  --backgroundPrimary: #d9e6f6;
  --backgroundSecondary: #f1f9fe;
  --backgroundTertiary: #ffffff;
  --backgroundQuarternary: #bbcde8;
  --colorPrimary: #2e7bb4;
  --colorSecondary: #388bb0;
  --colorTertiary: #2f4a71;
  --colorQuarternary: #d81d99;
  --textPrimaryColor: #333333;
  --textSecondaryColor: #ffffff;
  --textTertiaryColor: #5a5a5a;
  --textQuarternaryColor: #c5c6ca;
  --commonRadius: 8px;

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .logoArea {
  }
`

const LoginContainer = styled.div`
  --gutter: 16px;
  --gap: 12px;

  padding: 16px;
  margin: auto;
  max-width: 1110px;

  display: grid;
  grid-gap: 12px;
  grid-template-areas:
    'logoArea'
    'formArea'
    'footerArea';
  @media (min-width: 860px) {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      'logoArea formArea'
      'logoArea formArea'
      'footerArea footerArea';
  }
`

const LogoArea = styled.section`
  grid-area: logoArea;
  background-color: var(--backgroundTertiary);
  border-radius: var(--commonRadius);
  padding: var(--gutter);
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 263px;
  @media (min-width: 860px) {
    min-height: 368px;
  }
  p {
    font-size: 12px;
    line-height: 1.2;
    &:not(:last-child) {
      margin-bottom: 12px;
    }
    strong {
      color: var(--colorQuarternary);
    }
  }
  img {
    max-height: 45px;
    margin-bottom: 36px;
  }
`

const LoginFormSection = styled.section`
  grid-area: formArea;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  .box {
  }
`

const formSectionBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--gutter);
  padding-left: 50px;
  padding-right: 50px;
  background-color: var(--backgroundSecondary);
  border-radius: var(--commonRadius);
  flex: 1;
  &:not(:last-child) {
    margin-bottom: var(--gap);
  }
  &:first-child {
    min-height: 224px;
    @media (min-width: 860px) {
      min-height: 282px;
    }
  }
  p {
    font-size: 14px;
  }
  a {
    text-decoration: none;
    color: var(--colorPrimary);
  }
`

const LoginForm = styled.form`
  ${formSectionBox}

  input {
    width: 100%;
    display: block;
    border: 1px solid var(--textQuarternaryColor);
    padding: 12px;
    background-color: var(--backgroundTertiary);
    border-radius: var(--commonRadius);
    margin-top: 24px;
    margin-bottom: 16px;
  }
  button {
    width: 100%;
    display: block;
    border: 0;
    padding: 12px;
    border-radius: var(--commonRadius);
    background-color: var(--colorPrimary);
    color: var(--textSecondaryColor);
  }
`

const FormSectionFooter = styled.footer`
  ${formSectionBox}
`

const Footer = styled.footer`
  grid-area: footerArea;
  background-color: var(--backgroundQuarternary);
  border-radius: var(--commonRadius);
  padding: 8px;
  p {
    font-size: 12px;
    text-align: center;
    a {
      text-decoration: none;
      color: var(--colorPrimary);
    }
  }
`

export {
  Wrapper,
  LoginContainer,
  LogoArea,
  LoginFormSection,
  LoginForm,
  FormSectionFooter,
  Footer
}
