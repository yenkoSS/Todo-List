import icon from "../icons/remove.svg";

function ItemBox({ item, handleRemoveItem }) {
  return (
    <div className="box-item">
      <img
        src={icon}
        className="btn-delete"
        onClick={() => handleRemoveItem(item)}
      ></img>
      <p className="text-item">{item}</p>
    </div>
  );
}

export default ItemBox;
