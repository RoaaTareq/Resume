import React,{Component} from 'react'

class Contact extends Component{
    render(){
        return(
            <>
            <section class="contact">
    <div class="container">
        <h1 class="s-h-title">Contact <span>ME</span></h1>
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
             
                <div class="single-info">
                    <div class="info-icon">
                        <i class="fa fa-rocket"></i>
                    </div>
                    <div class="info-content">
                        <h5>My Location:</h5>
                        <p>700 Oak Street, Brockton MA 2301</p>
                    </div>

                </div>
            </div>
            <div class="col-lg-4 col-md-6">
              
                <div class="single-info">
                    <div class="info-icon">
                        <i class="fa fa-phone"></i>
                    </div>
                    <div class="info-content">
                        <h5>Phone Number:</h5>
                        <p>+0123 123 856</p>
                    </div>

                </div>
            </div>
            <div class="col-lg-4 col-md-6">
             
                <div class="single-info">

                    <div class="info-icon">
                        <i class="fa fa-envelope"></i>
                    </div>
                    <div class="info-contentr">
                        <h5>Email Address:</h5>
                        <p>demomail@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row cAndm">
            <div class="col-lg-6">
                <div class="home-page-form">
                    <div class="contact-form">
                        <form id="contact-form" method="post" action="https://idealdevs.net/porichoy/sendmail">
                            <input type="hidden" name="_token" value="U58FZo5N9knWeZ9Bp0aIjs2rZ5NOuJ4ej3SCbpB4" />
                            <div class="controls">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <i class="fa fa-user-o"></i>
                                            <input id="form_name" type="text" name="name" class="form-control" placeholder="Name" required="required" data-error="Name is required." />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <i class="fa fa-envelope-o"></i>
                                            <input id="form_email" type="email" name="email" class="form-control" placeholder="Email*" required="required" data-error="Valid email is required." />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <i class="fa fa-question-circle-o"></i>
                                            <input id="form_subject" type="text" name="subject" class="form-control" placeholder="Subject*" required="required" data-error="Subject is required." />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <i class="fa fa-comment-o"></i>
                                            <textarea id="form_message" name="message" class="form-control" placeholder="Message*" rows="7" required="required" data-error="Please,leave us a message."></textarea>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <button type="submit" class="mybtn mybtn-bg"><span>Send Message</span></button>
                                    </div>
                                </div>
                            </div>
                        </form> 

                        <div class="social-link">
                            <ul class="wrap">
                                <li class="wow fadeInUp">
                                    <a href="https://laracasts.com/"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li class="wow fadeInUp">
                                    <a href="https://laracasts.com/"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li class="wow fadeInUp">
                                    <a href="https://laracasts.com/"><i class="fab fa-linkedin-in"></i></a>
                                </li>
                                <li class="wow fadeInUp">
                                    <a href="https://laracasts.com/"><i class="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="google_map_wrapper">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36706.63937536338!2d-2.971786671931012!3d54.900026818945854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ce1df3eee6b0f%3A0x5c0a43b6ba15682d!2sCarlisle%2C%20UK!5e0!3m2!1sen!2sbd!4v1601958052223!5m2!1sen!2sbd" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    </div>
 </section>
            </>
        )
    }
}

export default Contact