import { BrowserRouter } from "react-router-dom";
import './App.css';
import { Header } from "./components/Header";
import { Benefits } from "./components/benefits/Benefits";
import { Products } from "./components/products/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Benefits />
        <Products />
      </BrowserRouter>
    </>
  );
}

export default App;
