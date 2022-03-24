import React from 'react'
import { createContext, useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  // states
  const [randomApiUsers, setRandomApiUsers] = useState([])

  // fetch function
  const fetchRandom = async () => {
    let next = 0
    next += 1
    try {
      await axios.get(`https://randomuser.me/api/?page${next}`).then((res) => {
        const { results } = res.data
        const id = results[0].registered.date
        localStorage.setItem(id, JSON.stringify(results))
        const localMemory = JSON.parse(localStorage.getItem(id))
        setRandomApiUsers([...randomApiUsers, localMemory[0]])

        if (res.status === 200) {
          toast.success('✔😊 success', {
            autoClose: 200,
            hideProgressBar: true,
          })
        }
      })
    } catch (error) {
      toast.error('error fetching random user')
    }
  }

  // Add random user
  const handleClick = useCallback(() => {
    fetchRandom()
  }, [randomApiUsers])

  // update state when loading
  useEffect(() => {
    const arr = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      const value = JSON.parse(localStorage.getItem(key))
      const temp = { ...value }
      arr.push(temp[0])
    }
    setRandomApiUsers(arr)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // remove random user
  const handleDelete = (id) => {
    setRandomApiUsers(
      randomApiUsers.filter((useArr) => useArr.registered.date !== id)
    )
    localStorage.removeItem(id)
    toast.warning('Shame! You deleted a user', {
      autoClose: 200,
      hideProgressBar: true,
    })
  }
  return (
    <UserContext.Provider
      value={{
        allUsers: randomApiUsers,
        addUser: handleClick,
        deleteUser: handleDelete,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
