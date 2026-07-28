import logo from "./logo.svg";
import "./App.css";
import Fib from "./Fib";
import Otherpage from "./Otherpage";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Link to="/otherpage">Go to Other Page</Link>
          <Link to="/">Go back to Home</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={Otherpage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
