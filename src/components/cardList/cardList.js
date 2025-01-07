import "./cardList.css";

function CardList({ children }) {
  return (
    <div className="card-list">
      <div className="wrapper">{children}</div>
    </div>
  );
}

export default CardList;
