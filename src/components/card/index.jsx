import "./style.css";
import "./../../reset.css";
import lixeira from "../../img/lixeira.png";
function Card({ transaction, setListTransactions, listTransactions }) {
  const { description, type, value } = transaction;
  function ExcluirItem() {
    setListTransactions(
      listTransactions.filter((elem) => elem !== transaction)
    );
  }
  return (
    <>
      {type === "Entrada" ? (
        <li id="verde">
          <span>a</span>
          <div className="coluna">
              <div className="principal">
                <p>{description}</p>
                <p>{type}</p>
              </div>
              <div className="lixeira">
                <p className="dinheiro">{value}</p>
                <button onClick={ExcluirItem}>
                  <img src={lixeira} alt="lixeira" className="img" />
                </button>
              <div>
              </div>
            </div>
          </div>
        </li>
      ) : (
        <li id="cinza">
          <span>a</span>
          <div className="coluna">
              <div className="principal">
                <p>{description}</p>
                <p>{type}</p>
              </div>
              <div className="lixeira">
                <p className="dinheiro">{value}</p>
                <button onClick={ExcluirItem}>
                  <img src={lixeira} alt="lixeira" className="img" />
                </button>
              <div>
              </div>
            </div>
          </div>
        </li>
      )}
    </>
  );
}

export default Card;
