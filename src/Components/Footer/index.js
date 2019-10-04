import React from 'react';
import logo from '../../img/logo.png';
import Field from './textfield';
import './form.css'

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
								<p >
								Start learning programming with us and feel the individual and professional approach of our mentors. Also we developed a pattern of online courses where you can choose either packages or the unique lessons you want to study. By completing our stationary course, the best students will have the opportunity to work with our professional team or will be guided by partner companies to start a career.

								</p>
							</div>
							
						</div>
						<div className="col-12 col-md-6 col-lg-3 animate animated fadeInUp" data-animation="fadeInUp">
							<div className="widget widget_tag_cloud">
								<h3 className="widget-title">Tag</h3>
								<div className="tagcloud">
									<a href="#" className="tag-cloud-link">
										HTML/HTML5
									</a>
									<a href="#" className="tag-cloud-link">
										css
									</a>
									<a href="#" className="tag-cloud-link">
										Boostrap
									</a>
									<a href="#" className="tag-cloud-link">
										JavaScript
									</a>
									<a href="#" className="tag-cloud-link">
										jQuery
									</a>
									<a href="#" className="tag-cloud-link">
										React
									</a>
									<a href="#" className="tag-cloud-link">
										Redux
									</a>
									<a href="#" className="tag-cloud-link">
										PHP
									</a>
									<a href="#" className="tag-cloud-link">
										Laravel
									</a>
									<a href="#" className="tag-cloud-link">
										MySQL
									</a>
									<a href="#" className="tag-cloud-link">
										OOP
									</a>
									<a href="#" className="tag-cloud-link">
										GitHub
									</a>
									<a href="#" className="tag-cloud-link">
										ECMAScript
									</a>
									<a href="#" className="tag-cloud-link">
										Node js
									</a>
									<a href="#" className="tag-cloud-link">
										.htaccess
									</a>
									<a href="#" className="tag-cloud-link">
										Angular JS
									</a>
									<a href="#" className="tag-cloud-link">
										Server
									</a>
									<a href="#" className="tag-cloud-link">
										WordPress
									</a>
									<a href="#" className="tag-cloud-link">
										css3
									</a>
									<a href="#" className="tag-cloud-link">
										JavaScript
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
									<i className="icon-m-phone-alt"></i>
									</div>
									<p className="media-body"><a href="tel:+37496400073">Tel.: +374 96 40 00 73 </a></p>
								</div>
								<div className="media side-icon-box">
									<div className="icon-styled fs-14">
										<i className="fa fa-envelope"></i>
									</div>
									<p className="media-body">
										<a href="mailto:info@webex.am">info@webex.am</a>
									</p>
								</div>
								<div className="media side-icon-box">
									<div className="icon-styled fs-14">
										<i class="fa fa-whatsapp" style={{'fontSize': '20px'}}></i>
									</div>
									<p className="media-body">
										<a href="whatsapp://send?phone=+37496400073">Whatsapp</a>
									</p>
								</div>
								<div className="media side-icon-box">
									<div className="icon-styled fs-14">
										<i class="fab fa-viber" style={{'fontSize': '20px'}}></i>
									</div>
									<p className="media-body">
										<a href="viber://add?number=37496400073">Viber</a>
									</p>
								</div>

								<div className="media side-icon-box">
									<div className="icon-styled fs-14">
										<i className="fa fa-facebook" title="facebook" style={{'fontSize': '20px'}}></i>
									</div>
									<p className="media-body">
									<a className="facebook" href="https://www.facebook.com/webexarmenia/?fref=ts">Facebook</a>
									</p>
								</div>
								<div className="media side-icon-box">
									<div className="icon-styled fs-14">
									<i className="fa fa-linkedin" title="linkedin" style={{'fontSize': '20px'}}></i>
									</div>
									<p className="media-body">
									<a className="facebook" href="https://www.facebook.com/webexarmenia/?fref=ts">LinkedIn</a>
									</p>
								</div>

								<div className="media side-icon-box">
									<div className="icon-styled fs-14">
									<i className="fa fa-instagram" title="Instagramn" style={{'fontSize': '20px'}}></i>
									</div>
									<p className="media-body">
									<a className="facebook" href="https://www.facebook.com/webexarmenia/?fref=ts">Instagram</a>
									</p>
								</div>
								</div>
						</div>
						<div className="col-12 col-md-6 col-lg-3 animate animated fadeInUp" data-animation="fadeInUp">
						<div className="widget widget_contact_form">
								<h3 className="widget-title" id="footer_h3">Drop a line</h3>
								<Field />
							</div>
						</div>
					</div>
				</div>
			</footer>
);
}
export default Footer;