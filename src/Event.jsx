import React,{useState} from 'react';

const Event = () => {
  const purple = "#8e44ad";
  const [bg , setbg] = useState(purple);
  const [name , setname] = useState("Click Me");

    const bgChange = () =>{
        //console.log('clicked')
   let newBg = "#34495e";
   setbg(newBg);
   setname('Hello! 💯');
    }

    const bgBack = () =>{
    setbg(purple);
    setname('Click Me 😠');
    };
  return (
    <>
    <div style={{backgroundColor : bg}}>
        <button onMouseEnter={bgChange}  onMouseLeave = {bgBack}>{name}</button>
    </div>  
    </>
  )
}

export default Event;

