import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Firstpage = () => {
    const [username,setusername] = useState("")
    const [email,setemail] = useState("")
    const handelsubmit = (e) =>{
        e.preventDefault()
        if(username==="" || email ===""){
            alert("all the fields are required")
        }
        else {
            fetch(`http://localhost:3001/data`,{
                method:"POST",
                body:JSON.stringify({
                    name:username,
                    email:email,
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            })
        }

    }
  return (
    <div className='App'>
        <form onSubmit={handelsubmit}>
            <input type="text"  onChange={(e)=>{setusername(e.target.value)}} /> <br />
            <input type="text"  onChange={(e)=>{setemail(e.target.value)}}/><br />
            <button onClick={()=>{
                <Link to="/Secondpage"/>
            }}>next</button>
        </form>
    </div>
  )
}

export default Firstpage