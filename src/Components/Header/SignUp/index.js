import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: "400px"
	}
}));

function SignUp() {

	const classes = useStyles();


	return (
		<div className="sigin-form text-center show" id="form2" tabIndex="-1" role="dialog" aria-labelledby="formsign" style={{ paddingRight: "15px", display: "block" }}>
			<div className="modal-dialog ls">
				<div className="modal-content">

					<div className="modal-header">
						{/* <button type="button" className="btn btn-maincolor btn-login">Log in</button> */}
						<Link to="/signin" className="btn btn-maincolor btn-login">Sign In</Link>
						<h6 className="modal-title" id="formsign">Sign Up</h6>
					</div>
					<div className="modal-body">
						<div className="form-title">
							<h2>Sign up</h2>
							<p>Sign up to save your progress and obtain a certificate in Alison’s free Diploma in Web</p>
						</div>
						<form className={classes.container} noValidate autoComplete="off">

							<TextField
								id="outlined-name-input"
								label="Name"
								className={classes.textField}
								type="text"
								name="name"
								autoComplete="name"
								margin="normal"
								variant="outlined"
							/>

							<TextField
								id="outlined-email-input"
								label="Email"
								className={classes.textField}
								type="email"
								name="email"
								autoComplete="email"
								margin="normal"
								variant="outlined"
							/>

							<TextField
								id="outlined-password-input"
								label="Password"
								className={classes.textField}
								type="password"
								name="password"
								autoComplete="password"
								margin="normal"
								variant="outlined"
							/>

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