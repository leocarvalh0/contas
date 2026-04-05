import { styled } from 'styled-components'
import { CircleX } from 'lucide-react'

export const Container = styled.aside`
  background-color: #fff;
  padding: 24px 48px;
  box-shadow: 5px 5px 10px #bbbbbb;

  main {
    display: flex;
    padding-top: 40px;
  }
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
  font-size: 16px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    border-radius: 50%;
    margin-right: 8px;
  }

  span {
    font-size: 14px;
    font-weight: bold;
  }
`

export const CardList = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 80px;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000052;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.is-visible {
    display: flex;
  }
`

export const ModalContent = styled.div`
  background-color: #fff;
  width: 500px;
  padding: 24px;
  border-radius: 10px;

  header {
    border-bottom: 1px solid #ccc;
    padding-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  h4 {
    font-size: 20px;
  }
`

export const CloseIcon = styled(CircleX)`
  cursor: pointer;
  color: #999;
  transition: 0.2s;

  &:hover {
    color: #ff4d4d;
    transform: scale(1.1);
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ebebebd7;
  padding: 4px;
  border-radius: 6px;
`
