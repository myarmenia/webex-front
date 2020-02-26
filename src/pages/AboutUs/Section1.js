import React from 'react';
import Button from '@material-ui/core/Button';

function Section1 () {
    return (
        <section className="ls s-pt-60 s-pb-60 s-py-lg-100 c-gutter-50 about-section text-center text-lg-left container-px-lg-0">
        <div className="container">
        <div className="row">
        <div className="col-lg-12">
            <h2 className="text-center"> Օնլայն և ստացիոնար դասընթացներ </h2>
            <h3 className="special-heading fw-300 text-center" style={{'margin':'0'}}>Մեր մասին</h3>
            <div className="row align-items-center">
                <div className="col-12 col-lg-5">
                    <div className="about-image">
                        <img src={require('../../img/about_us/nikol.jpg')} alt="" />
                    </div>
                    <div className="divider-30 d-block d-lg-none"></div>
                </div>
                <div className="col-12 col-lg-7">
                    <div className="item-content">
                        <div className="d-none d-lg-block divider-35"></div>
                        <div className="row c-gutter-25">
                            <div className="divider-15 d-block d-lg-none"></div>
                            <div className="col-md-12 mb-20">
                                <p className="color-dark">
                                Webex Technologies ընկերությունը  սկսել է իր գործունեություն 2007թ․-ին: 
Ժամանակի ընթացքում մեք մշակել են վեբ դասավանդման/web development training/ յուրահատուկ մեթոդիկա, որի շնորհիվ մեր ուսանողները ձեռք են բերել  վեբ ծրագրավորման հիմնավոր գիտելիքներ: 
Մենք ներկայացնում ենք դասավանդման երեք փուլ՝  Full Stack, Front end, Back end: Նախքան փուլերից մեկը ընտրելը մենք զրուցում ենք մեզ դմող ուսանողների հետ, իմանլով նրանց նպատակը վեբ ծրագրավորման մասնագիտացման մեջ՝ խորհուրդ ենք տալիս, նախընտրելի ծրագրավորման դասընթացների մասնագիտական փուլը։
Webex Technologies ընկերությունը առաջարկում է մեր ուսանողներին ընտրելու դասավանդման օնլայն կամ ստացիոնար դասընթացներից մեկը։

                                </p>
                            </div>
                            <div className="col-md-6">
                                <h6 className="fw-700">
                                Օնլայն դասընթաց
                                </h6>
                                <p style={{marginBottom: "0px"}}>
                                Օնլայն դասընթացի առավելությունն այն է, որ դուք գտնվերով աշխարհի ցանկավցած երկրում կարող եք սովորել վեբ ծրագրավորում։
                                </p>
                                <a href="/signup" className="btn btn-maincolor mt-4">Get Started</a>
                            </div>
                            <div className="col-md-6">
                                <h6 className="fw-700">
                                Ստացիոնար դասընթաց
                                </h6>
                                <p style={{marginBottom: "0px"}}>
                                Ստացիոնար դասընթացի առավելությունն այն է, որ դուք սովորում եք անհատական, ծրագրավորողի անմիջական հսկողությամբ։
                                </p>
                                <a href="/signup" className="btn btn-maincolor mt-4">Get Started</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    </section>
    )
}

export default Section1;