import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import './styles.css'

const Count = () => {
  const [scroll, setScroll] = useState(window.scrollY)
  const [top, setTop] = useState(0)
  useEffect(()=>{
    detectTop();


  },[])

  window.onscroll = () => {
    setScroll(window.scrollY)
   // console.log(scroll)
  }

 
 function detectTop(){
    let elem=document.getElementById("count")
    setTop(elem.offsetTop)
    console.log(elem?elem.offsetTop:1000,"toooo" )
}
  return (
    <div className='main' id="count">
      <div className='flex_div'>
        <p className='name'>ՎԻԴԵՈԴԱՍԵՐ</p>
        {scroll > top-500 ? <CountUp className='count' start={1} end={99} delay={0.2} /> : ''}
      </div>
      <div className='flex_div bord'>
        <p className='name'>ՈՒՍԱՆՈՂՆԵՐ</p>
        {scroll > top-500 ? <CountUp className='count' start={1} end={971} delay={0.2} /> : ''}
      </div>
      <div className='flex_div'>
        <p className='name'>ԾՐԱԳ. ԼԵԶՈՒՆԵՐ</p>
        {scroll > top-500 ? <CountUp className='count' start={1} end={10} delay={0.2} /> : ''}
      </div>
    </div>
  )
}
export default Count;