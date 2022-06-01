import "./style.css";
function TotalMoney({ listTransactions }) {
  const valorTotal = listTransactions.reduce((acc, elem) => {


    return acc + elem.value;
  }, 0);
  return (
    <section className="dinheiro">
      <div className="geral">
        <h3 className="valor">Valor total:</h3>
        <p className="total">${valorTotal}</p>
      </div>
      <span className="texto">O valor se refere ao saldo</span>
    </section>
  );
}
export default TotalMoney;
