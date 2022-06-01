import Card from "../card";
import "./style.css";
import FiltroList from "./../filtro/index.jsx";
import fundo from "./../../img/NoCard.svg";

function List({
  listTransactions,
  filterTransactions,
  filtraArr,
  setListTransactions,
}) {
  return (
    <>
      {listTransactions.length === 0 ? (
        <section className="notList">
          <FiltroList filtraArr={filtraArr} />
          <div className="conteudo" >
            <h2>Você ainda não possui nenhum lançamento</h2>
            <img src={fundo} alt="fundo" />
          </div>
        </section>
      ) : (
        <section className="list">
          <FiltroList filtraArr={filtraArr} />
          {(filterTransactions.length > 0
            ? filterTransactions
            : listTransactions
          ).map((transaction, index) => (
            <Card
              transaction={transaction}
              key={index}
              setListTransactions={setListTransactions}
              listTransactions={listTransactions}
            />
          ))}
        </section>
      )}
    </>
  );
}
export default List;
