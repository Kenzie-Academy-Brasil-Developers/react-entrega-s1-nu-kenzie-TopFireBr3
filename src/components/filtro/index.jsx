import { useState } from "react";
import "./style.css"
function FiltroList({ filtraArr }) {
  const [currentFilter, setCurrentFilter] = useState("Todos");
  

  return (
    <div className="filtroGeral2">
      <p>Resumo Financeiro</p>
      <button className={currentFilter==="Todos" ? "roza" : "nada"}onClick={() => filtraArr("Todos", setCurrentFilter )}>Todos</button>
      <button onClick={() => filtraArr("Saida", setCurrentFilter)}>Saídas</button>
      <button onClick={() => filtraArr("Entrada", setCurrentFilter)}>Entradas</button>
    </div>
  );
}
export default FiltroList;
