import React from 'react';
import './styles.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '100%',
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  }));

function Registration () {
    const classes = useStyles();

    return (
        <section className="ls s-pt-60 s-pb-60 s-py-lg-100 c-gutter-50 about-section text-center text-lg-left container-px-lg-0">
        <div className="container">
        <p className="circle" >2</p>
            <div className="row align-items-center">
                <div className="col-12 col-lg-7 registration">
                    <div className="item-content" >
                        <section className="flex_container-1">
                            <div className="left_section">
                                <section class="flex_container-1_1 regist">
                                    <div>
                                        <h6 className="title">Name:</h6>
                                        <p>Tigran</p><hr />
                                    </div>
                                    <div>
                                        <h6 className="title">Surname:</h6>
                                        <p>Batoyan</p><hr />
                                    </div>
                                </section>
                                <section class="flex_container-1_2 regist">
                                    <div>
                                        <h6 className="title">Email:</h6>
                                        <p>jhvchj@mail.ru</p><hr />
                                    </div>
                                    <div>
                                        <h6 className="title">Point:</h6>
                                        <p>20</p><hr />
                                    </div>
                                </section>
                            </div>
                            <div className="col-12 col-lg-5 right_section">
                                    <div className="about-image second">
                                        <img src={require('../../img/about_us/first.jpg')} alt="" />
                                    </div>
                                    <div className="divider-30 d-block d-lg-none"></div>
                            </div>
                        </section>
                        <section class="flex_container-3 regist">
                            <div>
                                <TextField
                                    id="standard-password-input"
                                    label="Facebook"
                                    className={classes.textField}
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                />
                            </div>
                            <div>
                                <TextField
                                    id="standard-password-input"
                                    label="LinkedIn"
                                    className={classes.textField}
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                />
                            </div>
                            <div>
                                <TextField
                                    id="standard-password-input"
                                    label="GitHub"
                                    className={classes.textField}
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                />
                            </div>
                            <div>
                                <TextField
                                    id="standard-password-input"
                                    label="Slack"
                                    className={classes.textField}
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                />
                            </div>
                        </section>
                        <div className="d-none d-lg-block divider-35"></div>
                        <div className="row c-gutter-25">
                            <div className="divider-15 d-block d-lg-none"></div>
                            
                            <div className="col-md-6">
                                <a href="#" className="btn btn-maincolor">Get Started</a>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Registration;