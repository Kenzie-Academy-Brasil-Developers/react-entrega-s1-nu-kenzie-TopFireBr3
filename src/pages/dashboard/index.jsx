import { useState } from "react";
import Form from "../../components/form";
import List from "../../components/list";
import imgLogo from "./../../img/Kenzie.png";
import TotalMoney from "../../components/TotalMoney";
import "./style.css";

function Dashboard({ changeLogined }) {
  const [listTransactions, setListTransactions] = useState([]);

  const [filterTransactions, setFilterTransactions] = useState([]);
  function filtraArr(get, setCurrentFilter) {
    setCurrentFilter(get);
    if (get === "Todos") {
      setFilterTransactions([]);
    } else {
      const newFilter = listTransactions.filter((elem) => elem.type === get);
      setFilterTransactions(newFilter);
    }
  }
  return (
    <div className="App">
      <section className="body2">
        <header>
          <img src={imgLogo} alt="logo"></img>
          <button onClick={changeLogined}>Inicio</button>
        </header>
        <main>
          <div>
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
            <TotalMoney listTransactions={listTransactions} />
          </div>
          <List
            listTransactions={listTransactions}
            filterTransactions={filterTransactions}
            filtraArr={filtraArr}
            setListTransactions={setListTransactions}
          />
        </main>
      </section>
    </div>
  );
}
export default Dashboard;
