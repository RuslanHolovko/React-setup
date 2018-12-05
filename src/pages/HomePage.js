import React, { Component } from 'react';
import Footer from '../components/Footer'
import Header from '../components/header'

class Homepage extends Component{
	render(){
		return(
			<div>
				<Header />
				<h2>This is homepage</h2>
				<Footer />
			</div>
		)
	}
}

export default Homepage;