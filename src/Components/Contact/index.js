import React from 'react';

const Contact=()=>{
    return(
        <div>
<section className="s-py-60 s-py-lg-100">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
                            <div className="ls ms page_map" data-draggable="true" data-scrollwheel="true" >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1523.912601194826!2d44.51633875805058!3d40.19070334379074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd7adb56dc45%3A0x2dba28308da8ae68!2sIT+Park!5e0!3m2!1sru!2s!4v1542755743034" width="100%" height="100%" ></iframe>
                            </div>
						</div>
					</div>
				</div>
			</section>
            <section className="ls s-pb-60 s-pb-lg-100">
            <div className="container">
                <div className="row c-mb-30 c-mb-md-0">
                    <div className="col-sm-4 animate animated pullDown" data-animation="pullDown">
                        <div className="icon-box text-center">
                            <div className="icon-styled bg-maincolor round">
                                <i className="fa fa-phone"></i>
                            </div>
                            <p>
                                <strong>Phone:</strong><a href="tel:+37496101017"> +374 96 10 10 17</a> <br />
                                <strong>Fax:</strong> +12 345 678 9123
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-4 animate animated pullDown" data-animation="pullDown">
                        <div className="icon-box text-center">
                            <div className="icon-styled bg-maincolor round">
                                <i className="fa fa-map-marker"></i>
                            </div>
                            <p>
                                PO Box 54378<br />
                                4321 Your Address,<br />
                                Your City, Your Country
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-4 animate animated pullDown" data-animation="pullDown">
                        <div className="icon-box text-center">
                            <div className="icon-styled bg-maincolor round">
                                <i className="fa fa-envelope-o"></i>
                            </div>
                            <p>
                                <a href="mailto:info@webex.am">info@webex.am</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="divider-10 d-none d-xl-block"></div>
                    <div className="col-lg-12 animate animated scaleAppear" data-animation="scaleAppear">
                        <form className="contact-form c-mb-0 c-mb-md-10 c-gutter-10" method="post" action="/">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group has-placeholder">
                                        <label for="name">Full Name <span className="required">*</span></label>
                                        <input type="text" aria-required="true" size="30" value="" name="name" id="name" className="form-control" placeholder="Full Name" />
                                    </div>
                                    <div className="form-group has-placeholder">
                                        <label for="email">Email address<span className="required">*</span></label>
                                        <input type="email" aria-required="true" size="30" value="" name="email" id="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group has-placeholder">
                                        <label for="subject">Subject<span className="required">*</span></label>
                                        <input type="text" aria-required="true" size="30" value="" name="subject" id="subject" className="form-control" placeholder="Subject" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group has-placeholder h-160">
                                        <label for="message">Message</label>
                                        <textarea aria-required="true" rows="6" cols="45" name="message" id="message" className="form-control" placeholder="Message"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-20">
                                <div className="col-sm-12">
                                    <div className="form-group text-center">
                                        <button type="submit" id="contact_form_submit" name="contact_submit" className="btn btn-maincolor">Contact Us</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}
export default Contact;