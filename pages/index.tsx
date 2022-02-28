import { styled } from '@mui/material';
import type { NextPage } from 'next';
import { useState } from 'react';
import { Players } from '../components/Players';
import { Points } from '../components/Points';

const Home: NextPage = () => {
  const [players, setPlayers] = useState<string[]>([]);

  const handleAddPlayers = (data: any) => {
    const newPlayers = Object.values(data).filter((val) => !!val) as string[];

    setPlayers(newPlayers);
  };

  return (
    <div>
      {players.length <= 0 && <Players onSubmit={handleAddPlayers} />}
      {!!players.length && <Points players={players} />}
    </div>
  );
};

export default Home;
