import React, { Component } from 'react';
import './CSS/Topsection.css'
import Roaa2 from '../Components/Images/Roaa.jpeg'

class Topsection extends Component {
 

  render() {
    return (
   <section className="home profile">
    <div className="container -100vh ">
        <div className="row align-items-center justify-content-center">
            <div className="col-6">
              <div className="main-profile-image">
              <img src={Roaa2} alt="my-image" class="img-profile"/>
              </div>

            </div>
            <div className="col-6">
                <h2 className="main-title">I'M <span className="sub-name">Roaa Abu-shaqrah</span></h2>
                <p className="main-text">Passionate Full Stack Engineer with a track record in designing and maintaining scalable web apps.
                   increasing user engagement by 60%. Expertise in React, Laravel, and robust RESTful APIs. 
                  Thrives on optimizing performance (30% improvement) and collaborating for project success.</p>
            </div>
        </div>
    </div>
   </section>
		
	
    );
  }
}

export default Topsection;
