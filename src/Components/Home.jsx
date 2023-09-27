import React ,{Component} from "react";
import myImage from './Images/Roaa-2.jpg'
import './CSS/home.css'

class Home extends Component{
render(){
    return <section class="home" id="home">
   
    <div class="container">
      <div class="d-flex  justify-content-center align-items-center mb-home">
        
          <div class="main-profile-image">
            <img src={myImage} alt="Roaa Abu-shaqrah" class="my-image" />
          </div>
          
        
       
          <div class="info">
            <span class="greeting">Hello</span>
            <h2 class="name">I'M<span>Roaa Abu-shaqrah</span></h2>
            <h4 class="header_title"> I Do <span id="typed">Web Development</span><span class="typed-cursor">|</span></h4>
            <p class="short-info">
              With over 2+ years of job experience.
              I studied Managment Information system at BAU .
               My skills include,HTML5,CSS3,Bootstrap,VUE,React, JavaScript and MySQL.
            </p>
          
        </div>
      </div>
    </div>
 
</section>
}
}

export default Home