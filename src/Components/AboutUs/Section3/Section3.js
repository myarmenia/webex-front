import React from 'react';
import Text from './Text';

function Section3 () {
    return (
		<section className="ls s-pt-60 s-pb-10 s-pt-lg-100 s-pb-lg-50 c-mb-45">
		<div className="container">
			<h2> Our Team </h2>
			<div className="row">

				{/* <div className="col-md-4 col-sm-6">
					<div className="vertical-item text-center">
						<div className="item-media rounded">
							<img src={require(`../../img/about_us/first.jpg`)} alt="" />
							<div className="media-links">
								<a className="abs-link" title="" href="team-single.html"></a>
							</div>
						</div>
						<div className="item-content">
							<h6 className="title-content">
								<a href="team-single.html">Jessica T. Stratton</a>
							</h6>
							<p className="position">
								Autor courses
							</p>
							<p className="social-icons">
								<a href="#" className="fa fa-facebook" title="facebook"></a>
								<a href="#" className="fa fa-instagram" title="instagram"></a>
								<a href="#" className="fa fa-youtube-play" title="youtube"></a>
							</p>
						</div>
					</div>
				</div> */}

				{
					Text.map((item, index) => {
						return (
							<div className="col-md-4 col-sm-6" key={index}>
								<div className="vertical-item text-center">
									<div className="item-media rounded">
										<img src={require(`../../../img/about_us/${item.img}`)} alt="" />
										<div className="media-links">
											<a className="abs-link" title="" href={item.href}></a>
										</div>
									</div>
									<div className="item-content">
										<h6 className="title-content">
											<a href={item.href}>{item.name}</a>
										</h6>
										<p className="position">
											{item.position}
										</p>
										<p className="social-icons">
											<a href={item.facebook} className="fa fa-facebook" title="facebook"></a>
											<a href={item.instagram} className="fa fa-instagram" title="instagram"></a>
											<a href={item.vk} className="fa fa-youtube-play" title="youtube"></a>
										</p>
									</div>
								</div>
							</div> 
						)
					})
				}

				
			</div>
		</div>
	</section>
    )
}

export default Section3;