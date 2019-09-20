import React,{useState} from 'react';
import CountUp from 'react-countup';
import './styles.css'

const Count=()=>{
  const[scroll,setScroll]=useState(window.scrollY)

  const Scroll=()=>{
    setScroll(window.scrollY)
  }

  window.onscroll=()=>{
    setScroll(window.scrollY)
  }
    return(
     <div className='main'>
      <div className='flex_div'>
        {scroll>3200 ? <CountUp className='count' start={0} end={99} delay={0.3} /> : '' }
        <p className='name'>ՎԻԴԵՈԴԱՍԵՐ</p>
      </div> 
      <div className='flex_div bord'>
        {scroll>3200 ? <CountUp className='count' start={0} end={971} delay={0.3} /> : '' }
        <p className='name'>ՈՒՍԱՆՈՂՆԵՐ</p>
      </div>
      <div className='flex_div'>
        {scroll>3200 ? <CountUp className='count' start={0} end={10} delay={0.3} /> : '' }
        <p className='name'>ԾՐԱԳ. ԼԵԶՈՒՆԵՐ</p>
      </div>
     </div>
    )
}
export default Count