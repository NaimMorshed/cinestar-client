import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Upload from './components/Upload/Title';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/upload">
          <Upload />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
