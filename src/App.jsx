import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Business from './components/Business';
import About from './components/About';
import Pricing from './components/Pricing';


const App = () => {


    return(
        <div>
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/business' component={Business}/>
                    <Route path='/about-us' component={About}/>
                    <Route path='/pricing' component={Pricing}/>
                </Switch>
            </BrowserRouter>
            <Footer/>
        </div>
    )
}

export default App;