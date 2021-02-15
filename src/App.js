import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Fragment from './Components/Fragment/Hello'
import TopHeadline from './Components/TopHeadline/TopHeadline';
import Hello from './Components/Fragment/Hello';
import User from './Components/User/User';
import Friends from './Components/Friends/Friends';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import FriendDetail from './Components/FriendDetail/FriendDetail';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path ="/friend/:friendID">
          <FriendDetail />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
