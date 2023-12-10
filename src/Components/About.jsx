import React ,{Component} from "react";
import './CSS/about.css'
import SEO from './Images/s1.png'
import GraphicDesign from './Images/s2.png'
import Markting from './Images/s3.png'
import AWS from './Images/s4.png'
import WEB from './Images/s5.png'
import Design from './Images/s6.png'

class About extends Component{
render(){
    return (
    <>
    <section className="about">
<div className="container">
    <h1 className="about-title">ABOUT <span >ME</span></h1>
    <div className="row">
        <div className="col-12">
        <div className="about-box">
            <div className="row">
                <div className="col-lg-6 d-flex align-self-center">
                    <div className="about-content">
                        <ul className="info-list">
                            <li>
                                <span className="title">First Name : </span>
                                <span className="value">Roaa</span>
                            </li>
                            <li>
                                <span className="title">Last Name : </span>
                                <span className="value">Abu-shaqrah</span>
                            </li>
                            <li>
                                <span className="title">Age : </span>
                                <span className="value">25</span>
                            </li>
                            <li>
                                <span className="title">Birthdate : </span>
                                <span className="value">24 Aug 1998</span>
                            </li>
                            <li>
                                <span className="title">Residence : </span>
                                <span className="value">Jordan</span>
                            </li>
                            <li>
                                <span className="title">Langages : </span>
                                <span className="value">English & Arabic</span>
                            </li>
                            <li>
                                <span className="title">Phone : </span>
                                <span className="value">+962770151824</span>
                            </li>
                            <li>
                                <span className="title">Email : </span>
                                <span className="value">roaa.abushaqrah@gmail.com</span>
                            </li>
                            <li>
                                <span className="title">Freelance : </span><span className="value">Available</span>
                            </li>
                            <li>
                                <span className="title">Experience : </span><span className="value">3 years</span>
                            </li>
                            <li>
                                <span className="title">Skype : </span><span className="value">genie.francis</span>
                            </li>
                            <li>
                                <span className="title">Address :</span>
                                <span className="value">Amman Jordan</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 d-flex align-self-center">
                    <div className="about-content">
                        <div className="my-acivment-list">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="single-acivment one">
                                        <div className="top-area">
                                            <div className="icon">
                                                <i className="far fa-heart"></i>
                                            </div>
                                            <div className="number">
                                                <span className="n-counter">368</span><span className="plus">+</span>
                                            </div>
                                        </div>
                                        <div className="content">

                                            <h6 className="title">
                                                Happy Clients
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-acivment two">
                                        <div className="top-area">
                                            <div className="icon">
                                                <i className="fas fa-briefcase"></i>
                                            </div>
                                            <div className="number">
                                                <span className="n-counter">658</span><span className="plus">+</span>
                                            </div>
                                        </div>
                                        <div className="content">

                                            <h6 className="title">
                                                Project Done
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-acivment">
                                        <div className="top-area">
                                            <div className="icon">
                                                <i className="fas fa-cloud-download-alt"></i>
                                            </div>
                                            <div className="number">
                                                <span className="n-counter">503</span><span className="plus">+</span>
                                            </div>
                                        </div>
                                        <div className="content">

                                            <h6 className="title">
                                                Files Downloaded
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-acivment">
                                        <div className="top-area">
                                            <div className="icon">
                                                <i className="fas fa-medal"></i>
                                            </div>
                                            <div className="number">
                                                <span className="n-counter">72</span><span className="plus">+</span>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h6 className="title">
                                                Awards Won
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>

    <h1 className="about-title">WHAT  I <span>DO</span></h1>
    <div className="row service-area-wrapper">
        <div className="col-lg-4 col-md-6">
            <a href="ajax/service1.html" className="single-service service-modal ">
                <img src={SEO} alt="SEO-icon" />
                <h6 className="title">SEO</h6>
                <p>Hopes lived by rooms oh in no death house. Contented direction september but end led excellent
                    ourselves.</p>
            </a>
        </div>
        <div className="col-lg-4 col-md-6">
            <a href="ajax/service2.html" className="single-service service-modal ">
                <img src={GraphicDesign} alt="Graphic Design" />
                <h6 className="title">Graphic Design</h6>
                <p>Hopes lived by rooms oh in no death house. Contented direction september but end led excellent
                    ourselves.</p>
            </a>
        </div>
        <div className="col-lg-4 col-md-6">
            <a href="ajax/service3.html" className="single-service service-modal ">
                <img src={ Markting} alt="Digital Marketing" />
                <h6 className="title">Digital Marketing</h6>
                <p>Hopes lived by rooms oh in no death house. Contented direction september but end led excellent
                    ourselves.</p>
            </a>
        </div>
        <div className="col-lg-4 col-md-6">
            <a href="ajax/service4.html" className="single-service service-modal ">
                <img src={AWS} alt="" />
                <h6 className="title">Amazon AWS</h6>
                <p>Hopes lived by rooms oh in no death house. Contented direction september but end led excellent
                    ourselves.</p>
            </a>
        </div>
        <div className="col-lg-4 col-md-6">
            <a href="ajax/service5.html" className="single-service service-modal ">
                <img src={WEB} alt="Web"/>
                <h6 className="title">Web Development</h6>
                <p>Hopes lived by rooms oh in no death house. Contented direction september but end led excellent
                    ourselves.</p>
            </a>
        </div>
        <div className="col-lg-4 col-md-6">
            <a href="ajax/service6.html" className="single-service service-modal ">
                <img src={Design} alt="Design" />
                <h6 className="title">Web Design</h6>
                <p>Hopes lived by rooms oh in no death house. Contented direction september but end led excellent
                    ourselves.</p>
            </a>
        </div>
    </div>
</div>
  </section>
    </>
)
}
}

export default About