import logo from "../../img/Kenzie.png";
import fundo from "../../img/login.svg";
import "./style.css"
function LadingPage({changeLogined}) {
  return (
    <section className="body">
      <div className="todo">
        <img src={logo} alt="logo" />
        <h1 className="textPrincipal">Centralize o controle das suas finanças</h1>
        <p className="textSecundario">de forma rápida e segura</p>
        <button onClick={changeLogined}>iníciar</button>
      </div>
      <img src={fundo} alt="fundo" />
    </section>
  );
}
export default LadingPage;
