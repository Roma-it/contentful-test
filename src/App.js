import Nav from "./Nav";
import AppRouter from "./AppRouter";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
