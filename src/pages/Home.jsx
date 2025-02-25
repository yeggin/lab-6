import React from 'react'
import InputForm from '../components/InputForm'
import Highlights from '../components/Highlights'
import LatestEvents from '../components/Events'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home">
        
        <Highlights />
        <LatestEvents />
        <InputForm />
        
      
    </div>
  )
}

export default Home
