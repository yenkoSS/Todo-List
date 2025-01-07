import "./cardAdd.css";

function CardAdd({ item, setItem, handleAddItem }) {
  return (
    <div className="card-add">
      <h2 className="mbot-30">Add item</h2>
      <form onSubmit={(e) => handleAddItem(e)}>
        <div className="form-label">
          <input
            placeholder="Item name"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn-add">
          Add
        </button>
      </form>
    </div>
  );
}

export default CardAdd;
