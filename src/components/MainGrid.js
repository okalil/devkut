import styled from 'styled-components'

const MainGrid = styled.div`
  width: min(100%, 500px);
  margin: 0 auto;
  padding: 16px;

  display: grid;
  grid-gap: 10px;

  @media (min-width: 860px) {
    /* height: 686px; */
    width: min(100%, 1100px);
    grid-template-columns: 160px 1fr 312px;
    grid-template-rows: 178px min-content 96px;
  }
`

export { MainGrid }
