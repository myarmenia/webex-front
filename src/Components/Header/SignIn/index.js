import React from 'react'

const SignIn=()=>{
    return(
          <div className="modal fade sigin-form text-center show" id="form1" tabIndex="-1" role="dialog" aria-labelledby="formlogin" aria-hidden="true" style={{display:'block'}}>
		<div className="modal-dialog ls">
			<div className="modal-content">
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">×</span>
				</button>
				<div className="modal-header">
					<h6 className="modal-title" id="formlogin">Log In</h6>
					<button type="button" className="btn btn-maincolor btn-sign">Sign Up</button>

				</div>
				<div className="modal-body">
					<div className="form-title">
						<h2>Log In</h2>
						<p>Log in to save your progress and obtain a certificate in Alison’s free Diploma in Web</p>
					</div>
					<form action="/">
						<div className="form-group has-placeholder">
							<label htmlFor="email-logn">Email:</label>
							<input type="email" className="form-control" id="email-logn" placeholder="Your email adress" name="email-logn" />
						</div>
						<div className="form-group has-placeholder">
							<label htmlFor="password-login">Password:</label>
							<input type="password" className="form-control" id="password-login" placeholder="Password" name="password" />
						</div>
						<div className="social-account">
							<h6>
								or
							</h6>
							<h6>
								Sign up with your Social Account
							</h6>
							<span className="social-icons">
								<a href="#" className="fa fa-facebook " title="facebook"></a>
								<a href="#" className="fa fa-twitter " title="twitter"></a>
								<a href="#" className="fa fa-paper-plane " title="telegram"></a>
								<a href="#" className="fa fa-linkedin " title="linkedin"></a>
								<a href="#" className="fa fa-instagram " title="instagram"></a>
								<a href="#" className="fa fa-youtube-play " title="youtube"></a>
							</span>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" id="remember" />
							<label className="form-check-label" htmlFor="remember">
								Keep me logged in
							</label>
						</div>
						<button type="submit" className="btn btn-maincolor log-btn">Log in</button>
					</form>
					<div className="modal-footer">
						Dont have an Tutor account?<button type="button" className="btn-sign">Sign Up</button>
					</div>
				</div>
			</div>
		</div>
	</div>
        
    )     
}

export default SignIn