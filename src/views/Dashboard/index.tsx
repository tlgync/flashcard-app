import { FC, useEffect } from 'react';
import { FlipCard } from '../../components/FlipCard';
import { NavbarComponent } from '../../components/Navbar';
import { Progressbar } from '../../components/Progressbar';
import { DATA } from '../../data';
import { fetchAuth } from '../../slices/AuthSlice';
import { useAppDispatch } from '../../store';

export const Dashboard: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAuth());
  }, [dispatch]);

  return (
    <>
      <NavbarComponent />
      <Progressbar data={DATA} />
      <FlipCard data={DATA} />
    </>
  );
};
