import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo2 from '../logo.svg';

export default class Header extends Component{
    render(){
        return(
            <header className="App-header">
            <img src={logo2} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <ul>
                <li><Link className='link' to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/about/posts'>Posts</Link></li>
            </ul>
            </header>
        )
    }
}