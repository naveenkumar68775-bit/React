import React from 'react'
import { useParams } from 'react-router-dom'

const home = () => {
     const {name}=useParams();
  return (
   
    <div>
         {/* <Navbar/> */}
        <h1>HOME:{name}</h1>
    </div>
  )
}

export default home;