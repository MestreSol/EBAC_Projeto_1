import SearchInput from "../../components/Inputs/Search";
import { Container } from "../../style";
import S, { BrandArea, Logo } from "./style";
const Header = () => {
  return (
    <S>
      <Container>
      <BrandArea>
        <Logo src="https://via.placeholder.com/150" alt="logo"></Logo>
        <h1>Game Store</h1>
      </BrandArea>
      <SearchInput/>
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/games">Games</a>
          </li>
          <li>
            <a href="/lancamentos">Lançamentos</a>
          </li>
          <li>
            <a href="/reviews">Reviews</a>
          </li>
          <li>
            <a href="contribute">Contribua</a>
          </li>
        </ul>
      </div>
      </Container>
    </S>
  );
}

export default Header;
