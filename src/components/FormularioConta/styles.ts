import styled from 'styled-components'

export const Form = styled.form`
  margin-top: 24px;
  width: 100%;
  position: relative;

  label {
    display: block;
    margin-bottom: 8px;
    opacity: 0.7;
    font-size: 14px;
  }

  input,
  select {
    display: block;
    width: 100%;
    margin-bottom: 16px;
    padding: 0 8px;
    height: 30px;
    border-radius: 6px;
    border: 1px solid #ccc;

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &.error {
      border: 1px solid red;
    }
  }

  button {
    margin-top: 24px;
    width: 200px;
    font-size: 12px;
  }
`

export const TitleForm = styled.h4`
  font-size: 24px;
  opacity: 0.8;
`

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
`
