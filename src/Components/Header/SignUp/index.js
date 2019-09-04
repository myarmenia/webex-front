import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { Line } from 'rc-progress';

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

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [nameValdation, setNameValidation] = useState('');
	const [emailValdation, setEmailValidation] = useState('');
	const [passwordValdation, setPasswordValidation] = useState('');
	const [checkPasswordState, setCheckPasswordState] = useState(0);
	const [checkPasswordColorState, setCheckPasswordColorState] = useState("red");

	const changeNameFunc = (e) => {
		setName(e.target.value);
		setNameValidation("");
	}

	const changeEmailFunc = (e) => {
		setEmail(e.target.value);	
		setEmailValidation("");
	}

	const checkPassword = (e) => {
		let strenght1 = 0;

		if (e.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)) {
			strenght1 += 1;
		}

		if (e.match(/[!@£$%^&*()]+/)) {
			strenght1 += 1;
		}

		if (e.length > 5) {
			strenght1 += 1;
		}

		if (e.length > 9) {
			strenght1 += 1;
		}

		switch (strenght1) {
			case 0:
				setCheckPasswordState(0);
				setCheckPasswordColorState("red");
				break;
			case 1:
				setCheckPasswordState(30);
				setCheckPasswordColorState("coral");
				break;
			case 2:
				setCheckPasswordState(41);
				setCheckPasswordColorState("yellow");
				break;
			case 3:
				setCheckPasswordState(65);
				setCheckPasswordColorState("yellow");
				break;
			case 4:
				setCheckPasswordState(95);
				setCheckPasswordColorState("green");
				break;
		}
	}

	const changePasswordFunc = (e) => {
		setPassword(e.target.value);
		setPasswordValidation("");
		checkPassword(e.target.value);
	}

	const sendRequest = () => {
		if (name === '') {
			setNameValidation("Name is required");
		}
		
		if (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)) {
			setEmailValidation("");
		} else if (email === '') {
			setEmailValidation("Email is required");
		} else {
			setEmailValidation("Write valid email");
		}

		if (password === '') {
			setPasswordValidation("Password is required");
		} else if (password.length < 8) {
			setPasswordValidation("Password must be 8 characters");
		}
		
	}

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
						<div className={classes.container}>

							<TextField
								id="outlined-name-input"
								label="Name *"
								className={classes.textField}
								type="text"
								name="name"
								autoComplete="name"
								margin="normal"
								variant="outlined"
								onChange={changeNameFunc}
							/>

							{
								nameValdation !== '' ? 
								<FormHelperText style={{color: "red"}} className={classes.textField}>
									{nameValdation}
								</FormHelperText> : ''
							}
							
							<TextField
								id="outlined-email-input"
								label="Email *"
								className={classes.textField}
								type="email"
								name="email"
								autoComplete="email"
								margin="normal"
								variant="outlined"
								onChange={changeEmailFunc}
							/>

							{
								emailValdation !== '' ? 
								<FormHelperText style={{color: "red"}} className={classes.textField}>
									{emailValdation}
								</FormHelperText> : ''
							}

							<TextField
								id="outlined-password-input"
								label="Password *"
								className={classes.textField}
								type="password"
								name="password"
								autoComplete="password"
								margin="normal"
								variant="outlined"
								onChange={changePasswordFunc}
							/>
							
							{
								passwordValdation !== '' ? 
								<FormHelperText style={{color: "red"}} className={classes.textField}>
									{passwordValdation}
								</FormHelperText> : ''
							}
							
							<div style={{width: "230px"}}>
								<Line percent={checkPasswordState} strokeWidth="4" strokeColor={checkPasswordColorState} id="strenght" />
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
							<form>
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
							</form>
							{/* <button type="submit" className="btn btn-maincolor btn-sign" 
							onClick={sendRequest}>
								Sign In
							</button> */}
							
							<Button 
								variant="contained" 
								size="large" 
								color="primary" 
								onClick={sendRequest}
								style={{margin: "0 auto"}}
							>	
							Sign In
							</Button>
						</div>
						<div className="modal-footer">
							Already have an Alison account?
							<button type="button" className="btn-login"><a href="/signin">Log In</a></button>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	)
}

export default SignUp;