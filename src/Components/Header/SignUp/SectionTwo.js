import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

function SectionTwo(props) {

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
        onlineState ? props.nextProps("three") : props.nextProps("four");
        props.set({online: onlineState});
    }
    const goBack = () => {
        props.prevProps('one')
    }

    return (
        <div className="row justify-content-center">

            <div className="form-title">
                <h2>Hello {props.title.name}</h2>
            </div>

            Dear student, choose the type of learning:

            <div style={{ margin: "0 auto" }} className="mt-5">

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
                        id="buttonColor"
                        onClick={goBack}
                        style={{marginRight:'12px'}}
                    >
                        Prev
                    </Button>
                    <Button
                        variant="contained"
                        size="large"
                        //color="primary"
                        id="buttonColor"
                        onClick={onlineState||ofline ?goFunc:null}
                    >
                        Next
                    </Button>
                </div>

            </div>

        </div>
    )
}

export default SectionTwo;