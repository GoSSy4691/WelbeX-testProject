import { useEffect, useState } from "react";

import API from "./API.js";

import checkmark from "./img/checkmark.svg";
import bucket from "./img/bucket.svg";
import arrow from "./img/arrow.svg";
import "./App.css";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(0);
  const visibleTable = data.slice((page - 1) * 10).slice(0, 10);

  const [newDate, setNewDate] = useState("");
  const [newName, setNewName] = useState("");
  const [newQuantity, setNewQuantity] = useState(0);
  const [newDistance, setNewDistance] = useState(0);

  useEffect(() => {
    !data.length && fetchData();
    isLoading && setLoading(false);
  }, []);

  const fetchData = async () => {
    const { data: items } = await API.getItems();
    setData(items);
    setSelectedItem(0);
  };

  const deleteItem = async (id) => {
    const res = await API.deleteItem(id);
    fetchData();
  };

  const changeField = (fieldId, el = { date: "", name: "", quantity: "", distance: "" }) => {
    setSelectedItem(fieldId);
    setNewDate(el.date.substring(0, 10));
    setNewName(el.name);
    setNewQuantity(el.quantity);
    setNewDistance(el.distance);
  };

  const applyField = (date, name, quantity, distance) => {
    if (date.length !== 10 || new Date(date).getTime() !== new Date(date).getTime()) {
      alert("date is not look like date \nuse date like: 2022-12-30");
    } else if (!name.toString().length || name.length > 20) {
      alert("name length is too long or short");
    } else if (!quantity.toString().length || !Number.isInteger(Number(quantity))) {
      alert("quantity is incorrect");
    } else if (!distance.toString().length || !Number.isInteger(Number(distance))) {
      alert("distance is incorrect");
    } else {
      API.createItem(date, name, quantity, distance);
      setData([...data, { date, name, quantity, distance }]);
    }
  };

  const changeDate = (event) => {
    setNewDate(event.target.value);
  };
  const changeName = (event) => {
    setNewName(event.target.value);
  };
  const changeQuantity = (event) => {
    setNewQuantity(event.target.value);
  };
  const changeDistance = (event) => {
    setNewDistance(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header" onClick={() => setSelectedItem(0)}>
        <h2>Тестовое задание web-программист (React.js)</h2>
        <h4>Таблица в формате Single Page Application</h4>
      </header>
      <div className="table-header" onClick={() => setSelectedItem(0)}>
        <div className="page-box">
          <img
            src={arrow}
            alt="previous"
            className="arrow-back"
            draggable={false}
            style={page > 1 ? {} : { filter: " opacity(0.20)" }}
            onClick={() => page > 1 && setPage(page - 1)}
          />
          <img
            src={arrow}
            alt="next"
            draggable={false}
            style={data.length + 1 > page * 10 ? {} : { filter: " opacity(0.20)" }}
            onClick={() => data.length + 1 > page * 10 && setPage(page + 1)}
          />
        </div>
        <div className="flex-column">
          <span>Выбор колонки</span>
          <select className="dropdown">
            <option value="" defaultValue></option>
            <option value="date">Дата</option>
            <option value="name">Название</option>
            <option value="quantity">Количество</option>
            <option value="distance">Расстояние</option>
          </select>
        </div>
        <div className="flex-column">
          <span>Выбор условия</span>
          <select className="dropdown">
            <option value="" defaultValue></option>
            <option value="name">=</option>
            <option value="quantity">&lt;</option>
            <option value="distance">&gt;</option>
          </select>
        </div>
        <div className="flex-column">
          <span>Значение</span>
          <input className="dropdown-input-header " />
        </div>
      </div>
      {isLoading && <p>LOADING</p>}
      {!isLoading && (
        <table className="table">
          <tbody>
            <tr onClick={() => setSelectedItem(0)}>
              <th>Дата</th>
              <th>Название</th>
              <th>Количество</th>
              <th>Расстояние</th>
              <th className="last-table"></th>
            </tr>
            {visibleTable.map((el, ind) => (
              <tr key={ind}>
                <td onClick={() => selectedItem !== ind + 1 && changeField(ind + 1, el)}>
                  {selectedItem === ind + 1 && <input className="dropdown-input" defaultValue={el.date.substring(0, 10)} onChange={changeDate} />}
                  {selectedItem !== ind + 1 && el.date.substring(0, 10)}
                </td>
                <td onClick={() => selectedItem !== ind + 1 && changeField(ind + 1, el)}>
                  {selectedItem === ind + 1 && <input className="dropdown-input" defaultValue={el.name} onChange={changeName} />}
                  {selectedItem !== ind + 1 && el.name}
                </td>
                <td onClick={() => selectedItem !== ind + 1 && changeField(ind + 1, el)}>
                  {selectedItem === ind + 1 && <input className="dropdown-input" defaultValue={el.quantity} onChange={changeQuantity} />}
                  {selectedItem !== ind + 1 && el.quantity}
                </td>
                <td onClick={() => selectedItem !== ind + 1 && changeField(ind + 1, el)}>
                  {selectedItem === ind + 1 && <input className="dropdown-input" defaultValue={el.distance} onChange={changeDistance} />}
                  {selectedItem !== ind + 1 && el.distance}
                </td>
                <td className="last-table">
                  <img src={bucket} alt="del" style={selectedItem !== ind + 1 ? {} : { display: "none" }} onClick={() => deleteItem(el.id)} />
                  <img
                    src={checkmark}
                    alt="apply"
                    className="checkmark"
                    style={selectedItem === ind + 1 ? {} : { display: "none" }}
                    onClick={() => applyField(newDate, newName, newQuantity, newDistance)}
                  />
                </td>
              </tr>
            ))}
            {visibleTable.length < 10 &&
              [...Array(10 - visibleTable.length)].map((_el, ind) => (
                <tr key={ind} onClick={() => selectedItem !== ind + data.length + 1 && changeField(ind + data.length + 1)}>
                  <td>{selectedItem === ind + data.length + 1 && <input className="dropdown-input" onChange={changeDate} />}</td>
                  <td>{selectedItem === ind + data.length + 1 && <input className="dropdown-input" onChange={changeName} />}</td>
                  <td>{selectedItem === ind + data.length + 1 && <input className="dropdown-input" onChange={changeQuantity} />}</td>
                  <td>{selectedItem === ind + data.length + 1 && <input className="dropdown-input" onChange={changeDistance} />}</td>
                  <td className="last-table">
                    <img
                      src={checkmark}
                      alt="apply"
                      className="checkmark"
                      style={selectedItem === ind + data.length + 1 ? {} : { display: "none" }}
                      onClick={() => applyField(newDate, newName, newQuantity, newDistance)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
