import React,{Component} from 'react';
const advantage=[
    {
        title:'Պրոֆեսիոնալ դասավանդում',
        icon:'book',
        text:'Մեզ մոտ դասերը ընթանում են մշակված ծրագրով և մշտապես թարմացվում են` ներառելով իրենց մեջ նորամուծությունները և նոր լուծումները։ Դասընթացը անց ենք կացնում վիդեոդասերի միջոցով` ցուցաբերելով անհատական մոտեցում։'
    },
    {
        title:'Բարձրակարգ մասնագետներ',
        icon:'users',
        text:'Մեր մասնագետները մինչև 15 տարվա փորձ ունեն և գործող վեբ ծրագրավորողոներ են։ Նրանք համբերատար կբացատրեն ծրագրավորման նրբությունները և կապացուցեն Ձեզ, որ ծրագրավորման մեջ ոչ մի դժվար բան չկա։'
    },
    {
        title:'Անհատական մոտեցում',
        icon:'laptop',
        text:'Մեր առավելությունը նրանում է, որ ուսանողին ցուցաբերում ենք  անհատական մոտեցում։Հաշվի առնելով ուսանողի կարողությունները, մշակում ենք դասավանդման անհատական ծրագիր՝ ուսուցումն ավելի մատչելի դարձնելու համար։'
    },
    {
        title:'Վիդեոդասեր',
        icon:'microphone',
        text:'Մենք փորձում ենք մեր դասերը մատչելի դարձնել բոլորի համար՝ ուստի ստեղծել ենք առցանց ծրագրավորում սովորելու հնարավորություն: Այսպիսով՝ ուսանողներին հնարավորություն է ընձեռվում սովորելու ցանկացած վայրում և ցանկացած ժամի։'
    },
    {
        title:'Սերտիֆիկատ',
        icon:'certificate',
        text:'Դասերի վերջում տրվում է սերտիֆիկատ, որը հավաստում է, որ Դուք որակավորված մասնագետ եք՝ սակայն պետք է հիշել, որ ինֆորմացիոն տեխնոլոգիաների ոլորտում կարևորը գիտելիքն է։'
    },
    {
        title:'Աշխատանքի տեղավորում',
        icon:'thumbs-up',
        text:'Webex-ը օժանդակում է ուսանողներին տեղավորվել աշխատանքի՝ մեզ մոտ կամ գործընկեր կազմակերպություններում։ Ամեն դեպքում՝ ամեն ինչ կախված է ձեզանից, քանի որ աշխատանքի ընդունվելուց առաջ ուսանողները պետք է անցնեն հարցազրույց։'

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
                        <p style={{textAlign:'left'}}>
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
							<h3 className="text-center">Մեր առավելությունները</h3>
                            <h6 style={{marginTop:'20px',color:'#6c757d'}} className="special-heading fw-300 text-center">
                            Webex Technologies-ի դասընթացները ունեն մի շարք առավելություններ, որոնք դարձնում են դասերը մաքսիմալ էֆեկտիվ և հասանելի ուսանողներին։ 
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