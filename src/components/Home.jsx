import React from 'react'
import { useState } from 'react'

export default function Home() {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [number,setNumber]=useState("");

    //to store the data

    const [formdata,setFormData]=useState({});
    const handleFormDataChange=(event)=>{
        setFormData({...formdata,[event.target.name]:event.target.value})
    }

    // const handleNameChange = (event) => {
    //     console.log(event.target.value)
    //     setName(event.target.value); // Correctly updating the state
    // };

    // const handleEmailChange = (event) => {
    //     console.log(event.target.value)
    //     setEmail(event.target.value); // Correctly updating the state
    // };
    // const handleNumberChange=(event)=>{
    //     console.log(event.target.value)
    //     setNumber(event.target.value);
    // }

    const Alert = () => {
        alert('Hello World');
    };
    
    
  return (
    <section>
        <div className='max-w-[80rem] w-full mx-auto'>
            <div className='grid grid-cols-1 md:mt-32'>
                <h1 className='text-3xl md:text-5xl font-semibold '>Welcome to <span className='font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent '>Neat Starter</span></h1>
                <p className='text-[12px] p-2'> NEAT Starter Template. Get Started by editing./ index.njk </p>
            </div>
        </div>
        <div className='max-w-[45rem] w-full mx-auto md:px-28 mt-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
                <div className='p-4 border rounded-sm text-left hover:border hover:border-purple-400 cursor-pointer'>
                <h1 className='text-1xl font-bold '>Netflify CMS →</h1>
                <p className='text-[12px] mt-2'>Open source content management for your Git workflow</p>
                </div>
                <div className='p-4 border rounded-sm text-left hover:border hover:border-purple-400 cursor-pointer'>
                <h1 className='text-1xl font-bold '>Netflify CMS →</h1>
                <p className='text-[12px]'>Open source content management for your Git workflow</p>
                </div>
                <div className='p-4 border rounded-sm text-left hover:border hover:border-purple-400 cursor-pointer'>
                <h1 className='text-1xl font-bold '>Netflify CMS →</h1>
                <p className='text-[12px]'>Open source content management for your Git workflow</p>
                </div>
                <div className='p-4 border rounded-sm text-left hover:border hover:border-purple-400 cursor-pointer'>
                <h1 className='text-1xl font-bold '>Netflify CMS →</h1>
                <p className='text-[12px]'>Open source content management for your Git workflow</p>
                </div>
                
            </div>
            <div className='h-screen flex justify-center items-center'>
                <button className='py-2 px-4 bg-blue-300 text-white ' onClick={Alert}> Click Me</button> 
            </div>
            <div>
                {/* <form onSubmit={(event)=>{event.preventDefault();console.log("gjhgjh")}}>
                    <input type='text' placeholder='F_name' value={name} onChange={handleNameChange}></input><br></br><br></br>
                    <input type='email' placeholder='E-mail' value={email} onChange={handleEmailChange}></input><br></br><br></br>
                    <input type='number' placeholder='mobile number' value={number} onChange={handleNumberChange}></input><br></br><br></br>
                    <button type='submit' value='Submit' >Submit</button>
                </form> */}
                <form onSubmit={(event)=>{event.preventDefault();console.log(formdata)}}>
                <input
                 type="text"
                 name="Name"
                 placeholder='name'
                 onChange={handleFormDataChange}
                /><br /><br />
      
                <input
                 type="email"
                 name='Email'
                 placeholder='Email'
                    onChange={handleFormDataChange}
                     /><br /><br />
      
                 <input
                 type="number"
                 name='Number'
                 placeholder='number'
                 onChange={handleFormDataChange}
                    /><br /><br />
      
                <button type="submit">Submit</button>
                 </form>

            </div>
        </div>
    </section>
  )
}
