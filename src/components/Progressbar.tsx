import { ProgressBar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { flipCardSelector } from '../slices/FlipCardSlice';

export const Progressbar = ({ data }: any) => {
  const { index } = useSelector(flipCardSelector);
  const newNow = ((index + 1) * 100) / data.length;
  return (
    <div className="progressbar-container">
      <ProgressBar striped variant="warning" now={newNow} style={{ width: 300, height: 9 }} />
      <span>{`${index + 1} / ${data.length}`}</span>
    </div>
  );
};
