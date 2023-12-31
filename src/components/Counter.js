import React, { Component, useEffect, useState } from "react";



function Counter(props) {
  const [count,setCount] = useState(props.count)
  const [text,setText] = useState(props.text)

  useEffect(()=>{
    console.log('componentDidMount, componentDidUpdate')
  })
  useEffect(()=>{
    console.log('componentDidMount')
  },[])
  useEffect(()=>{
    console.log('count')
  },[count])
  useEffect(()=>{
    console.log('text')
  },[text])

  return (
    <div className="container mt-3">
      <p>Button pressed {count} times.</p>
      <p>Text: {text} </p>
      <button onClick={() => setCount(count+1)} className="btn btn-primary me-1">
        +1
      </button>
      <button onClick={() => setCount(count-1)} className="btn btn-primary me-1">
        -1
      </button>
      <button onClick={() => setCount(props.count)} className="btn btn-primary me-1">
        Reset
      </button>
      <input type="text" value={text} onChange={(e) => { setText(e.target.value) }}/>
    </div>
  );
}

Counter.defaultProps = 
{
  count:5, text:'merhaba'
}

export default Counter;
