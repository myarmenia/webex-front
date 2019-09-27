import React,{Component} from 'react';
const advantage=[
    {
        title:'Պրոֆեսիոնալ Դասավանդում',
        icon:'book',
        text:'Դասերը անց են կացվում տարիների ընթացքում մշակված ծրագրով և մշտապես թարմացվում են, ներառելով իրենց մեջ նորամուծությունները և նոր լուծումները։'
    },
    {
        title:'Բարձրակարգ մասնագետներ',
        icon:'users',
        text:'Մեր մասնագետները մինչև 15 տարվա փորձ ունեն։ Նրանք համբերատար կբացատրեն ծրագրավորման նրբությունները և կապացուցեն Ձեզ, որ ծրագրավորման մեջ ոչ մի դժվար բան չկա։ '
    },
    {
        title:'Անհատական դասավանդում',
        icon:'laptop',
        text:'Դասավանդման նյութը ավելի հասկանալի դարձնելու համար ամեն ուսանողին կցուցաբերվի անհատական մոտեցում։ Եվ հենց այդ պատճառով է, որ խմբերը կազմված են առավելագույնը 6 հոգուց:'
    },
    {
        title:' Օնլյան Վիդեոդասեր ',
        icon:'microphone',
        text:'Մենք փորձում ենք դարձնել դասերը հասանելի բոլորին, և այդ պատճառով էլ հնարավորություն ենք ստեղծել սովորել օնլայն, ինչևիցե, լավ արդյունք ստանալու համար անհրաժեշտ է սովորել ստացիոնար։'
    },
    {
        title:'Սերտիֆիկատ',
        icon:'certificate',
        text:'Դասերի վերջում տրվում է սերտիֆիկատ, որը հավաստում է, որ Դուք որակավորված մասնագետ եք, սակայն պետք է հիշել, որ ինֆորմացիոն տեխնոլոգիաների ոլորտում կարևորը գիտելիքն է։'
    },
    {
        title:'Աշխատանքի տեղավորում ',
        icon:'thumbs-up',
        text:'Webex-ը օժանդակում է ուսանողներին տեղավորվել աշխատանքի մեզ մոտ կամ գործընկեր կազմակերպություններում։ Ամեն դեպքում ամեն ինչ կախված է ձեզանից, քանի որ աշխատանքի ընդունվելուց առաջ ուսանողները պետք է անցնեն հարցազրույց։ '
    },

]
class Advantages extends Component{
    
    render(){
        const advantages=advantage.map((item,index)=>{
            return(
                <div class="col-lg-4" data-animation="fadeInUp" key={index}>
                    <div class="icon-box text-center">
                        <div class="color-main icon-styled fs-77">
                            <i style={{fontSize:'50px'}} class={`fa fa-${item.icon}`} aria-hidden="true"></i>
                        </div>
                        <h6 class="fw-700" style={{display:'block'}}>
                            <a href="single-course.html">{item.title}</a>
                        </h6>
                        <p>
                        {item.text}
                        </p>
                    </div>
                    <span class="media-links">
                        <a class="abs-link" title="" href="course-categories.html"></a>
                    </span>
                </div>
            )
        })
        return(
            <section class="ls s-pt-60 s-pb-10 s-pt-lg-100 s-pb-lg-30 c-gutter-10 c-mb-20 category-section" id="categories">
				<div class="container">
					<div class="row">
                    <div class="col-12">
							<h3 class="text-center">ՄԵՐ ԱՌԱՎԵԼՈՒԹՅՈՒՆՆԵՐԸ</h3>
                            <h6 style={{marginTop:'20px',color:'#6c757d'}} class="special-heading fw-300 text-center">Webex-ի դասընթացները ունեն մի շարք առավելություններ,որոնք դարձնում են դասերը մաքսիմալ էֆեկտիվ և հասանելի ուսանողներին։</h6>
					</div>
						<div class="divider-10 d-none d-lg-block"></div>
						{advantages}
					</div>		           
                </div>
			</section>
         )
    }
   
}
export default Advantages;