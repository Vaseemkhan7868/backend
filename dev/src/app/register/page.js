'use client'
import React, {  useState } from 'react'


function page() {
   const [name, setName] = useState('')
   const [age, setAge] = useState('')

   
   const registerUser = async(e) => {
    // console.log(name,age)
    e.preventDefault();
    let data = await fetch('api/db' , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name,age}),
      });
      data = await data.json()
      console.log(data)
      
      if(data.success){
      //  alert("register is successfull")
      console.log("register is successfull")
       setName('')
        setAge('')
      }else{
        alert("register is failed")
      }
      
     
   }



  return (
    <> <div className='p-8'>
    <h2>Register Page</h2> <br />
   <form action="" > 
   <input type="text" name='name' placeholder='Enter your name'  onChange={(e)=>setName(e.target.value)} value={name}/> <br /><br />

   <input type="text" name='age' placeholder='Enter your age' onChange={(e)=>setAge(e.target.value)} value={age}/> <br /> <br />

   <button type='sumbit' onClick={registerUser}>Register Now</button>
   </form>
   </div>
    </>
  )
}

export default page