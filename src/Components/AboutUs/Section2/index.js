import React from 'react';
import Text from './Text';

function Section2 () {
    return (
        <section className="ls ms s-pt-30 s-pb-15 s-pt-lg-70 s-pb-lg-30 c-gutter-10 c-mb-20 category-section">
				<div className="container">
					<h2> Programming Languages </h2>
					<div className="row">
						{
							Text.map((item, index) => {
								return (
									<div className="col-lg-4 col-sm-6" key={index}>
										<div className="icon-box text-center">

											<div className="color-main icon-styled fs-77">
												<i className={`icon-m-${item.icon}`} aria-hidden="true"></i>
											</div>

											<h6 className="fw-700">
												<a href="single-course.html">{item.title}</a>
											</h6>

											<p>{item.description}</p>
										</div>

										{/* <div className="media-links">
											<a className="abs-link" title="" href="team-single.html"></a>
										</div> */}

									</div>
								)
							})
						}

						<div className="d-none d-lg-block divider-20"></div>
					</div>

				</div>
			</section>
    )
}

export default Section2;