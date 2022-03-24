import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import { FaTrash } from 'react-icons/fa'

function User({ singleUser }) {
  const { deleteUser } = useContext(UserContext)
  const { first, last } = singleUser.name
  const { thumbnail } = singleUser.picture
  const { date } = singleUser.registered
  const userId = singleUser.appId
  return (
    <>
      <div className='singleUser' key={userId}>
        <p className='userDate'>{date}</p>
        <p className='userName'>{`${first} ${last}`}</p>
        <img className='userImage' src={thumbnail} alt='' />
        <button className='deleteBtn' onClick={() => deleteUser(date)}>
          <FaTrash />
        </button>
      </div>
    </>
  )
}

export default User
