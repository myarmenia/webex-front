import React, {useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

function SectionTwo (props) {

	const [onlineState, setOnlineState] = useState(false);
	const [ofline, setOflineState] = useState(false);

	const checkOnline = () => {
		if (onlineState) {
            setOflineState(true);
			setOnlineState(false)
		} else {
            setOnlineState(true);
            setOflineState(false)
        }
	}

	const checkOfline = () => {
		if (ofline) {
            setOflineState(false);
            setOnlineState(true);
		} else {
            setOflineState(true);
            setOnlineState(false);
		}
    }

    const goFunc = () => {
        if (onlineState) {
            props.nextProps("three")
        } else {
            alert("Congratulations! You’ve passed the registration for stationary education in Webex. For account verification please follow the link. ")
        }
    }

    return (
        <div className="row justify-content-center">

            <div style={{margin: "0 auto"}} className="mt-5">

                <Checkbox
                    checked={onlineState}
                    onChange={checkOnline}
                    color="primary"
                    inputProps={{
                        'aria-label': 'secondary checkbox',
                    }}
                />
                <label className="form-check-label agree" htmlFor="agree">Online</label>

                <Checkbox
                    checked={ofline}
                    onChange={checkOfline}
                    color="primary"
                    inputProps={{
                        'aria-label': 'secondary checkbox',
                    }}
                />
                <label className="form-check-label" htmlFor="updates">Stationary</label>

                <div className="mt-5">
                    <Button 
                        variant="contained" 
                        size="large" 
                        color="primary" 
                        onClick={goFunc}
                    >	
                    Next
                    </Button>
                </div>

            </div>
            
        
            {/* <div className="col-md-10">
                <div className="filters course-filters text-lg-right">

                    <a href="#" style={{color: "#222a35", cursor: "pointer"}} onClick={frontClick}>
                        Front End
                    </a>

                    <a href="#" style={{color: "#222a35", cursor: "pointer"}} onClick={fullStack}>
                        Full Stack
                    </a>

                    <a href="#" style={{color: "#222a35", cursor: "pointer"}} onClick={backClick}>
                        Back End
                    </a>

                </div>
            </div> */}

		</div>
    )
}

export default SectionTwo;