import React from 'react'
import Link from 'next/link'

function Header() {
  return (
  
    <div className='flex justify-around p-4'>
     <Link href="/register">register</Link>
     <Link href="/login">login</Link>
     <Link href="/logout">logout</Link>
     </div>
  
  )
}

export default Header