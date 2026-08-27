import React from 'react'

const Home = ({name  , greet}) => {
    console.log("Home rendering .");
    
  return (
    <div className='my-3 bg-slate-500 text-white p-4 text-xl'>Home</div>
  )
}

export default React.memo(Home , (prevProps , nextProps)=>{
    return prevProps.name.id === nextProps.name.id;
});