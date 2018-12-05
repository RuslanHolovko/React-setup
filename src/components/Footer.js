import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';


	let items = [
		{id:'1', name:'Home', link:'/'},
		{id:'2', name:'About', link:'/about'},
		{id:'3', name:'Aboutposts', link:'/about/posts'},
		{id:'3', name:'cartPage', link:'/carts/cart_page'}
  ]

  let imgHeight = {
    height: '100px'
  }
  
class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {addClass: false}
  }

  toggle() {
    this.setState({addClass: !this.state.addClass});
  }

  // trolo (){alert('click')};


  render() {

  	let boxClass = ["footer"];

    if(this.state.addClass) {
      boxClass.push('green');
    }

    return (

      <div>

      <footer className={boxClass.join(' ')} onClick={this.toggle.bind(this)}>
    	 	{this.state.addClass}
      	<p>This is footer</p>
      	<ul onClick={this.trolo}>
      			{items.map((item) => (
              <Link key={item.id} to={item.link}>
    						{item.name}
    					</Link>
    				))}
      	</ul>
      </footer>
        <img
         src={logo}
         alt="logo"
         className='img'
         style={imgHeight}
          />

      </div>
    );
  }
}

export default Footer;