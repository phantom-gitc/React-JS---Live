import React from 'react'

const About = () => {

    console.log("About rendering .");
    
  return (
    <div className='my-3 bg-slate-500 text-white p-4 text-xl'>About</div>
  )
}

export default React.memo(About);