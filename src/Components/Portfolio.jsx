import React , {Component} from 'react'
import firstproject from './Images/1.jpg'
import secondproject from './Images/2.jpg'
import thirdproject from './Images/3.jpg'
import fourthproject from './Images/4.jpg'
import fifthproject from './Images/5.jpg'
import sixthproject from './Images/6.jpg'
import seventhproject from './Images/7.jpg'
import eigthproject from './Images/8.jpg'
import nineproject from './Images/9.jpg'
class   Portfolio extends Component{
    render(){
        return(
            <>
             <section id="portfolio" class="project-gallery section-padding  section-bg active">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-heading">
                    <h2 class="s-h-title">
                        My <span>Portfolio</span>
                    </h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="project-gallery-filter d-flex justify-content-center">
                    <ul class="project-gallery-menu d-inline-block">
                        <li class="filter active" data-filter="all">All</li>
                        <li class="filter" data-filter=".cat-1">Marketing</li>
                        <li class="filter" data-filter=".cat-2">Management</li>
                        <li class="filter" data-filter=".cat-3">Consulting</li>
                    </ul>
                </div>
                <div class="row project-gallery-item">
                    <div class="mix col-md-6 col-lg-4 gallery-item cat-1 cat-3" data-bound="" style="display: inline-block;">
                        <a href="ajax/portfolio-ajax-project-1.html" class="gallery-item-content pp">
                            <div class="item-thumbnail">
                                <img src={firstproject} alt=""/>
                                <div class="content-overlay">
                                    <div class="content">
                                        <h4 class="project-title">
                                            Project Title
                                        </h4>
                                        <span class="project-category">Marketing</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="mix col-md-6 col-lg-4 gallery-item  cat-3 cat-4" data-bound="" style="display: inline-block;">
                        <a href="ajax/portfolio-ajax-project-2.html" class="gallery-item-content pp">
                            <div class="item-thumbnail">
                                <img src={secondproject} alt=""/>
                                <div class="content-overlay">
                                    <div class="content">
                                        <h4 class="project-title">
                                            Project Title
                                        </h4>
                                        <span class="project-category">Marketing</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="mix col-md-6 col-lg-4 gallery-item cat-2 cat-1" data-bound="" style="display: inline-block;">
                        <a href="ajax/portfolio-ajax-project-3.html" class="gallery-item-content pp">
                            <div class="item-thumbnail">
                                <img src={thirdproject} alt=""/>
                                <div class="content-overlay">
                                    <div class="content">
                                        <h4 class="project-title">
                                            Project Title
                                        </h4>
                                        <span class="project-category">Marketing</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="mix col-md-6 col-lg-4 gallery-item cat-1 cat-3" data-bound="" style="display: inline-block;">
                        <a href="ajax/portfolio-ajax-project-1.html" class="gallery-item-content pp">
                            <div class="item-thumbnail">
                                <img src={fourthproject} alt=""/>
                                <div class="content-overlay">
                                    <div class="content">
                                        <h4 class="project-title">
                                            Project Title
                                        </h4>
                                        <span class="project-category">Marketing</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="mix col-md-6 col-lg-4 gallery-item cat-3 cat-4" data-bound="" style="display: inline-block;">
                        <a href="ajax/portfolio-ajax-project-2.html" class="gallery-item-content pp">
                            <div class="item-thumbnail">
                                <img src={fifthproject} alt=""/>
                                <div class="content-overlay">
                                    <div class="content">
                                        <h4 class="project-title">
                                            Project Title
                                        </h4>
                                        <span class="project-category">Marketing</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="mix col-md-6 col-lg-4 gallery-item cat-1 cat-2" data-bound="" style="display: inline-block;">
                        <a href="ajax/portfolio-ajax-project-3.html" class="gallery-item-content pp">
                            <div class="item-thumbnail">
                                <img src={sixthproject} alt=""/>
                                <div class="content-overlay">
                                    <div class="content">
                                        <h4 class="project-title">
                                            Project Title
                                        </h4>
                                        <span class="project-category">Marketing</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="mix col-md-6 col-lg-4 gallery-item cat-4 cat-2" data-bound="" style="display: inline-block;">
                        <a href="ajax/portfolio-ajax-project-1.html" class="gallery-item-content pp">
                            <div class="item-thumbnail">
                                <img src={seventhproject} alt="" />
                                <div class="content-overlay">
                                    <div class="content">
                                        <h4 class="project-title">
                                            Project Title
                                        </h4>
                                        <span class="project-category">Marketing</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="mix col-md-6 col-lg-4 gallery-item cat-3 cat-2" data-bound="" style="display: inline-block;">
                        <a href="ajax/portfolio-ajax-project-2.html" class="gallery-item-content pp">
                            <div class="item-thumbnail">
                                <img src={eigthproject} alt=""/>
                                <div class="content-overlay">
                                    <div class="content">
                                        <h4 class="project-title">
                                            Project Title
                                        </h4>
                                        <span class="project-category">Marketing</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="mix col-md-6 col-lg-4 gallery-item cat-3 cat-1" data-bound="" style="display: inline-block;">
                        <a href="ajax/portfolio-ajax-project-3.html" class="gallery-item-content pp">
                            <div class="item-thumbnail">
                                <img src={nineproject} alt="" />
                                <div class="content-overlay">
                                    <div class="content">
                                        <h4 class="project-title">
                                            Project Title
                                        </h4>
                                        <span class="project-category">Marketing</span>
                                    </div>
                                </div>
                            </div>
                        </a>
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
export default Portfolio