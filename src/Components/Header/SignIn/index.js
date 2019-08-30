import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

const SignIn = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const writeEmail = (e) => {
		setEmail(e.target.value)
	}

	const writePassword = (e) => {
		setPassword(e.target.value)
	}
	return (
		<div className="sigin-form text-center show" tabIndex="-1" role="dialog" aria-labelledby="formsign" style={{ paddingRight: "15px", display: "block" }}>
			<div className="modal-dialog ls">
				<div className="modal-content">

					<div className="modal-header">
						<h6 className="modal-title" id="formlogin">Sign In</h6>
						<Link to="/signup" className="btn btn-maincolor btn-sign">Sign Up</Link>

					</div>
					<div className="modal-body">
						<div className="form-title">
							<h2 onClick={() => alert(email + " " + password)}>Sign In</h2>
							<p>Log in to save your progress and obtain a certificate in Alison’s free Diploma in Web</p>
						</div>
						<form action="/">
							<TextField
								id="filled-email-input"
								label="Email"
								type="email"
								value={email}
								onInput={writeEmail}
								name="email"
								autoComplete="email"
								margin="normal"
								variant="filled"
							/>
							<TextField
								id="filled-password-input"
								label="Password"
								type="password"
								value={password}
								onInput={writePassword}
								autoComplete="current-password"
								margin="normal"
								variant="filled"
							/>
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