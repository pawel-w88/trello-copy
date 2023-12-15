import Card from "./Card";

function CardList({ title, cards }) {
  return (
    <div className="card-list">
      <h2>{title}</h2>
      {cards.map((card) => (
        <Card key={card.id} text={card.text} />
      ))}
    </div>
  );
}

export default CardList;