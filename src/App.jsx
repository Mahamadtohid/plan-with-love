import { useState } from 'react'
import Tours from './components/Tours'
import data from './data.js'
import './App.css'

function App () {
  const [tours, setTours] = useState(data)

  function removeCard(id){

    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours);
        
    }

    if(tours.length === 0){
      return(
        <div className='refresh'>
          <h1>No Tours Left</h1>
          <button className="btn-white" onClick={() => setTours(data)}>Refresh</button>
        </div>
      )
    }

  return (
    <div className="app">

      <Tours tours={tours}  removeCard = {removeCard}/>
      
    </div>
  )
};

export default App
