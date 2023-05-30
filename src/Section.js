import React from 'react'
import './section.css'

function Section(props) {
  return (
   <section style={{backgroundImage:"url(/img/"+props.background+")"}}>
    <div className='modelName'>
      <h1>{props.name}</h1>
      <p>{props.tagline}</p>
    </div>
    <div className='cta'>
      <div className='buttons'>
        <a href='' className='cta_Left'>{props.leftBtn}</a>
        
        {props.rightBtn &&  <a href='' className='cta_Right'>{props.rightBtn}</a>}
      </div>
    </div>

   </section>
  
  )
}

export default Section