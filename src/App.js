import React from 'react';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import About from './pages/About';
import SocialFollow from './pages/SocialFollow';
import {BrowserRouter as Router, 
  Switch,
  NavLink,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="grid-container">
        <div className="header"> 
          <h1 style={{color:"white", marginLeft:"20px"}}>Welcome to SS-Store</h1>
          <SocialFollow />
          <div className="navbar">
            <ul>
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/product">Product</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact" className="right">contact</NavLink></li>
            </ul>
          </div>
        <div className="content">
           <Route exact path="/" component={Home} />
           <Route path="/product" component={Product} />
           <Route path="/about" component={About} />
           <Route path="/contact" component={Contact} />
         </div>
      </div>
      <div className="footer">
      <p>© 2020 copyright by ss-store </p>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
