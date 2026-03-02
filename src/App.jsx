import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Myfooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <MyNav></MyNav>
      <Welcome></Welcome>
      <AllTheBooks></AllTheBooks>

      <Myfooter></Myfooter>
    </>
  );
}

export default App;
