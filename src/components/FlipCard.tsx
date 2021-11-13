/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { FaTimesCircle, FaRegTimesCircle } from 'react-icons/fa';
import { IFlipCard } from '../Types/FlipCard';

export const FlipCard = ({ isFlipped, setIsFlipped, data }: IFlipCard) => {
  const [index, setIndex] = useState<number>(0);
  const [isFavor, setIsFavor] = useState<boolean>(false);
  const [isKnow, setIsKnow] = useState<boolean>(false);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipSpeedBackToFront={0.3}
        flipSpeedFrontToBack={0.3}
        flipDirection="vertical"
      >
        <div
          onClick={handleClick}
          className="flipCard"
        >
          <span>{data[index].tr}</span>
        </div>

        <div onClick={handleClick} className="flipCard">
          <span>{data[index].en}</span>
        </div>
      </ReactCardFlip>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <button
          onClick={() => {
            if (index > 0) {
              setIndex((prev:number) => prev - 1);
            }
          }}
          className="btn-back"
          type="button"
        >
          Back

        </button>
        <div style={{}}>
          {isFavor
            ? (
              <MdOutlineFavorite
                className="svg-class"
                style={{ cursor: 'pointer', border: 'none', borderRadius: 5 }}
                onClick={() => setIsFavor(!isFavor)}
                size={27}
                color="#d44833"
              />
            )
            : (
              <MdOutlineFavoriteBorder
                className="svg-class"
                style={{ cursor: 'pointer', border: 'none', borderRadius: 5 }}
                onClick={() => setIsFavor(!isFavor)}
                size={27}
                color="#d44833"
              />
            )}
        </div>
        <div style={{}}>
          {isKnow
            ? (
              <AiFillCheckCircle
                className="svg-green"
                style={{ cursor: 'pointer', border: 'none', borderRadius: 5 }}
                onClick={() => setIsKnow(!isKnow)}
                size={27}
                color="#74e391"
              />
            )
            : (
              <AiOutlineCheckCircle
                className="svg-green"
                style={{ cursor: 'pointer', border: 'none', borderRadius: 5 }}
                onClick={() => setIsKnow(!isKnow)}
                size={27}
                color="#74e391"
              />
            )}
        </div>
        <div style={{}}>
          {!isKnow
            ? (
              <FaTimesCircle
                className="svg-warning"
                style={{ cursor: 'pointer', border: 'none', borderRadius: 5 }}
                onClick={() => setIsKnow(!isKnow)}
                size={27}
                color="#f29e29"
              />
            )
            : (
              <FaRegTimesCircle
                className="svg-warning"
                style={{ cursor: 'pointer', border: 'none', borderRadius: 5 }}
                onClick={() => setIsKnow(!isKnow)}
                size={27}
                color="#f29e29"
              />
            )}
        </div>
        <button
          onClick={() => {
            if (index < data.length - 1) {
              setIndex((prev:number) => prev + 1);
            }
          }}
          className="btn-next"
          type="button"
        >
          Next

        </button>
      </div>
    </div>
  );
};
