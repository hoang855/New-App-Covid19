import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import "./App.css"
import Home from "./Container/Home";
import About from "./Container/About";
import Topics from "./Container/Topics";
import Heard from "./Layout/Heard/Index";
import Title from "./Layout/Title";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Heard />
        <Title />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
