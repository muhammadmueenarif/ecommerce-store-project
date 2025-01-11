import React from 'react'
import { useState } from 'react'
import './Loginup.css'

const account1={
  username: "john",
  pin: 1111, //pin is stored in number, if use "1111" it will be string and we get error while login. 
}
const account2={
  username: "david",
  pin: 2222,
}
const account3={
  username: "carlos",
  pin: 3333,
}
const account4={
  username: "mathew",
  pin: 4444,
} 

const accounts = [account1, account2, account3, account4]
const LoginForm = () => {
  
  const [username, setusername] = useState("")
  const [pin, setpin] = useState("")
  const [error, seterror] = useState("")

  const handlesubmit = (event) => {
    // to stop page refresh everytime when btn clicked use prevent.
    event.preventDefault();
    //below method to find data works in same way as we find from array.
    const matchingaccount = accounts.find((account)=> account.username === username 
    && account.pin === Number(pin))
    if(matchingaccount){
      seterror("You have been loggedin successfully")
    } else {
      seterror("Invalid Username or PIN")
    }
  }

  const valuehandler = (event)=> {
    setusername(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handlesubmit} className='sign-in-form' action=''>

      {/*without using value handler function we are not able to write something in input  */}
        <label>Username
        <input type="text" value={username} onChange={valuehandler}/>
        </label>

        <label>Password
        <input type="text" value={pin} onChange={(event)=> setpin(event.target.value)}/>
        </label>
        <br />
        <button className='loginbtn' type='submit'>Login</button>
      <div className="error">{error && <div>{error}</div>}</div>
      </form>
    </div>
  )
}

export default LoginForm
