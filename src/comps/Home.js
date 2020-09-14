import React from 'react'
import Mainbg from './Mainbg'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'

function Home(props) { 
  return (
    <div className="homepage">
      <Mainbg />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>  
  )
}

export default Home