import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';



const App = () => {


    return(
        <div>
            <Header/>
            <BrowserRouter>
                <Route exact path='/'>
                    <Home/>
                </Route>
            </BrowserRouter>
            <Footer/>
        </div>
    )
}

export default App;