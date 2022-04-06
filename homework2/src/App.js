import React from "react";
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Navbar from "./Components/Navbar/Navbar";
const App = () => {
  return (
  <Router>
    <Navbar/>
       <main>
       <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/about" exact>
              <About/>
            </Route>
            <Route path="/blog" exact>
              <Blog/>
            </Route>
       </Switch>
       </main>
  </Router>
  );
}

export default App;
