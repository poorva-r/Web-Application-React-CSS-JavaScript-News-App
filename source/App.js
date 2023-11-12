import React from "react";
import "./App.css";
import logo from './logo.png';

import Posts from "./components/Posts/Posts";

const App = () => {
return (
	<div className="main-container">
    <center><br></br>
     <img src={logo} className="App-logo" alt="logo"/></center>
    <h1><center>JIET JODHPUR</center></h1>
    <hr></hr>
	<h1 className="main-heading"><center>NOTICE BOARD</center>  
	</h1> <br></br>

	<div class="topnav">
  <input type="text" placeholder="Search.."></input>
</div> 
	<br></br> <br></br>

	


	<Posts/>
	</div>
);
};

export default App;

