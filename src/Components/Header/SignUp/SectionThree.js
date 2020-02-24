import React from 'react';
import Button from "@material-ui/core/es/Button/Button";

function ThirdStep(props) {

    const frontFunc = (e) => {
        e.preventDefault();
        props.nextProps(e.target.textContent);
    }

    const fullFunc = (e) => {
        e.preventDefault();
        props.nextProps(e.target.textContent);
    }

    const backFunc = (e) => {
        e.preventDefault();
        props.nextProps(e.target.textContent);
    }
    const goBack = () => {
        props.prevProps('two')
    }


    return (
        <div className="row justify-content-center">

            <div className="form-title">
                <h2>Sign up</h2>
            </div>

            <div className="col-md-10">
                <div className="filters course-filters text-lg-right">

                    <a href="#" style={{ color: "#222a35", cursor: "pointer", fontSize: "20px" }}
                        onClick={frontFunc}>
                        Front End
                    </a>

                    <a href="#" style={{ color: "#222a35", cursor: "pointer", fontSize: "20px" }}
                        onClick={fullFunc}>
                        Full Stack
                    </a>

                    <a href="#" style={{ color: "#222a35", cursor: "pointer", fontSize: "20px" }}
                        onClick={backFunc}>
                        Back End
                    </a>

                </div>

                <p>
                    Webex Technologies provides 2 ways of online education.
                    You can choose packages that we’ve made or choose your own courses.
                    Choose the package or courses
                </p>
                <div className="mt-5">
                    <Button
                        variant="contained"
                        size="large"
                        id="buttonColor"
                        onClick={goBack}

                    >
                        Prev
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default ThirdStep;