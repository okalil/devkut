import styled from 'styled-components'

const MenuWrapper = styled.header`
  width: 100%;
  background: #308bc5;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 101;

  background: #308bc5;
  max-width: 1110px;
  margin: auto;
  padding: 7px 16px;

  @media (min-width: 860px) {
    justify-content: flex-start;
  }

  button {
    border: 0;
    background: transparent;
    align-self: center;
    display: inline-block;

    img {
      width: 25px;
      height: 25px;
    }
  }

  input {
    color: #ffffff;
    background: #5579a1;
    padding: 10px 42px;
    border: 0;
    background-image: url('/search.svg');
    background-position: 15px center;
    background-repeat: no-repeat;
    border-radius: 1000px;
    font-size: 12px;
    ::placeholder {
      color: #ffffff;
      opacity: 1;
    }
  }
`

const Logo = styled.img`
  background: #ffffff;
  padding: 9px 17px;
  border-radius: 1000px;
  height: 34px;
`

const Nav = styled.nav`
  display: flex;

  &:first-child {
    flex: 1;
  }

  a {
    font-size: 12px;
    color: white;
    padding: 10px 16px;
    position: relative;
    text-decoration: none;

    &:after {
      content: ' ';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;

      width: 1px;
      height: 12px;
      background: #5292c1;
      margin: auto;
    }
  }
`

const ProfileSidebarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 48px;
  z-index: 100;

  background: red;
  transition: 0.3s;

  > div {
    max-width: 400px;
    margin: auto;
  }

  a {
    font-size: 18px;
    color: #2e7bb4;
    text-decoration: none;
    font-weight: 800;
  }

  hr {
    margin: 12px 0 8px;
    border-color: transparent;
    border-bottom-color: #ecf2fa;
  }

`

export {
  MenuWrapper,
  Container,
  Logo,
  Nav,
  ProfileSidebarContainer
}
