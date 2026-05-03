function Card({ img, title }) {
    return (
        <div className="comic-card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
        </div>
    );
}

export default Card;