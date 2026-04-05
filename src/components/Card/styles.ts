import styled from 'styled-components'

type CardColor = {
  color: string
}

export const CardContainer = styled.div<CardColor>`
  width: 244px;
  height: 145px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    font-size: 16px;
    margin-bottom: 16px;
  }

  span {
    font-size: 30px;
    font-weight: bold;
  }
`
