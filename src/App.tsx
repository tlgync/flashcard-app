import React from 'react';
import './App.css';
import { FlipCard } from './components/FlipCard';
import { Progressbar } from './components/Progressbar';
import { DATA } from './data';

export const App = () => (
  <div className="App">
    <Progressbar data={DATA} />
    <FlipCard data={DATA} />
  </div>
);

export default App;
