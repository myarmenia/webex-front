import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
	
	container: {
	  display: "flex",
	  flexWrap: "wrap"
	},
	textField: {
	  marginLeft: theme.spacing(1),
	  marginRight: theme.spacing(1),
	},
	menu: {
	  width: 200
	},
	  cssLabel: {
		background: '#222a35',
		color: '#fff',
		'&$cssFocused':{
			color: '#fff ',
		},
	  },
	  cssOutlinedInput:{
		  borderColor: '#fff',
		  "&:hover $notchedOutline": {
			borderColor: "#fff" 
		  },
		'&$cssFocused $notchedOutline':{
			borderColor: "#fff",
			color: '#fff '
		},
	  },
	  notchedOutline:{
		  borderColor:'#888'
	  },
	  cssFocused: {},
  }));

const Field=()=>{
	const classes = useStyles();
	const [values, setValues] = React.useState({
	  name: "Name",
	  email: "",
	  message: "",
	});
	
	function send(){
		let name=document.getElementById('outlined-name').value
        let mail=document.getElementById('outlined-email-input').value
		let text=document.getElementById('outlined-textarea-input').value
		let message=document.getElementById('message')
		
		if(name.length==0 || mail.length==0 || text.length==0){
			message.innerHTML="lreacnel bolor dashter"
		}
		else if(name.length<4){
			message.innerHTML="naemi dashtum 4-ic voch pakas nish"

		}
		else{
			setValues({name:name,email:mail,message:text})
				   console.log(values)
			message.innerHTML="der namak@ ugharkvats e"
				   
		}
       
	}
return(
	<div className="form" id="form">
		{/* <form className={classes.container} novalidate  > */}
      <TextField
        id="outlined-name"
		label="Name"
        placeholder="Name"
        className={classes.textField}
        type="text"
		name="name"
		// halfWidth
        margin="normal"
		variant="outlined"
		InputLabelProps={{
            classes: {
			  root: classes.cssLabel,
			  focused: classes.cssFocused,
            },
		  }}
		  InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
      />
      <TextField
        id="outlined-email-input"
        label="Email"
        className={classes.textField}
        type="email"
		name="email"
	    // halfWidth
		margin="normal"
		variant="outlined"
		InputLabelProps={{
            classes: {
			  root: classes.cssLabel,
			  focused: classes.cssFocused,
            },
		  }}
		  InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
      />
	  <TextField
	  id="outlined-textarea-input"
              variant="outlined"
              rows="6"
            // fullWidth
			  label="Input Set"
              placeholder="Placeholder"
			  multiline
			  style={{width: '94%'}}
              className={classes.textField}
			  margin="normal"
			  InputLabelProps={{
				classes: {
				  root: classes.cssLabel,
				  focused: classes.cssFocused,
				},
			  }}
			  InputProps={{
				classes: {
				  root: classes.cssOutlinedInput,
				  focused: classes.cssFocused,
				  notchedOutline: classes.notchedOutline,
				},
			  }}
            />
				<div>
					<button onClick={send} type="submit" id="contact_form_submit" name="contact_submit" class="btn btn-maincolor">Send Message
										</button></div>
					<div id="message"></div>
					{/* </form> */}
				</div>
);
}
export default Field;