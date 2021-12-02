import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/Login';
import Dashbord from './components/Dashbord';
import Borrow_Return from './components/Borrow-Return';
import Items from './components/Items';
import Member from './components/Member';
import Errorpage from './components/Errorpage'
function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashbord" component={Dashbord} />
      <Route path="/borrow" component={Borrow_Return} />
      <Route path="/Items" component={Items} />
      <Route path="/Member" component={Member} />
      <Route path="/Errorpage" component={Errorpage} />
      {/* <Route path="/register" component={Register} />
      <Route path="/main" component={Main} />
      <Route path="/editinfo" component={Edit_info} />
      <Route path="/rating" component={Rating} />
      <Route path="/buy-lotalee" component={Lotalee} />
      <Route path="/test" component={Test} /> */}
      {/* <Login/> */}
    </Switch>
  </Router>
  );
}

export default App;
