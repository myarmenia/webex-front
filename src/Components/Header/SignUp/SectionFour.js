import React from 'react';

function SectionFour() {
    return (
        <div className="mt-3">

            <div className="form-title">
                <h2>Dear student</h2>
            </div>

            <img src={require(`../../../img/smiling.png`)} />
            <p className="mt-2">
                Congratulations! You’ve passed the registration for stationary education in Webex.
                For account verification please follow the link.
            </p>
        </div>
    )
}

export default SectionFour;