import React from 'react';
import logo from '../../img/logo.png';

const CopyRight=()=>{
    return(
    <section className="page_copyright ds ms s-bordertop-container s-py-20">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-12 text-center animate animated scaleAppear" data-animation="scaleAppear">
							<div className="mb-10">
								<a href="./" className="logo justify-content-center">
									<img src={logo} alt="" />
					 		</a>
							</div>
						</div>
						<div className="col-md-12 text-center animate animated scaleAppear" data-animation="scaleAppear">
							<p>© <span className="copyright_year">2005-{(new Date().getFullYear())}</span> WEBEX TECHNOLOGIES LLC </p>
						</div>
					</div>
				</div>
			</section>
            );
}
export default CopyRight