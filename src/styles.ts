import styled, { createGlobalStyle } from 'styled-components'

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: #e2e2e2;
  }

  .container {
  width: 100%;
  margin: 0 auto;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-gap: 16px;
  height: 100vh;
  padding: 16px;
`
