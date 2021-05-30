import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Upload from './components/Upload/Title';
import Description from './components/Upload/Description';
import Category from './components/Upload/Category';
import Thumbnail from './components/Upload/Thumbnail';
import VideoLink from './components/Upload/VideoLink';
import Complete from './components/Upload/Complete';

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

        <Route path="/description">
          <Description />
        </Route>

        <Route path="/category">
          <Category />
        </Route>

        <Route path="/thumbnail">
          <Thumbnail />
        </Route>

        <Route path="/videoLink">
          <VideoLink />
        </Route>

        <Route path="/complete">
          <Complete />
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
