import styled from 'styled-components'

const IconSetList = styled.ul`
  margin-top: 32px;
  list-style: none;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
`

const IconSetItem = styled.li`
  font-size: 12px;
  color: #5a5a5a;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`

const IconTitle = styled.span`
  display: block;
  font-style: italic;
`

const IconNumber = styled.span`
  min-width: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 7px;
  }
`

export { IconSetList, IconSetItem, IconTitle, IconNumber }
