import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import CustomPaginationActionsTable from '../Payment';
import { tsImportEqualsDeclaration } from '@babel/types';
import './p.css';

 let lessons = require('../../language.json');
class Courses extends Component {
state={
  clas:'',
  filter:3,
  course1: []
}
componentDidMount() {
  fetch('http://web.webex.am/api/courses')
    .then(response => response.json())
    .then(data => { 
      console.log(data,"dataaaaaaa")
      this.setState({ course1: data.courses }) }); 
    console.log(this.state.course1,"stateeeeeeee")
}
  f3=(e)=>{
    const arr = document.querySelector('.course-filters');
    const arr1= document.querySelector('#course');
    for(let j=0; j<arr1.children.length; j++){

      if(j%2==0 && j>4){ 
        arr1.children[j].style.transform='scale(0)'
      arr1.children[j].style.left="-100px"
      arr1.children[j].style.top="-100px"
      let p=arr1.children[j]
        setTimeout(function () {
          p.style.transition='0.1s'
         p.style.left="0px"
          p.style.top="0px"
       p.style.transform='scale(1)' 
        }, 300);
      }
      else if(j%2==0 && j<4){ 
        arr1.children[j].style.transform='scale(0)'
      arr1.children[j].style.left="100px"
      arr1.children[j].style.top="100px"
      let p=arr1.children[j]
        setTimeout(function () {
          p.style.transition='0.1s'
         p.style.left="0px"
          p.style.top="0px"
       p.style.transform='scale(1)'
        }, 400);
      }
      else{
        arr1.children[j].style.transform='scale(0)'
      arr1.children[j].style.left="100px"
      arr1.children[j].style.top="100px"
      let p=arr1.children[j]
      setTimeout(function () {
        p.style.transition='0.1s'
       p.style.left="0px"
        p.style.top="0px"
     p.style.transform='scale(1)'
      }, 300);
    }
    }
    e.preventDefault();
    for(let i = 0; i<arr.children.length; i++){
     arr.children[i].classList.remove('active');
    }
    e.target.classList.add('active');
    const data=e.target.getAttribute('data-filter')
    
    this.setState({filter: +data})
        }
  render() {
    const {course1,filter}=this.state
    console.log(filter,"yessssssss")
   //course1.length?console.log(course1[0],"yessssssss"):console.log(course1,"nooooooooooooo")
   const a=course1?course1.map((arjeq,ind) =>{
     return arjeq.packages.filter(e=>e.id===filter).map((ev,index)=>{
              
              return( 
                <div key={index} className={`col col-12 col-md-6 col-lg-3 ${this.state.filter}`}>
                    
                                <div className="course-flip h-100 ">
                                  <div className="course-front rounded bordered">
                                    <div className=" vertical-item content-padding">
                                      <div className="item-media rounded-top">
                                      </div>
                                      <div className="item-content">
                                        <h6 className="course-title">
                                          {arjeq.name} 
                                          </h6>
                                          <p>Lessons: {arjeq.lessons_count}</p>
                                      <p>Duretion: 28:58</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="course-back rounded vertical-item content-padding ds">
                                    <div className="">
                                      <h6 className="course-title" style={{"paddingTop": "14px"}}>
                                        {arjeq.name}
                                      </h6>
                                      <p>
                                     {lessons[ind]?lessons[ind].description1:''}
                                      </p>
                                      <div className="divider-32"></div>
                                      <a href="#" className="btn btn-maincolor">Start now</a>
                                    </div>
                                  </div>
                                </div>
                </div>
                    
                
              
              
              )
  })
}):null
    // const a=course1.map((arjeq)=>{

    //   let r=arjeq.packages.filter(e=>e.id===filter);
    //   return(<p>{r.name}</p>)
    
    // })
//const k=this.state.course1
//console.log(k.courses[0])
    
  //   const zangvats=this.state.course1.filter(e=>this.state.filter === "a" ? true : e.class===this.state.filter).map((arjeq,index) =>{
  //     return (
  //  <div key={index} className={`col col-12 col-md-6 col-lg-3 ${this.state.filter}`}>
      
  //                 <div className="course-flip h-100 ">
  //                   <div className="course-front rounded bordered">
  //                     <div className=" vertical-item content-padding">
  //                       <div className="item-media rounded-top">
  //                       </div>
  //                       <div className="item-content">
  //                         <h6 className="course-title">
  //                            {arjeq.name} 
  //                            </h6>
  //                           <p>Lessons: {arjeq.lessons}</p>
  //                       <p>Duretion: {arjeq.duretion}</p>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="course-back rounded vertical-item content-padding ds">
  //                     <div className="">
  //                       <h6 className="course-title" style={{"paddingTop": "14px"}}>
  //                         {arjeq.name}
  //                       </h6>
  //                       <p>
  //                        {arjeq.description1}
  //                       </p>
  //                       <div className="divider-32"></div>
  //                       <a href="#" className="btn btn-maincolor">Start now</a>
  //                     </div>
  //                   </div>
  //                 </div>
  // </div>
  //     )
  //   });

   return (
    //  <Router>
    <section className="ls s-pt-55 s-pb-30 s-pt-lg-95 s-pb-lg-70" id="courses">
        <div className="container">
        <div className="row">
        <div className="col-lg-12">
        <h6 class="special-heading fw-300 text-center">
        <Link to='/Payment'  style={{ padding: 10 }} >
                        click
                    </Link>
                    
        Empower Yourself</h6>
    <h2 class="text-center">Popular courses</h2>
    <div className="row justify-content-center">
		 						<div className="col-md-10 col-xl-7">
		 							<div className="filters course-filters text-lg-right">
		 								<a href="" data-filter="3" class="active selected" onClick={this.f3}>Full Stack</a>
		 								<a href="" data-filter="1" onClick={this.f3 }>Front End</a>
		 							  <a href="" data-filter="2" onClick={this.f3}>Back End</a>
		 							</div>
		 						</div>
		 					</div>
        <div className="row isotope-wrapper c-mb-30" data-filters=".course-filters" id="course" style={{'text-align':'center'}}>
         {/* {zangvats} */}
         {a}
      </div>
      </div>
      </div> 
      </div>
      </section>
      // </Router>
    );
  }
    }
export default Courses;