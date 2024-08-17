'use client'
import React, { useEffect } from 'react'

function page() {
  useEffect(() => {
    return localStorage.removeItem("token")
  },["token"])
  
}



export default page