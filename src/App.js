import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';

import Home from './components/pages/home/Home'
import ProductSimilar from './components/pages/productsimilar/ProductSimilar'
import BizardWorld from './components/pages/bizardworld/BizardWorld'
import Signup from'./components/pages/register/Signup'
 import Login from './components/pages/register/Login'
 import Reset from './components/pages/register/Reset'
 





function App() {


	return (
		<Router>
			<div>
				<Route exact path="/" name="Home Page" component={Home} />
				<Route exact path="/productSimilar" name="ProductSimilar Page" component={ProductSimilar} />
				<Route exact path="/bizardworld" name="BizardWorld Page" component={BizardWorld} />
				<Route exact path="/signup" name="Signup Page" component={Signup} />
				<Route exact path="/login" name="Login Page" component={Login} />
				<Route exact path="/reset" name="Reset Page" component={Reset} />
			</div>
		</Router>
	);

}

export default App;
