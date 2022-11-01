import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect,Routes } from 'react-router-dom';
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
			<Routes>
				<Route exact path="/" name="Home Page" element={<Home/>} />
				<Route exact path="/productSimilar" name="ProductSimilar Page" element={<ProductSimilar/>} />
				<Route exact path="/bizardworld" name="BizardWorld Page" element={<BizardWorld/>} />
				<Route exact path="/signup" name="Signup Page" element={<Signup/>} />
				<Route exact path="/login" name="Login Page" element={<Login/>} />
				<Route exact path="/reset" name="Reset Page" element={<Reset/>} />
			</Routes>
			</div>
		</Router>
	);

}

export default App;
