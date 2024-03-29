import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as AboutIcon } from '../resources/icons8-about.svg'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import User from '../components/User'

function AllUsers() {
  const { allUsers, addUser } = useContext(UserContext)
  window.history.pushState(null, null, window.location.href)
  window.onpopstate = function () {
    window.history.go(1)
  }
  return (
    <>
      <div className='container'>
        <header>
          <h1>Random API</h1>
          <Link
            to='/about'
            target='_blank'
            rel='noopener noreferrer'
            onClick={() => setTimeout(() => window.close(), 5000)}
          >
            <AboutIcon className='' />
          </Link>
        </header>
        <div>
          <button className='btn-lg' onClick={addUser}>
            fetch random user
          </button>
          <div>
            {allUsers.map((user) => (
              <User singleUser={user} key={user.registered.date} />
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default AllUsers
