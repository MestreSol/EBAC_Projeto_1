import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardImage = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardBody = styled.div`
  h2 {
    font-size: 1.5rem;
    margin: 0;
    color: #333;
  }
  p {
    font-size: 1rem;
    color: #666;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { Card, CardImage, CardBody, CardFooter };
