import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Business from './components/Business';
import About from './components/About';


const App = () => {


    return(
        <div>
            <Header/>
            <BrowserRouter>
                <Route exact path='/' component={Home}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/business' component={Business}/>
                <Route path='/about-us' component={About}/>
            </BrowserRouter>
            <Footer/>
        </div>
    )
}

export default App;