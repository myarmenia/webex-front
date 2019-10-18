import React,{ useState, useEffect } from 'react';



const Pricing=()=>{
	const [coursesFront,setCoursesFront] = useState('');
	const [coursesFull,setCoursesFull] = useState('');
	const [coursesBack,setCoursesBack] = useState('');
    useEffect(()=>{
		getCourses();
    },[]);

    const getCourses=()=>{
        //setCourses(courses)
        fetch('http://web.webex.am/api/packages')
            .then((res)=>{
        	  if(res)return res.json()
           		 .then((data)=>{
					let f=null,b=null,fl=null;
					console.log(data.packages[0])
					for(let n=0;n<data.packages.length;n++){
                            if(data.packages[n].name==="Front"){

									f=data.packages[n];
									setCoursesFront(f);
							}
							else if(data.packages[n].name==="Full"){
								b=data.packages[n];
								setCoursesFull(b);
							}
							else if(data.packages[n].name==="Back"){
								fl=data.packages[n];
								setCoursesBack(fl);
							}
					}
			})
		}).catch((error)=>console.log(error, "getCourses"))
	
	}

	
	// console.log(coursesFront.courses, "coursesFront");
	// console.log(coursesFull, "coursesFull")
	// console.log(coursesBack, "coursesBack")


  const icons=["icon-m-user color-dark","icon-m-comment color-dark","fa fa-edit color-dark","fa fa-thumbs-o-up color-dark","icon-m-list-alt color-dark","fa fa-address-card-o color-dark","fa fa-envelope-open-o color-dark","fa fa-linode color-dark","fa fa-desktop color-dark","fa fa-thumbs-o-up color-dark"]


    return(
       <>
         <section className="ls s-pt-55 s-pb-35 s-pt-lg-95 s-pb-lg-75">
				<div className="container">
					<div className="divider-3"></div>
					<div className="row">
						<div className="col-12 text-center price-header">
							<h6 className="special-heading fw-300">Empower Yourself</h6>
							<h2>Select a Plan</h2>
							<p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
						</div>
						<div className="col-lg-4 col-12" >
							<div className="pricing-plan text-center text-lg-left bordered rounded" >
								<div className="plan-name text-center">
									<h3>
										Front End
									</h3>
								</div>
								<div className="price-wrap">
                                    <span className="plan-sign fw-900" style={{fontSize:'15px'}}>AMD</span>
									<span className="plan-price color-dark fw-900" style={{fontSize:'25px'}}>{coursesFront.price/coursesFront.mounth}</span>
									<span className="plan-decimals">/month</span>
								</div>
								<div className="plan-features">
									<ul>
										{
                                         coursesFront.courses?coursesFront.courses.map((item,index)=>{
											return (
												<li><i className={icons[index]}></i>{item.name}</li>
											)
										 }):''
										}
								
									</ul>
									<div className="plan-button text-center">
										<a href="#" className="btn btn-maincolor">Get Started</a>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-12" >
							<div className="pricing-plan text-center text-lg-left plan-featured rounded ds">
								<div className="plan-name text-center">
									<h3>
										Full Stack
									</h3>
								</div>
								<div className="price-wrap">		
                                    <span className="plan-sign fw-900" style={{fontSize:'15px'}}>AMD</span>
									<span className="plan-price color-dark fw-900" style={{fontSize:'25px'}}>{coursesFull.price/coursesFull.mounth}</span>
									<span className="plan-decimals">/month</span>
								</div>
								<div className="plan-features">
									<ul>
									{
                                         coursesFull.courses?coursesFull.courses.map((item,index)=>{
											return (
												<li><i className={icons[index]}></i>{item.name}</li>
											)
										 }):''
										}
									</ul>
									<div className="plan-button text-center">
										<a href="#" className="btn btn-maincolor">Get Started</a>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-12" >
							<div className="pricing-plan text-center text-lg-left bordered rounded">
								<div className="plan-name text-center">
									<h3>
										Back End
									</h3>
								</div>
								<div className="price-wrap">
									<span className="plan-sign fw-900" style={{fontSize:'15px'}}>AMD</span>
									<span className="plan-price color-dark fw-900" style={{fontSize:'25px'}}>{coursesBack.price/coursesBack.mounth}</span>
									<span className="plan-decimals">/month</span>
								</div>
								<div className="plan-features">
									<ul>
									{
                                         coursesBack.courses?coursesBack.courses.map((item,index)=>{
											return (
												<li><i className={icons[index]}></i>{item.name}</li>
											)
										 }):''
										}
									</ul>
									<div className="plan-button text-center">
										<a href="#" className="btn btn-maincolor">Get Started</a>
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