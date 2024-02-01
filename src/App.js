import { BrowserRouter } from "react-router-dom";
import './App.css';
import { Header } from "./components/Header";
import { Benefits } from "./components/benefits/Benefits";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Benefits />
      </BrowserRouter>
    </>
  );
}

export default App;
