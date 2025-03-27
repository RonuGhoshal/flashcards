import { useState } from 'react';
import './Card.css';

const Card = ({word = "CAT"}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="card-front">{word}</div>
            <div className="card-back">Back</div>
        </div>
    );
};

export default Card;
