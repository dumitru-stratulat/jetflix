import React from 'react';
import './App.css';
import 'react-multi-carousel/lib/styles.css';
import { NowPlayingMovies } from './components/NowPlayingMovies'
import { UpComingMovies } from './components/UpComingMovies'

const App: React.FC = () => {
  return (
    <div className="App">
      <h2 className="listTitle">Now Playing</h2>
      <NowPlayingMovies />
      <h2 className="listTitle">Upcoming</h2>
      <UpComingMovies />
    </div>
  );
}

export default App;
