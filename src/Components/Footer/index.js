import React from 'react';
import logo from '../../img/logo.png';

const Footer=()=>{
return(
<footer className="page_footer ds s-pt-75 s-pb-45 c-gutter-40">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-6 col-lg-3 animate animated fadeInUp" data-animation="fadeInUp">
							<div className="widget widget_text">
								<a href="./" className="logo">
									<img src={logo} alt="" />
									<span className="logo-text color-darkgrey">utor</span>
								</a>
								<p>
									Isn't days fill, after him bring. Set likeness meat seed whose for itself you can't seas itself. Herb replenish he, dry he. Firmament their.
								</p>
							</div>
							<div className="widget widget_social_button">
							<h3 className="widget-title">Follow us</h3>
								<a className="facebook" href="https://www.facebook.com/webexarmenia/?fref=ts">
									<i className="fa fa-facebook" title="facebook"></i>
									TutorFacebook
								</a>
								<a className="linkedin" href="https://www.linkedin.com/in/webex-technologies-llc-465516182">
									<i className="fa fa-linkedin" title="linkedin"></i>
									TutorLinkedIn
								</a>
								<a className="instagram" href="#">
									<i className="fa fa-instagram" title="instagram"></i>
									TutorInstagram
								</a>
								</div>
						</div>
						<div className="col-12 col-md-6 col-lg-3 animate animated fadeInUp" data-animation="fadeInUp">
							<div className="widget widget_tag_cloud">
								<h3 className="widget-title">Tag</h3>
								<div className="tagcloud">
									<a href="#" className="tag-cloud-link">
										Technology
									</a>
									<a href="#" className="tag-cloud-link">
										Humanities
									</a>
									<a href="#" className="tag-cloud-link">
										Language
									</a>
									<a href="#" className="tag-cloud-link">
										Science
									</a>
									<a href="#" className="tag-cloud-link">
										Business
									</a>
									<a href="#" className="tag-cloud-link">
										Marketing
									</a>
									<a href="#" className="tag-cloud-link">
										Lifestyle
									</a>
									<a href="#" className="tag-cloud-link">
										Math
									</a>
								</div>
							</div>
						</div>
						
						<div className="col-12 col-md-6 col-lg-3 animate animated fadeInUp" data-animation="fadeInUp">
							<div className="widget widget_icons_list">
								<h3>Contacts</h3>
								<div className="media side-icon-box">
									<div className="icon-styled fs-14">
										<i className="icon-m-marker-alt"></i>
									</div>
									<p className="media-body">Str. Sarmen 1, ave. M. Mashtots, Yerevan, Armenia</p>
								</div>
								<div className="media side-icon-box">
									<div className="icon-styled fs-14">
										<i className="icon-m-phone-alt"></i>
									</div>
									<p className="media-body"><a href="tel:+37496101017">Tel.: +374 96 10 10 17 </a></p>
								</div>
								<div className="media side-icon-box">
									<div className="icon-styled fs-14">
										<i className="icon-m-fax-alt"></i>
									</div>
									<p className="media-body">Fax: +1 709-834-2693</p>
								</div>
								<div className="media side-icon-box">
									<div className="icon-styled fs-14">
										<i className="fa fa-envelope"></i>
									</div>
									<p className="media-body">
										<a href="mailto:info@webex.am">info@webex.am</a>
									</p>
								</div>

							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-3 animate animated fadeInUp" data-animation="fadeInUp">
						<div className="widget widget_contact_form">
								<h3 className="widget-title">Drop a line</h3>
								<form className="contact-form c-mb-20 c-gutter-20" method="post" action="/">
									<div className="form-group has-placeholder">
										<label for="name">Full Name <span className="required">*</span></label>
										<i className="fa fa-user color-darkgrey"></i>
										<input type="text" aria-required="true" size="30" value="" name="name" id="name" className="form-control" placeholder="Name" />
									</div>
									<div className="form-group has-placeholder">
										<label for="email">Email address<span className="required">*</span></label>
										<i className="fa fa-envelope color-darkgrey"></i>
										<input type="email" aria-required="true" size="30" value="" name="email" id="email" className="form-control" placeholder="Email" />
									</div>
									<div className="form-group has-placeholder">
										<label for="message">Message</label>
										<i className="fa fa-pencil color-darkgrey"></i>
										<textarea aria-required="true" rows="6" cols="45" name="message" id="message" className="form-control" placeholder="Message"></textarea>
									</div>
									<div className="form-group">
										<button type="submit" id="contact_form_submit" name="contact_submit" className="btn btn-maincolor">Send Message
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>

			</footer>
);
}
export default Footer;