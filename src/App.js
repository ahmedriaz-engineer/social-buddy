import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Comments from "./components/Comments/Comments";
import Home from "./components/Home/Home";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
  return (
    <Router>
      <div className="nav">
      <Link className='link' to="/home">Home</Link><br />
      <Link className='link' to="/about">About</Link>
      </div>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/post/:id">
          <PostDetails></PostDetails>
        </Route>
        <Route path='/comments'>
          <Comments></Comments>
        </Route>
        <Route>
          <h3>Your expected route is not found.</h3>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
