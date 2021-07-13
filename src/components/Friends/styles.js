import styled from 'styled-components'
import { Box } from '../Box'

const FriendsContainer = styled(Box)`
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;

    max-height: 220px;
    list-style: none;
  }

  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }
`

const UserLink = styled.a`
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 102px;

  border-radius: 8px;

  span {
    position: absolute;
    left: 0;
    bottom: 10px;
    z-index: 2;

    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;

    color: #ffffff;
    font-size: 10px;
    padding: 0 4px;

    /* display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical; */
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    background-image: linear-gradient(0deg, #00000073, transparent);
  }
`

export { FriendsContainer, UserLink }
