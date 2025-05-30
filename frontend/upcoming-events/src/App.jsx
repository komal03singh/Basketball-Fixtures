import { useState, useEffect } from 'react'
import axios from 'axios'
import stadium from './assets/stadium.jpeg'

function App() {
  const [events, setEvents] = useState([])

  useEffect(()=>{
    axios.get('/api/events')
    .then((response)=>{
      setEvents(response.data || [])
    })
    .catch((error)=>{
      console.log("error in fetching data from server",error)
    })
  },[])

  return (
    <>
      <div className='flex h-screen relative '>
        <h1 className='left-4 text-4xl lg:text-6xl md:text-6xl md:text-center font-bold absolute top-6 text-center md:left-15 lg:top-4 lg:left-38'><span className='text-[#f3efe6]'>Upcoming</span> Basketball Events</h1>
        <div className='flex h-screen w-full overflow-hidden'>
          <div className='lg:w-1/4 hidden lg:block bg-contain bg-no-repeat' style={{backgroundImage:`url(${stadium})`, backgroundPosition:'center'}}>
          </div>

          <div className='mt-20 w-full lg:w-3/4 lg:mt-25 md:mt-30 p-2 px-10 overflow-y-auto'>
          {
            events.slice().reverse().map((item,index)=>(
            <div key={index} className='border mb-4 border-b border-white/20 bg-white/15 lg:mx-4 p-2 rounded-2xl'>
              <div className='flex gap-4 items-center mx-4'>
                <h4 className='text-xl font-bold'>{item.league_name}</h4>
                <h4 className='text-lg font-light'>{item.league_season}</h4>
              </div>

              <div className='flex flex-col items-center px-4'>
                <div className='flex justify-between w-full p-2'>
                  <div>
                    <img className='w-12 h-12 rounded-full' src={item.event_home_team_logo} alt="home teamlogo" />
                    <h4 className='text-lg font-light p-1'>{item.event_home_team}</h4>
                  </div>
                  <div className='flex items-center'>
                    <p className='text-2xl font-extrabold italic  bg-gradient-to-r from-[#2370c9] to-[#c4375a] bg-clip-text text-transparent'>V/S</p>
                  </div>
                  <div className='flex flex-col items-end'>
                    <img className='w-12 h-12 rounded-full' src={item.event_away_team_logo} alt="team logo" />
                    <h4 className='text-lg font-light p-1'>{item.event_away_team}</h4>
                  </div>
                </div>
              </div>
              <p className='flex justify-center items-center text-base font-light border-t border-white/20 pt-2 mx-6'>{item.event_date} at {item.event_time}</p>

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
