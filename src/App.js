
import React from 'react';
import './App.css';
import {About, Contact, Experience, Nav, Header, Portfolio} from './components'


const App = () => {
    return (
        <div>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default App