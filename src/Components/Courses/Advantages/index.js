import React,{Component} from 'react';
const advantage=[
    {
        title:'Professional Teaching',
        icon:'book',
        text:'At the end of the course you will receive a certificate certifying that you are a professional, but it’s important to remember that knowledge in the field of information technology is important.'
    },
    {
        title:'Highly qualified specialists',
        icon:'users',
        text:'Our specialists have up to 15 years of experience. They will patiently explain the subtleties of programming and prove to you that there is nothing difficult in programming.'
    },
    {
        title:'Individual teaching',
        icon:'laptop',
        text:'To make the teaching material more comprehensive, each student will be given an individual approach. And that\'s why the groups are made up of a maximum of 6 people.'
    },
    {
        title:'Online video games',
        icon:'microphone',
        text:'We try to make our lessons accessible to everyone, and so we have created the opportunity to study online, however, in order to get a good result you need to study stationary.'
    },
    {
        title:'Certificate',
        icon:'certificate',
        text:'At the end of the course you will receive a certificate certifying that you are a qualified professional, but it’s important to remember that knowledge in the field of information technology is important.'
    },
    {
        title:'Recruitment',
        icon:'thumbs-up',
        text:'Webex helps students find jobs with us or with partner organizations. In any case, it all depends on you, because students need to be interviewed before hiring.'
    },

]
class Advantages extends Component{
    
    render(){
        const advantages=advantage.map((item,index)=>{
            return(
                <div className="col-lg-4" data-animation="fadeInUp" key={index}>
                    <div className="icon-box text-center">
                        <div className="color-main icon-styled fs-77">
                            <i style={{fontSize:'50px'}} className={`fa fa-${item.icon}`} aria-hidden="true"/>
                        </div>
                        <h6 className="fw-700" style={{display:'block'}}>
                            <a>{item.title}</a>
                        </h6>
                        <p>
                        {item.text}
                        </p>
                    </div>
                </div>
            )
        })
        return(
            <section className="ls s-pt-60 s-pb-10 s-pt-lg-100 s-pb-lg-30 c-gutter-10 c-mb-20 category-section" id="categories">
				<div className="container">
					<div className="row">
                    <div className="col-12">
							<h3 className="text-center">Our advantages</h3>
                            <h6 style={{marginTop:'20px',color:'#6c757d'}} className="special-heading fw-300 text-center">
                            Our specialists have up to 15 years of experience. They will patiently explain the subtleties of programming and prove to you that there is nothing difficult in programming.

                            </h6>
					</div>
						<div className="divider-10 d-none d-lg-block"/>
						{advantages}
					</div>		           
                </div>
			</section>
         )
    }
   
}
export default Advantages;