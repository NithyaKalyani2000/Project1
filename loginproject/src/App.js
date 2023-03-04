import './App.css';
import Login from './Login';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import PageOne from './PageOne';

function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh>
        <Switch>
          <Route path="/PageOne" component={PageOne} exact/>
          <Route path="/" component={Login} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
