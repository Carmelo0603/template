import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Myfooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import history from "./components/books/history.json";
function App() {
  return (
    <>
      <MyNav></MyNav>
      <Welcome></Welcome>

      <BookList libri={history}></BookList>

      <Myfooter></Myfooter>
    </>
  );
}

export default App;
