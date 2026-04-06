import styled from 'styled-components'
import { Trash2 } from 'lucide-react'

export const TitleContainer = styled.div`
  display: flex;

  h3 {
    margin-bottom: 24px;
    margin-right: 16px;
  }

  span {
    width: 24px;
    height: 24px;
    background-color: #208a16;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`

export const ListContainer = styled.div`
  width: 100%;
  height: 50vh;
  border: 1px solid #ccc;

  header {
    background-color: #ccc;
    padding: 8px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    font-weight: bold;
  }

  span {
    padding: 8px;
    font-size: 14px;
  }
`

export const Infos = styled.div`
  padding: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  border-bottom: 1px solid #ccc;
  position: relative;
`

export const DeleteIcon = styled(Trash2)`
  cursor: pointer;
  color: #ff4d4d;
  width: 16px;
  transition: 0.2s;
  position: absolute;
  bottom: 12px;
  right: 16px;

  &:hover {
    transform: scale(1.1);
  }
`
