import React, { Component } from 'react';
import './CSS/header.css'

class Header extends Component {
 

  render() {
    return (
     <header>
      
     <div id="main">
	
		<div class="mainmenu-area show">
			<nav class="my-navbar show">
				<ul class="navbar-links">
					<li class="mynav-item active">
						<a class="mynav-link active" href="#home">Home</a>
					</li>
					<li class="mynav-item">
						<a class="mynav-link" href="#about">About</a>
					</li>
					<li class="mynav-item">
						<a class="mynav-link" href="#resume">Resume</a>
					</li>
					<li class="mynav-item portfolio">
						<a class="mynav-link portfolio" href="#portfolio">Portfolio</a>
					</li>
					<li class="mynav-item">
						<a class="mynav-link" href="#blog">Blog</a>
					</li>
					<li class="mynav-item">
						<a class="mynav-link" href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
		</div>
		</div>
</header>
		
	
    );
  }
}

export default Header;
