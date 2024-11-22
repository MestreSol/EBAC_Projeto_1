import styled from "styled-components";


const Input = styled.input`
  padding: 5px;
  background-color: ${(props) => props.theme.background};
  border: none;
  border-bottom: 1px solid #333;
  color: ${(props) => props.theme.text}
  width: 300px;
  `;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  border: none;
  `;

  export { Input, Button };
