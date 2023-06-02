import React, { useEffect, useState } from 'react'

function Home2() {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    function getCurrentDimension(){
        return{
            width : window.innerWidth,
            height : window.innerHeight
        }
  
    }

    useEffect(()=>{
        const updateDimension = () =>{
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize',updateDimension);

        return(()=>{
            window.removeEventListener('resize', updateDimension);
        })
    })
  
  
    return (


    <div className=''>
        <ul>
            <li>{screenSize.width}</li>
            <li>{screenSize.height}</li>
            </ul>
    </div>
  )
}

export default Home2