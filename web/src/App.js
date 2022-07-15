import arrow from "./img/arrow.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Тестовое задание web-программист (React.js)</h2>
        <h4>Таблица в формате Single Page Application</h4>
      </header>
      <div className="page-box">
        <img src={arrow} alt="previous" style={{ transform: "scale(-1, 1)" }} />
        <img src={arrow} alt="next" />
      </div>
      <body>
        <table id="table">
          <tr>
            <th>Дата</th>
            <th>Название</th>
            <th>Количество</th>
            <th>Расстояние</th>
          </tr>
          <tr>
            <td>07.12.22</td>
            <td>ARYDELM</td>
            <td>122</td>
            <td>240</td>
          </tr>
        </table>
      </body>
    </div>
  );
}

export default App;
