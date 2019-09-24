import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { Line } from 'rc-progress';

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
// import ReactPhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/dist/style.css'

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

function SectionOne (props) {

    const classes = useStyles();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [nameValdation, setNameValidation] = useState('');
	const [emailValdation, setEmailValidation] = useState('');
	const [passwordValdation, setPasswordValidation] = useState('');
	const [checkPasswordState, setCheckPasswordState] = useState(0);
	const [checkPasswordColorState, setCheckPasswordColorState] = useState("red");
	const [phone, setPhone] = useState('');

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
		// if (name === '') {
		// 	setNameValidation("Name is required");
		// }
		
		// if (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)) {
		// 	setEmailValidation("");
		// } else if (email === '') {
		// 	setEmailValidation("Email is required");
		// } else {
		// 	setEmailValidation("Write valid email");
		// }

		// if (password === '') {
		// 	setPasswordValidation("Password is required");
		// } else if (password.length < 8) {
		// 	setPasswordValidation("Password must be 8 characters");
        // }
        props.nextProps("two");
		
    }
    
    return (
        <>
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
                    id="outlined-name-input"
                    label="LastName *"
                    className={classes.textField}
                    type="text"
                    name="name"
                    autoComplete="lastname"
                    margin="normal"
                    variant="outlined"
                />

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

                <PhoneInput
                placeholder="Enter phone number"
                value={phone}
                displayInitialValueAsLocalNumber={false}
                onChange={ phone => setPhone(phone) } 
                />

                {/* <ReactPhoneInput defaultCountry={'am'} value={phone} 
                onChange={ phone => setPhone(phone) }  className={classes.textField} /> */}

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
                                    
            </div>

            <div className="mt-5">
                <Button 
                    variant="contained" 
                    size="large" 
                    color="primary" 
                    onClick={sendRequest}
                >	
                Next
                </Button>
            </div>

        </>
    )
}

export default SectionOne;