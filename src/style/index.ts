import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const lightTheme = {
  body: '#f5f5f5',
  text: '#fff',
  toggleBorder: '#FFF',
  background: '#363537',
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    padding-bottom: 80px;
  }
}
`
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`

export { Container };
export default GlobalStyle;
