import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo'
import ThidStep from './thirdStep';

function SignUp() {

	const [next, setNext] = useState("one");
	const [nextTwo, setNextTwo] = useState(false);

	const nextFunc = (e) => {
		setNext(e);
	}

	const nextTwoFunc = (e) => {
		setNext(e);
	}

	let p1 = "";

	const change = () => {
		// if (next) {
		// 	p1 = <SectionTwo />
		// } else {
		// 	p1 = <SectionOne nextProps={nextFunc} />
		// }

		// if (nextTwo && next) {
		// 	p1 = <ThidStep /> 
		// } else {
		// 	p1 = <SectionTwo nextProps={nextTwoFunc} />
		// }

		if (next === "one") {
			p1 = <SectionOne nextProps={nextFunc} />
			//p1 = <ThidStep />
		} else if (next === "two"){
			p1 = <SectionTwo nextProps={nextTwoFunc} />
		} else if (next === "three") {
			p1 = <ThidStep />
		} 
	}

	change();
	
	const text = "Dear student, choose the type of learning:";

	return (
		<div className="sigin-form text-center show" id="form2" tabIndex="-1" role="dialog" aria-labelledby="formsign" style={{ paddingRight: "15px", display: "block" }}>
			<div className="modal-dialog ls">
				<div className="modal-content">

					<div className="modal-header">
						<Link to="/signin" className="btn btn-maincolor btn-login">Sign In</Link>
						<h6 className="modal-title" id="formsign">Sign Up</h6>
					</div>

					<div className="modal-body">
						<div className="form-title">
							<h2>Sign up</h2>
						</div>

						{next ? text : null}

						{p1}
						{/* {next ? <SectionTwo /> : <SectionOne nextProps={nextFunc} /> }

						{nextTwo ? <ThidStep /> : <SectionTwo nextProps={nextTwoFunc} />} */}

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