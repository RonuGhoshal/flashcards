const CardContent = ({imageUrl, word}) => {
    return (
        <div className="card-content">
            <div className="card-image">
                <img src={imageUrl} alt={word} />
            </div>
            <div className="card-word">{word}</div>
        </div>
    );
};

export default CardContent;
