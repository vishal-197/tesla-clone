
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Weather() {

    const [input, setInput] = useState("")
    const [weather,setWeather] = useState("")

    function handleChnge(e){
      setInput(e.target.value)

    }
    function handleSubmit(e){
      e.preventDefault()
      return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=bd0c43ee99b01cb3a172b6207a105e22`).then((result)=>{
          console.log(result)
          setWeather(result.data)

        })
    }

    function countryFlag(){
      return weather.sys.country.toLowerCase();
    }
    

    
  return (
    <>
    <div className='weather_main'>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='search here' value={input} onChange={handleChnge}/>
        <button>Search</button>
        </form>
        </div>
   {weather ?(
     <div className='weather_result'>

     <h4>{weather.name} <img src={`https://flagcdn.com/24x18/${countryFlag()}.png`}></img></h4>
     <p>{weather.main.temp}</p>
   </div>
    ):("")}


    </>
  )
}

export default Weather