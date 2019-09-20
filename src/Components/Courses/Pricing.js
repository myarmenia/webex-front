import React from 'react';


const Pricing=()=>{
    return(
       <>
         <section class="ls s-pt-55 s-pb-35 s-pt-lg-95 s-pb-lg-75">
				<div class="container">
					<div class="divider-3"></div>
					<div class="row">
						<div class="col-12 text-center price-header">
							<h6 class="special-heading fw-300">Empower Yourself</h6>
							<h2>Select a Plan</h2>
							<p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
						</div>
						<div class="col-lg-4 col-12">
							<div class="pricing-plan text-center text-lg-left bordered rounded">
								<div class="plan-name text-center">
									<h3>
										Front End
									</h3>
								</div>
								<div class="price-wrap">
                                    <span class="plan-sign fw-900" style={{fontSize:'15px'}}>AMD</span>
									<span class="plan-price color-dark fw-900" style={{fontSize:'25px'}}>50.000</span>
									<span class="plan-decimals">/month</span>
								</div>
								<div class="plan-features">
									<ul>
										<li><i class="icon-m-user color-dark"></i>HTML/CSS</li>
										<li><i class="icon-m-comment color-dark"></i>BootStrap</li>
										<li><i class="fa fa-edit color-dark"></i>JavaScript/jQuery</li>
										<li><i class="fa fa-thumbs-o-up color-dark"></i>ECMAScript</li>
										<li><i class="icon-m-list-alt color-dark"></i>React/Redux</li>
									</ul>
									<div class="plan-button text-center">
										<a href="#" class="btn btn-maincolor">Get Started</a>
									</div>
								</div>
							</div>
						</div>

						<div class="col-lg-4 col-12">
							<div class="pricing-plan text-center text-lg-left plan-featured rounded ds">
								<div class="plan-name text-center">
									<h3>
										Full Stack
									</h3>
								</div>
								<div class="price-wrap">		
                                    <span class="plan-sign fw-900" style={{fontSize:'15px'}}>AMD</span>
									<span class="plan-price color-dark fw-900" style={{fontSize:'25px'}}>50.000</span>
									<span class="plan-decimals">/month</span>
								</div>
								<div class="plan-features">
									<ul>
										<li><i class="icon-m-user color-dark"></i>HTML/CSS</li>
										<li><i class="icon-m-comment color-dark"></i>JavaScript/jQuery</li>
										<li><i class="fa fa-edit color-dark"></i>React Js</li>
										<li><i class="fa fa-thumbs-o-up color-dark"></i>PHP/MySQL</li>
										<li><i class="icon-m-list-alt color-dark"></i>Laravel</li>
									</ul>
									<div class="plan-button text-center">
										<a href="#" class="btn btn-maincolor">Get Started</a>
									</div>
								</div>
							</div>
						</div>

						<div class="col-lg-4 col-12">
							<div class="pricing-plan text-center text-lg-left bordered rounded">
								<div class="plan-name text-center">
									<h3>
										Back End
									</h3>
								</div>
								<div class="price-wrap">
									<span class="plan-sign fw-900" style={{fontSize:'15px'}}>AMD</span>
									<span class="plan-price color-dark fw-900" style={{fontSize:'25px'}}>50.000</span>
									<span class="plan-decimals">/month</span>
								</div>
								<div class="plan-features">
									<ul>
										<li><i class="icon-m-user color-dark"></i>PHP</li>
										<li><i class="icon-m-comment color-dark"></i>MySQL</li>
										<li><i class="fa fa-edit color-dark"></i>Laravel</li>
										<li><i class="fa fa-thumbs-o-up color-dark"></i>.htaccess</li>
										<li><i class="icon-m-list-alt color-dark"></i>GitHUB</li>
									</ul>
									<div class="plan-button text-center">
										<a href="#" class="btn btn-maincolor">Get Started</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
       </>
    )
}
export default Pricing;