import './App.css';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PageOne from './PageOne';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login/>
            </Route>
          <Route exact path="/PageOne">
            <PageOne/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
