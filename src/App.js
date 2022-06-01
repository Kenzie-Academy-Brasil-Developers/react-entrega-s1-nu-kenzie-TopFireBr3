import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/dashboard";
import LadingPage from "./pages/login";
// import grupo from "../src/img/Group 277.svg"

function App() {

  const [logined, setLogined] = useState(true);
  function changeLogined() {
    setLogined(!logined);
  }

  return (
    <>
      {logined ? (
        <LadingPage changeLogined={changeLogined}/>
      ) : (
        <Dashboard changeLogined={changeLogined}/>
      )}
    </>
  );
}

export default App;
