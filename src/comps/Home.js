import React from 'react'
import Mainbg from './Mainbg'
import Section1 from './Section1'
import Section2 from './Section2'

function Home() {
  return (
    <div className="homepage">
      <Mainbg />
      <Section1 />
      <Section2 />
    </div>  
  )
}

export default Home