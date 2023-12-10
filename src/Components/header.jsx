import React ,{Component}from "react";
// import { useState } from 'react';
import './CSS/header.css'
import './JS/main.js'

class Home extends Component{
    handleClick = () => {
        document.getElementById("menu-bar").classList.toggle("change");
        document.getElementById("nav").classList.toggle("change");
        document.getElementById("menu-bg").classList.toggle("change-bg");
      }
render(){
    return  <div>
        <div id="menu">
<div id="menu-bar"  onClick={this.handleClick}>
  <div id="bar1" class="bar"></div>
  <div id="bar2" class="bar"></div>
  <div id="bar3" class="bar"></div>
</div>
{/* <nav class="nav" id="nav">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href="#">Blog</a></li>
  </ul>
</nav>  */}
</div>
<div class="menu-bg" id="menu-bg"></div>
    </div>
  
}
}
export default Home