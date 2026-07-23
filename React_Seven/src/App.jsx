import React, { useContext, useEffect, useState } from 'react'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import {MyStore} from './context/MyContext'


const App = () => {

  // let {count , setCount} = useContext(MyStore);

   const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);


    useEffect(()=>{
      console.log("use Effect Called");
    },[toggle])
  

  return (
    <div>
      <h1>My value : {count}</h1>
      <button onClick={()=> setCount(count -1)}>Click Decrement Me</button>

      <button className=' ' onClick={()=> setCount((prevCount)=> prevCount + 1)}>Click Increment Me</button>
      <button onClick={()=> setToggle((prev)=> !prev)}>toggle</button>
      
      <Home/>
      <Contact/>
      <About/>
    </div>
  );
};

export default App;