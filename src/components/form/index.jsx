import { useState } from "react";
import "./style.css";
import "./../../reset.css";
function Form({ listTransactions, setListTransactions }) {
  const [userInput, setUserInput] = useState("");
  const [userInputSecundario, setUserInputSecundario] = useState("");
  const [Type, setType] = useState("Entrada");
  function callBackImput() {

    setListTransactions([
      ...listTransactions,
      {
        description: userInputSecundario,
        type: Type,
        value: userInput,
      },
    ]);
    setUserInput("");
    setUserInputSecundario("");
  }
  return (
    <form onSubmit={(event) => callBackImput(event.preventDefault())}>
      <div className="descricao">
        <h3>Descricão</h3>
        <input
          type="text"
          placeholder="insira a descricão"
          value={userInputSecundario}
          onChange={(event) => setUserInputSecundario(event.target.value)}
        />
        <span>Loja de Roupas</span>
      </div>
      <div className="container">
        <div className="numero">
          <h3>Valor</h3>
          <input
            type="number"
            placeholder="insira o valor"
            value={userInput}
            onChange={(event) => setUserInput(Number(event.target.value))}
          />
        </div>
        <div className="tipo">
          <h3>Tipo de Valor</h3>
          <select
            onChange={(event) => setType(event.target.value)}
          >
            <option>Entrada</option>
            <option>Saida</option>
          </select>
        </div>
      </div>
      <button type="submit">Novo cartão</button>
    </form>
  );
}
export default Form;
