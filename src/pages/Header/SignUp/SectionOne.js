import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { Line } from 'rc-progress';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { isValidPhoneNumber } from 'react-phone-number-input'

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

function SectionOne(props) {

    const classes = useStyles();

    const [name, setName] = useState(props.obj.name);
    const [lastName, setLastName] = useState(props.obj.last_name);
    const [email, setEmail] = useState(props.obj.email);
    const [password, setPassword] = useState('');

    const [nameValidation, setNameValidation] = useState('');
    const [lastNameValidation, setLastNameValidation] = useState('');
    const [emailValidation, setEmailValidation] = useState('');
    const [passwordValidation, setPasswordValidation] = useState('');
    const [checkPasswordState, setCheckPasswordState] = useState(0);
    const [checkPasswordColorState, setCheckPasswordColorState] = useState("red");
    const [phone, setPhone] = useState(props.obj.phone);
    const [phoneValidation, setPhoneValidation] = useState('');
    const [successStatus, setSuccessStatus] = useState('');

    const changeName = (e) => {
        setNameValidation("");
        setName(e.target.value);
    }

    const changeLastName = (e) => {
        setLastNameValidation("");
        setLastName(e.target.value);
    }

    const changeEmail = (e) => {
        setEmailValidation("");
        setEmail(e.target.value);
    }

    const changePassword = (e) => {
        setPasswordValidation("");
        setPassword(e.target.value);
        checkPassword(e.target.value);
    }

    const changePhone = (e) => {
        setPhone(e);
        setPhoneValidation("");
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

    const emailFetch = () => {
        
        if (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)) {
            fetch('http://web.webex.am/api/checkemail', {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email})
            }).then(res=>res.json())
            .then(res => setSuccessStatus(res.success));
        }

    }

    const sendRequest = () => {

        if (name === "") {
            setNameValidation("This feild is required");
        } else if (name.length < 2) {
            setNameValidation("Name must be 2 characters");
        } else if (lastName === "") {
            setLastNameValidation("This feild is required");
        } else if (lastName.length < 2) {
            setLastNameValidation("LastName must be 2 characters");
        } else if (email === "") {
            setEmailValidation("This feild is required");
        } else if (!new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)) {
            setEmailValidation("Please write email");
        } else if (successStatus === false) {
            setEmailValidation("This email is taken");
        } else if (phone === "") {
            setPhoneValidation("This feild is required");
        } else if (isValidPhoneNumber(phone) !== true) {
            setPhoneValidation("Write valid phone number");
        }  else if (password === "") {
            setPasswordValidation("This feild is required");
        } else if (password.length < 8) {
            setPasswordValidation("Password must be 8 characters");
        } else {
            let objNames = {name, last_name:lastName, email, phone, password};
            props.nextProps("two");
            props.set(objNames);
        }
    
    }

    return (
        <>
            <div className="form-title">
                <h2>Sign up</h2>
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
                    onChange={changeName}
                    value={name}
                />

                {
                    nameValidation !== '' ?
                        <FormHelperText style={{ color: "red" }} className={classes.textField}>
                            {nameValidation}
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
                    onChange={changeLastName}
                    value={lastName}
                />

                {
                    lastNameValidation !== '' ?
                        <FormHelperText style={{ color: "red" }} className={classes.textField}>
                            {lastNameValidation}
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
                    onChange={changeEmail}
                    onBlur={emailFetch}
                    value={email}
                />

                {
                    emailValidation !== '' ?
                        <FormHelperText style={{ color: "red" }} className={classes.textField}>
                            {emailValidation}
                        </FormHelperText> : ''
                }

                <PhoneInput
                    placeholder="Enter phone number"
                    value={phone}
                    displayInitialValueAsLocalNumber={false}
                    onChange={changePhone}
                />

                {
                    phoneValidation !== '' ?
                        <FormHelperText style={{ color: "red" }} className={classes.textField}>
                            {phoneValidation}
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
                    onChange={changePassword}
                />

                {
                    passwordValidation !== '' ?
                        <FormHelperText style={{ color: "red" }} className={classes.textField}>
                            {passwordValidation}
                        </FormHelperText> : ''
                }

                <div style={{ width: "230px" }}>
                    <Line percent={checkPasswordState} strokeWidth="4" strokeColor={checkPasswordColorState} id="strenght" />
                </div>

            </div>

            <div className="mt-5">

                <Button
                    variant="contained"
                    size="large"
                    id="buttonColor"
                    onClick={sendRequest}
                >
                    Next
                </Button>
            </div>

        </>
    )
}

export default SectionOne;