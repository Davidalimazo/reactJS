import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import Navbar from './navbar';
import NotFound from "./notfound";
import './App.css';
import Details from './details';

function App() {
  //Javascript codes here
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/details/:id">
            <Details />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  }

export default App;
