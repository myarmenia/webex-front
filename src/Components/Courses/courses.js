import React, {Component} from 'react';

 let lessons = require('../../language.json');
// $("#portfolio-flters li").click(function () {
//     $("#portfolio-flters li").removeClass('filter-active');
//     $(this).addClass('filter-active');

//     var selectedFilter = $(this).data("filter");
//     $("#portfolio-wrapper").fadeTo(100, 0);

//     $(".portfolio-item").fadeOut().css('transform', 'scale(0)');

//     setTimeout(function () {
//       $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
//       $("#portfolio-wrapper").fadeTo(300, 1);
//     }, 300);
//   });


class Courses extends Component {
state={
  clas:''
}


  filter=(e)=>{
    e.preventDefault();
    const arr=document.getElementsByClassName('col')
    const type=e.target.getAttribute('data-filter')
    for(var i=0; i<arr.length; i++){
    let k=arr[i].getAttribute('class').split(' ')

    // let k=arr[1].getAttribute('class').split(' ')
    let p=k[k.length-1]
    let k1="."+p
    // console.log(k[k.length-1])
    // console.log(type)
    console.log(k1)
    

    if(type==k1){
      console.log('ok')
      this.setState({clas: p})
    console.log(this.state)
    }
  }
    // .map(index=>{
    //   console.log(map.length)
    // })

    console.log(e.target.getAttribute('data-filter'),"aaaaaaaaaaa")
    // arr.map(index=>{
    //   if(index.hasClass(type)){
    //     console.log('ok')
    //   }
    // })
    
        }
  render() {
    
    const zangvats=lessons.map(function(arjeq,index){
      return (
  //  <div key={index} className="col-12 col-md-6 col-lg-4 popular">
   <div key={index} className={`col col-12 col-md-6 col-lg-3 ${arjeq.class}`}>
      
    
                  <div className="course-flip h-100 ">
                    <div className="course-front rounded bordered">
                      <div className=" vertical-item content-padding">
                        <div className="item-media rounded-top">
                          {/* <div>{arjeq.name}</div> */}
                        {/* <img src={require(`./images/${++index}.jpg`)} alt="" /> */}
                        {/* <video width="320" height="240" controls>
	                        <source id="ss"  src={arjeq.video} type="video/mp4" />	
	                          <span class="vjs-control-text">Սկսել</span>
                            src={require(`${arjeq.video}`)}
                          
                        </video> */}
                        </div>
                        <div className="item-content">
                          <h6 className="course-title">
                            <a href="single-course.html" > {arjeq.name} </a>
                          </h6>
                            <p>Lessons: {arjeq.lessons}</p>
                        <p>Duretion: {arjeq.duretion}</p>
{/* 
                          <div className="star-rating course-rating">
                            <span>3:10</span>
                          </div> */}

                          {/* <div className="tagcloud">
                            <a href="#" className="tag-cloud-link">
                              Technology
                            </a>
                            <a href="#" className="tag-cloud-link">
                              Humanities
                            </a>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="course-back rounded vertical-item content-padding ds">
                      <div className="item-content">
                        <h6 className="course-title">
                          <a href="single-course.html">{arjeq.name}</a>
                        </h6>
                        <p>
                         {arjeq.description}
                        </p>
                        {/* <div className="star-rating course-rating">
                          <span style={{color: '#fff'}}>3:10</span>
                        </div> */}
                        <div className="divider-48"></div>
                        <a href="#" className="btn btn-maincolor">Start now</a>
                        {/* <div className="tagcloud">
                          <a href="#" className="tag-cloud-link">
                            Technology
                          </a>
                          <a href="#" className="tag-cloud-link">
                            Humanities
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                
  
   
  </div>

      )
    });

   return (
    <section className="ls s-pt-55 s-pb-30 s-pt-lg-95 s-pb-lg-70" id="courses">
        <div className="container">
        <div className="row">
        <div className="col-lg-12">
        <h6 class="special-heading fw-300 text-center">Empower Yourself</h6>
    <h2 class="text-center">Popular courses</h2>
    <div class="row justify-content-center">
		 						<div class="col-md-10 col-xl-7">
		 							<div class="filters course-filters text-lg-right">
		 								<a href="" data-filter="*" class="active selected" onClick={(e)=>{this.filter(e)}}>Full</a>
		 								<a href="" data-filter=".popular" onClick={(e)=>{this.filter(e)} }>Most Popular</a>
		 								<a href="" data-filter=".resent" onClick={(e)=>{this.filter(e)}}>Most Recent</a>
		 								{/* <a href="#" data-filter=".certified">Most Certified</a> */}
		 							</div>
		 						</div>
		 					</div>
        <div className="row isotope-wrapper c-mb-30" data-filters=".course-filters">
         {zangvats}
      </div>
      </div>
      </div> 
      </div>
      </section>


      
    );
  }
    }
export default Courses;