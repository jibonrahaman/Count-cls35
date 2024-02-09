import { useState } from 'react'
import { FaMinusCircle } from 'react-icons/Fa';
import { BsPlusCircleFill } from 'react-icons/Bs';


function App() {
  const [count,setCount] = useState(0)

  const handleClick = ()=>{
    setCount(count+1)

  }
  const handleDown=()=>{
    setCount(count-1) 
    if(count==0){
      setCount(0)
    }else(false)
  }

 const [resetCount, setresetCount] = useState(0);
  
   const handleReset = () => {
    setCount(resetCount);
   };


  // function isDisabled() {
  //   return count <= 0;
  // }

  return (
    <>
   
 <article className='Hello'>
<div className='count'>
<p className='p'>COUNT</p>
 <h1 className='h1'>{count}</h1>
</div>

 <button type='button' onClick={handleClick} disabled={count==6? true : false} >+</button>
 <button type='button'  onClick={handleDown}    > - </button>
 <button type='button' onClick={handleReset}> Reset </button>
 </article>
    </>
  )
}

export default App
