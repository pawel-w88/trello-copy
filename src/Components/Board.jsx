// Your code
import CardList from "./CardList";
function Board({ cards }) {
    return (
      <div className="board">
        {cards.map((card) => (
          <CardList key={card.id} title={card.title} cards={card.children} />
        ))}
      </div>
    );
  }

export default Board;
