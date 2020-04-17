import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Profile from "./components/Profile";
import Projects from "./components/Projectmaster";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div>
 <Header/>  
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/contacts" component={Contacts}/>
    </Switch>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
