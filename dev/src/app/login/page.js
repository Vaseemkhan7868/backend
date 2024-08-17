'use client'
import React, { useState } from 'react'
import { setCookie ,getCookie } from "cookies-next";


function page() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')


    const registerUser = async(e) => {
        e.preventDefault();
        let data = await fetch('/api/login' , {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name,age}),
          });
          data = await data.json()
          console.log(data)
          
          if(data.success){
          console.log("Login is successfull")
          localStorage.setItem("token",data.token)
          setCookie("jwt" ,data.token)
           setName('')
            setAge('')
          }else{
            alert("login is failed")
          }
          // let v = localStorage.getItem("token")
          // console.log("the v " ,v)
          let token = data.token;
        //  console.log("the token ",tokens)
             }

  return (
    <> <div className='p-8'>
    <h2>Login Page</h2> <br />
   <form action="" > 
   <input type="text" name='name' placeholder='Enter your name'  onChange={(e)=>setName(e.target.value)} value={name}/> <br /><br />

   <input type="text" name='age' placeholder='Enter your age' onChange={(e)=>setAge(e.target.value)} value={age}/> <br /> <br />

   <button type='sumbit' onClick={registerUser}>Login Now</button>
   </form>
   </div>
    </>
  )
}



export default page

export let token ;




