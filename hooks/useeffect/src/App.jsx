import React, { useEffect, useState } from 'react'

const App = () => {
  const [width, setWidth] = useState(300)
    useEffect(()=>{
      setTimeout(() => {
        setWidth(600)
      }, 600);
    },[])
  return (
    <div
    style={{
      width:`${width}px`,
      height:"200px",
      backgroundColor:"red",
      transition:"width 1s"
    }}
    >

      <p>this is para</p>
    </div>
  )
}

export default App
