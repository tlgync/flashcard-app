import { FC } from 'react';
import { FlipCard } from '../../components/FlipCard';
import { NavbarComponent } from '../../components/Navbar';
import { Progressbar } from '../../components/Progressbar';
import { DATA } from '../../data';

export const Dashboard: FC = () => (
  <>
    <NavbarComponent />
    <Progressbar data={DATA} />
    <FlipCard data={DATA} />
  </>
);
