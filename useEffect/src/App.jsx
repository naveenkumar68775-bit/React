import React, { useMemo } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'



function App({number}) {
  const [count,setCount]=useState(0);

  const result=useMemo(()=>{
    return slow(number);
  },[number]);
  return (
    
    <div>
      <p>Result:{result}</p>
      <button onClick={()=>setCount(count+1)}>Count:{count}</button>
    </div>
  )
}

export default App;