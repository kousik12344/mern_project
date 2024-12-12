import React,{useState} from 'react'
import {Link} from "react-router-dom"
import style from "./Login.module.css";

  

const Login = () => {

 
  const[email,setemail]=useState();
  const[password,setpassword]=useState();


  const onLogins = async(e) =>{
    e.preventDefault()
    try{
      const sendLogin = await fetch(`http://localhost:3000/user/login`,{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify({email,password})
      })
        const response = await sendLogin.json();


        if(sendLogin.ok){
          alert("Login Successful");
          console.log(response)
        }else{
          alert("Uer not failed");
        }
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className={style.full}>
        <div>
            <h1 className={style.hello}>Login</h1>
            <div>
                <input type="email" name="email" id=" " placeholder="Enter Email"  onChange={(e) => setemail(e.target.value)}/>
                <br></br>
                <br></br>
                <input type="password" name="password" id=" " placeholder="Enter password" onChange={(e) => setpassword(e.target.value)} />
                <br></br>
                <br></br>
                <button onClick={onLogins}>Login</button>
            </div>
            <div>
                 <p>dont have  an acoount?<Link to="/signup" >Signup</Link></p>
            </div>
        </div>
      
    </div>
  )
}

export default Login
