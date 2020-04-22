import React from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import Events from './components/Events';
import {BrowserRouter as Router,Route} from "react-router-dom";
//combines react with react
import {Provider} from "react-redux";
import store from "./store";
import Role from './components/Role';
function App() {
  return (
    <Provider store={store}>   
    <Router>
    <div className="App">
    {
        window.location.pathname === '/' ? '' : <Header />
      }
    <Route exact path="/dashboard" component={Dashboard}/>
    <Route exact path="/events" component={Events}/>
    <Route exact path="/" component={Login}/>
    <Route exact path="/role" component={Role}/>
    <Footer/>
    </div>
    </Router>
    </Provider>

  );
}

export default App;
