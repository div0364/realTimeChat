import React from 'react'
import Search from './Search'
import Users from './User'

const Left = () => {
  return (
    <div className='w-[30%]  border-white bg-black text-white'>Left
    <h1 className='font-bold text-3xl p-2 px-11'>Chats</h1>
    <Search></Search>
    <hr></hr>
    <Users></Users>
    </div>
  )
}

export default Left