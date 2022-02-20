import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Homepage = () => {
  const [form,setForm]=useState("")
  const navigate=useNavigate()
  const handleChange=(e)=>{
      e.preventDefault()
      const {value,name}=e.target;
      setForm({...form,[name]:value})
      console.log("change",form)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const {value,name}=e.target;
        setForm({...form,[name]:value})
        console.log("submit",form)
        const {uname,password}=form
        if((uname==="dharmesh") && (password==="123456")){
          // console.log("first")
          navigate('/operator')
        }else{
          alert("Invalid Credentials")
        }
        
}
  return (
    <div>
          <h1>Operator Vehicle Management </h1>     
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                  <label>Username</label>
                  <input type="text" name='uname' placeholder='Enter Username' onChange={handleChange}/>
            </div>
            <div>
                  <label>Password</label>
                  <input type="text" name="password" placeholder='Enter Password' onChange={handleChange}/>
            </div>
            <div>
                <button>login</button>
            </div>
            </form>
          </div>
    </div>
  )
}

export default Homepage