import React, {useState} from 'react';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Signup from './components/Signup';
import Login from './components/Login';
import SearchPage from './components/SearchPage'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hasAuthenticated } from './services/AuthService';
import Auth from './context/Auth';
import AuthRoute from './components/AuthRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated())
  return (

    // BEM
    <Auth.Provider  value={{isAuthenticated, setIsAuthenticated}}>
    <div className="app">
      <Router>
        <Header />
        <Switch>
         
          <Route path="/signup">
          <div className="auth-wrapper">
            <div className="auth-inner">
             <Signup />
            </div>
          </div>
          </Route>

          <Route exact path="/login">
          <div className="auth-wrapper">
            <div className="auth-inner">
             <Login />
            </div>
          </div>
          </Route>
          
          <AuthRoute path="/search" component={SearchPage}>
          </AuthRoute>

          <AuthRoute path="/add-property" component={SearchPage}>
          </AuthRoute>
          
          <Route exact path="/">
            <Home />
          </Route>
        
        </Switch>
        
        <Footer />
      </ Router>
    </div>
    </Auth.Provider>
  );
}

export default App;
