import React , {useState} from 'react'

const Form = () => {
  const [fullName , setfullName] = useState({
    fname:"",
    lname:"",
    email:"",
    phone:"",
    qua: "",
  });
  //const [name , setname] = useState("");
  // const [fn , setfn] = useState("");
  // const [lastName , setlastName] = useState("");
  // const [lnNew , setlnNew] = useState("");
    const inputEvent = (event) =>{
        console.log(event.target.value);
        console.log(event.target.name);
        // const value = event.target.value;
        // const name = event.target.name;

        const {value , name} = event.target;
        
        setfullName((prev) =>{

          return{
            ...prev,
            [name]: value,
          }
          //console.log(prev);
          // if(name === 'fName'){
          //   return{
          //   fname: value,
          //   lname: prev.lname,
          //   email: prev.email,
          //   phone: prev.phone,
          // }
          // } else if(name === 'lName'){
          //   return{
          //     fname: prev.fname,
          //     lname: value,
          //     email: prev.email,
          //     phone: prev.phone,
          //   }
          // }else if(name === 'phone'){
          //   return{
          //     fname: prev.fname,
          //     lname: prev.lname,
          //     email: prev.email,
          //     phone: value,
          //   }
          // }else if(name === 'email'){
          //   return{
          //     fname: prev.fname,
          //     lname: prev.lname,
          //     email: value,
          //     phone: prev.phone
          //   }
          // }
        });
       // setname(event.target.value);
    }
       
    const onSubmits = (e) =>{
        e.preventDefault();
      //setfn(name);
      //setlnNew(lastName);
      alert('Form Submitted')
    } 

    // const inputEvent2 = (event) =>{
    // setlastName(event.target.value)
    // }
  return (
    <>
    
   <div className='main_div'>
    <form onSubmit={onSubmits}>
    <div>
    {/* <h1>Hello {fn} {lnNew} </h1> */}
    <h1>Hello {fullName.fname} {fullName.lname}</h1>
    <p>{fullName.email} {fullName.phone}</p>
    <p>{fullName.qua}</p>
    <input
    type='text'
    placeholder='Enter your first name'
    name='fname'
    onChange={inputEvent}
    value={fullName.fname}
    />
    <br/>
    <input
    type='text' 
    placeholder='Enter your last name'
    name='lname'
    onChange={inputEvent}
    value = {fullName.lname}
    />
    <br/>

    <input
    type='email' 
    placeholder='Enter your emailid'
    name='email'
    onChange={inputEvent}
    value = {fullName.email}
    autoComplete='off'
    />
    <br/>

    <input
    type='number'
    placeholder='Enter your number'
    name='phone'
    onChange={inputEvent}
    value={fullName.phone}
    />
    <br/>
    <input
    type='text'
    placeholder='Enter your qualification'
    name='qua'
    onChange={inputEvent}
    value={fullName.qua}
    />
    
    {/* <button  onClick={onSubmits}>Submit Me 👍</button> */}
    <button type='submit'>Submit Me 👍</button>
    
    </div>
    </form>
    </div>
    </>
  )
}

export default Form;
