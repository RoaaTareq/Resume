import React,{Component} from "react";
import './CSS/Resume.css'

class Resume extends Component{
    render(){
        return(
            <>
            <section id="resume" class="about-area section-padding section-bg active">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-heading">
                    <h2 class="s-h-title">
                        My <span>Resume</span>
                    </h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="about-box">
                    <div class="row">
                        <div class="col-lg-6 d-flex align-self-center">
                            <div class="about-content">
                                <a href="#" class="mybtn mybtn-bg"> <span><i class="fas fa-download"></i>Download My CV</span> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="eduandex" class="eduandex">
        <div class="container">

            <div class="row skill-area" id="statisticsSection">
                <div class="col-lg-6 skill-area-line">
                    <div class="skill-box">
                        <h4 class="title">
                            Coding Skills
                        </h4>
                        <div class="skill-list">
                           
                                 <div>
                                    <h1 class="title-skills"><img src="./Images/front-end.png" alt="front-end" class="icon-tilte"/>Front end</h1>
                                    <span> HTML5</span>  <span>CSS3</span> <span>JS</span> <span>ES6</span> <span>Bootstrap</span>  <span>Vue Js</span>
                                    <span>React Js</span>
                                 </div>
                                 <div> 
                                    <h1 class="title-skills">Back end</h1> 
                                    <span>PHP</span><span>Laravel</span><span>SQL</span><span>MVC</span><span>Wordpress</span><span>OOP</span>
                                 </div>
                                 <div>
                                    <h1 class="title-skills">Extra Skills</h1>
                                    <span>UX And UI</span><span> SEO</span><span> Accessibilty</span><span> peformance Website</span>
                                 </div>
                                 <div>
                                    <h1 class="title-skills">QA and managment tools</h1>
                                    <span>Postman</span><span> TFS</span><span> QA</span><span> Unit testing</span> 
                                 </div>

                               
                            
                          
                            
                           
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 skill-area-line">
                    <div class="skill-box">
                        <h4 class="title">
                            Language Skills
                        </h4>
                        <div class="skill-list">
                            
                            <div class="single-skill">
                                <div class="label">
                                    <span>Arabic</span>
                                  
                                </div>
                                
                            </div>
                           
                            <div class="single-skill">
                                <div class="label">
                                    <span>English</span>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 skill-area-circle">
                    <div class="skill-box">
                        <h4 class="title">
                            Professional Skills
                        </h4>
                        <div class="skill-list">
                            <div class="single-skill">
                               <img src="./Images/app-development.png" alt="development" class="web-development"/>
                                <div class="label mt-1 d-block text-center">
                                    <span>Web Development</span>
                                </div>
                            </div>
                            <div class="single-skill">
                                <img src="./Images/debug.png" alt="development" class="web-development"/>
                                <div class="label mt-1 d-block text-center">
                                    <span>QA</span>
                                </div>
                            </div>
                            <div class="single-skill">
                               <img src="./Images/seo.png" alt="development" class="web-development"/>
                                <div class="label mt-1 d-block text-center">
                                    <span>SEO</span>
                                </div>
                            </div>
                            <div class="single-skill">
                                <img src="./Images/ux-design.png" alt="development" class="web-development"/> 
                                <div class="label mt-1 d-block text-center">
                                    <span>UX & UI</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 skill-area-circle">
                    <div class="skill-box">
                        <h4 class="title">
                            Basic Knowledge
                        </h4>
                        <div class="skill-list">
                            <ul class="single-list-ul">
                                <li>
                                    <p>Search engine marketing</p>
                                </li>
                                <li>
                                    <p>iOS and android apps</p>
                                </li>
                                <li>
                                    <p>Spreadsheets (Excel, Google Spreadsheets, etc.)</p>
                                </li>
                                <li>
                                    <p>Email Communication</p>
                                </li>
                                <li>
                                    <p>Presentation software (PowerPoint, Keynote)</p>
                                </li>
                                <li>
                                    <p>Office suites (Microsoft Office, G Suite)</p>
                                </li>
                                <li>
                                    <p>Operating systems (Windows and MacOS)</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="edu-box">
                        <h2 class="title">Education</h2>
                        <div class="row">
                            <div class="col-12">
                                <div class="education-list">
                                    <div class="single-education">
                                        <h4 class="collage-name">
                                            University of the Incarnate Word
                                        </h4>
                                        <p class="degree">BSC IN CSS<span class="year">2019 - Present</span>
                                        </p>
                                        <div class="description">
                                            <p>
                                                The University of British Columbia is a public research
                                                university with
                                                campuses in Vancouver and Kelowna, British Columbia.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="single-education">
                                        <h4 class="collage-name">
                                            University of British Columbia
                                        </h4>
                                        <p class="degree">BSC IN CSS<span class="year">2017 - 2018</span>
                                        </p>
                                        <div class="description">
                                            <p>
                                                The University of British Columbia is a public research
                                                university with
                                                campuses in Vancouver and Kelowna, British Columbia.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="single-education">
                                        <h4 class="collage-name">
                                            The University of Alabama
                                        </h4>
                                        <p class="degree">BSC IN CSS<span class="year">2015 - 2017</span>
                                        </p>
                                        <div class="description">
                                            <p>
                                                The University of British Columbia is a public research
                                                university with
                                                campuses in Vancouver and Kelowna, British Columbia.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="edu-box">
                        <h2 class="title">Experince</h2>
                        <div class="row">
                            <div class="col-12">
                                <div class="education-list">
                                    <div class="single-education">
                                        <h4 class="collage-name">
                                            Ideal Devs
                                        </h4>
                                        <p class="degree">Web Developer <span class="year">2016 - Present</span>
                                        </p>
                                        <div class="description">
                                            <p>
                                                The University of British Columbia is a public research
                                                university with
                                                campuses in Vancouver and Kelowna, British Columbia.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="single-education">
                                        <h4 class="collage-name">
                                            Ideal Devs
                                        </h4>
                                        <p class="degree">Lead Ui/Ux Designer <span class="year">2015 -
                                                2018</span>
                                        </p>
                                        <div class="description">
                                            <p>
                                                The University of British Columbia is a public research
                                                university with
                                                campuses in Vancouver and Kelowna, British Columbia.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="single-education">
                                        <h4 class="collage-name">
                                            Ideal Devs
                                        </h4>
                                        <p class="degree">Senior Ui/Ux Designer <span class="year">2014 -
                                                2016</span>
                                        </p>
                                        <div class="description">
                                            <p>
                                                The University of British Columbia is a public research
                                                university with
                                                campuses in Vancouver and Kelowna, British Columbia.
                                            </p>
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
</section>
            </>
        )
    }
}
export default Resume