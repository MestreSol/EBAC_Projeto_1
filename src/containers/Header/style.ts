import styled from 'styled-components';
const BrandArea = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    margin-left: 10px;
  }
`
const Logo = styled.img`
  width: 50px;
  height: 50px;
`
const header = styled.header`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 10px 0;
  margin-top:-20px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    input {
      padding: 5px;
    }
    button {
      padding: 5px 10px;
      background-color: #333;
      color: #fff;
      border: none;
      cursor: pointer;
    }
    ul {
      display: flex;
      list-style: none;
      li {
        margin-right: 10px;
        a {
          text-decoration: none;
          color: ${(props) => props.theme.text};
        }
      }
      li .active {
        color: #333;
      }
    }
  }
`
export default header;
export { BrandArea, Logo };
