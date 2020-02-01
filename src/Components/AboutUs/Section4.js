import React from 'react';

function Section4 () {
    return (
		<section className="mb-5 ds ms s-pt-60 s-pb-20 s-pt-lg-125 s-pb-lg-130 c-gutter-100 c-mb-40 c-mb-md-0 video-section text-center text-md-left">
				<div className="cover-image s-cover-left" id="videoImage">
				<a href="https://www.facebook.com/webexarmenia/videos/1203152783118985?sfns=mo" className="embed-placeholder" target="_blank"></a></div>
				<div className="container">
					<div className="divider-45 d-none d-lg-block"></div>
					<div className="row align-items-center">
						<div className="col-md-6">
							<div className="item-media post-thumbnail">
								<div className="embed-responsive embed-responsive-3by2">
									<a href="https://www.facebook.com/webexarmenia/videos/1203152783118985?sfns=mo" className="embed-placeholder" data-gal="">
										<img src={require(`../../img/about_us/nikol.jpg`)} />
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="item-content">
								<h3>Մեր դասավանդման նպատակն է սերտել ուժեղ մասնագետներ</h3>
								<div className="d-none d-lg-block divider-38"></div>
								<p className="mt-20" style={{justifyContent: "center"}}>
								Այդ նպատակով ուսանողներին տրվում է պրակտիկ ծրագրավորման գիտելիքներ՝ անհատական մոտեցումով, 15 տարվա փորձ ունեցող վեբ ծրագրավորողների կողմից, որոնք համբերատար կերպով կբացատրեն ծրագրավորման բոլոր նրբությունները և ձեզ կապացուցեն, որ ծրագրավորման մեջ ոչ մի դժվար բան չկա: Մենք փորձում ենք մեր դասերը մատչելի դարձնել բոլորի համար, ուստի  ստեղծել ենք առցանց ծրագրավորում  սովորելու հնարավորություն: Այսպիսով, ուսանողներին հնարավորություն է ընձեռվում սովորելու ցանկացած վայրում և ցանկացած ժամի ամենաբարդ ծրագրավորման ալգորիթմները: 
Դասընթացի ավարտին ուսանողները կստանան սերտիֆիկատ, որը հավաստում է, որ ուսանողը հանդիսանում է որակավորված  վեբ ծրագրավորող:
Այս տեսահոլովակում ներկայացված են մեր ուսանողների մեկնաբանությունները Webex Technologies ընկեերության դասընթացների մասին։
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