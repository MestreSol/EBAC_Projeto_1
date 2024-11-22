import React, { useEffect } from 'react';
import { Game } from './models/Game';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducer/store';
import { loadGames } from './stores/Game';
import GlobalStyle, { Container, darkTheme, lightTheme, GameList } from './style';
import { ThemeProvider } from 'styled-components';
import Header from './containers/Header';
import GameComponent from './components/game';

const App: React.FC = () => {
  const [theme, setTheme] = React.useState(lightTheme);
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.game.games)

  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }
  useEffect(()=> {
    fetch('http://localhost:3000/games')
    .then((res) => res.json())
    .then((res) => dispatch(loadGames(res)))
  }, [dispatch])

  return(
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header></Header>
      <Container>
        <GameList>
        {games.map((game: Game) => (
          <GameComponent key={game.id} {...game} />
        ))}
        </GameList>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </Container>
    </ThemeProvider>
    </>
  );
}
export default App
