import './App.css';
import Login from './Pages/Login';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import PageOne from './Pages/PageOne';

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
