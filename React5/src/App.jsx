import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const App = () => {
  const [count,setCount]=useState("");


  return(
    <div>
      <h1>{count}</h1>
      <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
    </div>
  )
}


export default App