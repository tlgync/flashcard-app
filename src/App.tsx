import React, { useState } from 'react';
import './App.css';
import { FlipCard } from './components/FlipCard';

const DATA = [
  {
    id: 0,
    tr: 'bir',
    en: 'a',
  },
  {
    id: 1,
    tr: 'gitmek',
    en: 'go',
  },
  {
    id: 2,
    tr: 'gelmek',
    en: 'come',
  },
];

export const App = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  return (
    <div className="App">
      <FlipCard isFlipped={isFlipped} setIsFlipped={setIsFlipped} data={DATA} />
    </div>
  );
};

export default App;
