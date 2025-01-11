import React from 'react'
import { useState } from 'react'
import './Loginup.css'
import { Password } from '@mui/icons-material'

const account1={
  username: "john",
  pin: "1111",
}
const account2={
  username: "david",
  pin: "2222",
}
const account3={
  username: "carlos",
  pin: "3333",
}
const account4={
  username: "mathew",
  pin: "4444",
} 

const accounts = [account1, account2, account3, account4]
const LoginForm = () => {
  
  const [username, setusername] = useState("")
  const [pin, setpin] = useState("")
  const [error, seterror] = useState("")

  return (
    <div>
      <form className='sign-in-form' action=''>

        <label>Username
        <input type="text" value={username} />
        </label>

        <label>Password
        <input type="text" value={pin} />
        </label>
        <br />
        <button className='loginbtn' type='submit'>Login</button>
      <div className="error">{error && <div>{error}</div>}</div>
      </form>
    </div>
  )
}

export default LoginForm
