import React from 'react';

function Section4 () {
    return (
		<section className="mb-5 ds ms s-pt-60 s-pb-20 s-pt-lg-125 s-pb-lg-130 c-gutter-100 c-mb-40 c-mb-md-0 video-section text-center text-md-left">
				<div className="cover-image s-cover-left" id="videoImage"><a href="https://www.facebook.com/webexarmenia/videos/1203152783118985?sfns=mo" className="embed-placeholder"></a></div>
				<div className="container">
					<div className="divider-45 d-none d-lg-block"></div>
					<div className="row align-items-center">
						<div className="col-md-6">
							<div className="item-media post-thumbnail">
								<div className="embed-responsive embed-responsive-3by2">
									<a href="https://www.facebook.com/webexarmenia/videos/1203152783118985?sfns=mo" className="embed-placeholder" data-gal="">
										{/* <img src="images/video-image.jpg" alt="" /> */}
										<img src={require(`../../img/about_us/nikol.jpg`)} />
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="item-content">
								{/* <h6 className="special-heading fw-300">Personable Virtual Assistants</h6> */}
								<h2>Our advantages</h2>
								<div className="d-none d-lg-block divider-38"></div>
								<p className="mt-20" style={{justifyContent: "center"}}>
									Our specialists have up to 15 years of experience. 
									They will patiently explain the subtleties of programming and prove to you that there is nothing difficult in programming. 
									To make the teaching material more comprehensive, each student will be given an individual approach. 
									And that's why the groups are made up of a maximum of 6 people. We try to make our lessons accessible to everyone, and so we have created the opportunity for everyone to study online. Thus, students are given the chance to study anywhere and anytime they want. 
									At the end of the course the students will receive a certificate certifying that they are a professional.
								</p>
								<div className="d-none d-lg-block divider-43"></div>
							</div>
						</div>
					</div>
					<div className="divider-40 d-none d-md-block"></div>
				</div>
			</section>
    )
}

export default Section4;