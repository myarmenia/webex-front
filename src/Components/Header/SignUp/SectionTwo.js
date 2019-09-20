import React, {useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';

function SectionTwo () {

	const [onlineState, setOnlineState] = useState(false);
	const [ofline, setOflineState] = useState(false);

	const checkOnline = () => {
		if (onlineState) {
			setOnlineState(false)
		} else {
			setOnlineState(true);
        }
	}

	const checkOfline = () => {
		if (ofline) {
			setOflineState(false)
		} else {
			setOflineState(true);
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