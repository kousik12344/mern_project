import React,{useState} from 'react'
import {Link} from "react-router-dom"
import style from "./Signup.module.css"


const Signup = () => {

  const [name,setname]=useState();
  const[email,setemail]=useState();
  const[password,setpassword]=useState();


  const onSubmit = async() =>
  {
    try{
      const sendSign = await fetch('http://localhost:3000/user/signup',{method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify({name,email,password})})
        const response = await sendSign.json();


        if(sendSign.ok){
          alert("Registration Successful");
        }else{
          alert("registration failed");
        }
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className={style.ful}>
       <div>
            <h1 className={style.hell}>Signup</h1>
            <div>
                <input type="name" name="name" id=" " placeholder="Enter Name" onChange={(e) => setname(e.target.value)}/>
                <br></br>
                <br></br>
                <input type="email" name="email" id=" " placeholder="Enter Email" onChange={(e) => setemail(e.target.value)}/>
                <br></br>
                <br></br>
                <input type="password" name="password" id=" " placeholder="Enter Password" onChange={(e) => setpassword(e.target.value)}/>
                <button onClick={onSubmit}>Signup</button>
            </div>
            <div>
                 <p>Already a user?<Link to="/" >Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Signup
