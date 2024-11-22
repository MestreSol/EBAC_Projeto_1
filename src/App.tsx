import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Game } from './models/Game';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducer/store';
import { loadGames } from './stores/Game';
import GlobalStyle from './style';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.game.games)

  useEffect(()=> {
    fetch('http://localhost:3000/games')
    .then((res) => res.json())
    .then((res) => dispatch(loadGames(res)))
  }, [dispatch])
  return(
    <>
      <GlobalStyle />
    </>
  );
}
export default App;
