import { useState, useEffect } from 'react'
import axios from 'axios'
import stadium from './assets/stadium.jpeg'

function App() {
  const [events, setEvents] = useState([])
  const url = import.meta.env.VITE_API_BASE_URL

  useEffect(()=>{
    axios.get(`${url}/events`)
    .then((response)=>{
      console.log(response.data)
      setEvents(response.data)
      
    })
    .catch((error)=>{
      console.log("error in fetching data from server",error)
    })
  },[url])

  return (
    <>
      <div className='flex h-screen relative '>
        <h1 className='left-4 text-4xl lg:text-6xl md:text-6xl md:text-center font-bold absolute top-6 text-center md:left-15 lg:top-4 lg:left-38'>Upcoming Basketball Events</h1>
        <div className='flex h-screen w-full overflow-hidden'>
          <div className='lg:w-1/4 hidden lg:block bg-contain bg-no-repeat' style={{backgroundImage:`url(${stadium})`, backgroundPosition:'center'}}>
          </div>

          <div className='mt-20 w-full lg:w-3/4 lg:mt-25 md:mt-30 p-2 px-10 overflow-y-auto'>
          {
            events.slice().reverse().map((item,index)=>(
            <div key={index} className='border mb-4 border-b border-white/20 bg-white/15 lg:mx-4 p-2 rounded-2xl'>
              <div className='flex gap-4 items-center mx-4 mb-1'>
                <h4 className='text-xl font-bold'>{item.league_name}</h4>
                <h4 className='text-lg font-light'>{item.league_season}</h4>
              </div>

              <div className='flex flex-col items-center px-10'>
                <div className='flex justify-between w-full py-2'>
                  <div className='w-2/12'>
                    <img className='w-10 h-10 rounded-full mb-1' src={item.event_home_team_logo} alt="home teamlogo" />
                    <h4 className='text-lg font-light p-1'>{item.event_home_team}</h4>
                  </div>

                  <div className='flex items-center justify-center w-2/12 '>
                    <p className='text-3xl font-extrabold italic  bg-gradient-to-r from-[#2370c9] to-[#c4375a] bg-clip-text text-transparent'>V/S</p>
                  </div>

                  <div className='flex flex-col items-end w-2/12'>
                    <img className='w-10 h-10 rounded-full mb-1' src={item.event_away_team_logo} alt="team logo" />
                    <h4 className='text-lg font-light p-1'>{item.event_away_team}</h4>
                  </div>
                </div>
              </div>

              <p className='flex justify-center items-center text-base font-light border-t border-white/20 pt-2 mx-10'>{item.event_date} at {item.event_time}</p>

              </div>
            ))
          }

        </div>
        </div>
        
      </div>
      
    </>
  )
}

export default App
