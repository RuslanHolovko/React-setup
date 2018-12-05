import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

// pages
import Homepage from  './pages/HomePage'
import About from     './pages/About'
import Aboutpost from './pages/Aboutpost'
import cartPage from  './pages/cart'

let Router = () => (
	<Switch>
		<Route exact path='/' component={Homepage} />
		<Route exact path='/about' component={About} />
		<Route exact path='/about/posts' component={Aboutpost} />
		<Route exact path='/carts/cart_page' component={cartPage} />
	</Switch>
);

export default Router;