import { useState, useEffect } from "react";
import Container from "./components/container";
import CardAdd from "./components/cardAdd/cardAdd";
import CardList from "./components/cardList/cardList";
import ItemBox from "./components/itemBox";
import Row from "./components/row";
import Col from "./components/col";
function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const initialList = JSON.parse(localStorage.getItem("items"));
    if (!initialList) {
      setItemList([]);
    } else {
      setItemList(initialList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(itemList));
  }, [itemList]);

  function handleAddItem(e) {
    e.preventDefault();
    if (!item) return;
    setItemList([...itemList, item]);
    setItem("");
  }

  function handleRemoveItem(itemEl) {
    const filteredList = itemList.filter((el) => el !== itemEl);
    setItemList([...filteredList]);
  }

  return (
    <Container>
      <h1 className="mbot-90">
        ToDo<span>List</span>
      </h1>
      <Row rowClasses="row row-gap d-flex justify-content-center">
        <Col colClasses="col-md-10 col-lg-6 d-flex justify-content-center col-border">
          <CardAdd
            item={item}
            setItem={setItem}
            handleAddItem={handleAddItem}
          />
        </Col>
        <Col colClasses="col-md-10 col-lg-6 d-flex justify-content-center">
          <CardList>
            {itemList.length === 0 && <p>Nothing to do.</p>}
            {itemList.map((item) => {
              return (
                <ItemBox item={item} handleRemoveItem={handleRemoveItem} />
              );
            })}
          </CardList>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
