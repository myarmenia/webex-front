import React from 'react';

function SignUp () {
    return (
        <div className="modal fade sigin-form text-center show" id="form2" tabIndex="-1" role="dialog" aria-labelledby="formsign" style={{paddingRight: "15px", display: "block"}}>
		<div className="modal-dialog ls">
			<div className="modal-content">
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">×</span>
				</button>
				<div className="modal-header">
					<button type="button" className="btn btn-maincolor btn-login">Log in</button>
					<h6 className="modal-title" id="formsign">Sign Up</h6>
				</div>
				<div className="modal-body">
					<div className="form-title">
						<h2>Sign up</h2>
						<p>Sign up to save your progress and obtain a certificate in Alison’s free Diploma in Web</p>
					</div>
					<form action="/">
						<div className="form-group has-placeholder">
							<label htmlFor="name-sigin">Your Name:</label>
							<input type="text" className="form-control" id="name-sigin" placeholder="Enter your name" name="First name" />
						</div>
						<div className="form-group has-placeholder">
							<label htmlFor="sigemail">Email:</label>
							<input type="email" className="form-control" id="sigemail" placeholder="Your email adress" name="sigemail" />
						</div>
						<div className="form-group has-placeholder">
							<label htmlFor="sigpassword">Password:</label>
							<input type="password" className="form-control" id="sigpassword" placeholder="password" name="sigpassword" />
						</div>
						<div className="social-account">
							<h6>
								or
							</h6>
							<h6>
								Sign up with your Social Account
							</h6>
							<span className="social-icons">
								<a href="1.html" className="fa fa-facebook " title="facebook"></a>
								<a href="/a" className="fa fa-twitter " title="twitter"></a>
								<a href="/a" className="fa fa-paper-plane " title="telegram"></a>
								<a href="/a" className="fa fa-linkedin " title="linkedin"></a>
								<a href="/a" className="fa fa-instagram " title="instagram"></a>
								<a href="/a" className="fa fa-youtube-play " title="youtube"></a>
							</span>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" id="agree" />
							<label className="form-check-label agree" htmlFor="agree">
								I agree to the Terms and Conditions
							</label>
							<input className="form-check-input" type="checkbox" id="updates" />
							<label className="form-check-label" htmlFor="updates">
								Yes, I want to get the most out of Tutor by receiving tips, updates and exclusive offers.
							</label>
						</div>
						<button type="submit" className="btn btn-maincolor btn-sign">Sign In</button>
					</form>
					<div className="modal-footer">
						Already have an Alison account?<button type="button" className="btn-login">Log In</button>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export default SignUp;