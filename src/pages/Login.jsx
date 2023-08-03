import React from 'react'
import '../styles/Login.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'
const Login=()=> {
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const[_,setCookies]=useCookies(["access_token"])
    const nav=useNavigate();
    const submit=async()=>{
        try {
            const res=await axios.post('https://mernbackend-94fp.onrender.com/auth/login', { username, password })
            console.log(res);
            if(res.data.msg==="User doesn't exists" || res.data.msg==="Incorrect Password"){
                    nav('/error')
            }else{
            setCookies("access_token",res.data.token);
            console.log(res.data.UserID);
            console.log(_);
            nav('/');
            window.localStorage.setItem("UserId",res.data.userID)
            }
            
        }
        catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <section id="cart-section">
                <div className="container">
                    <div className="row">
                        <div className="cart cart2">
                            <div style={{ zIndex: 1 }} className="column">
                                <div className="top-area ">
                                    <p>about us</p>
                                    <p>terms & conditions</p>
                                    <p>security</p>
                                </div>
                                <div className="log-in-area column">
                                    <h2>Log in</h2>
                                    <label className="column" htmlFor=""> USER NAME
                                        <input type="text" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                                    </label>
                                    <label className="column" htmlFor=""> PASSWORD
                                        <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                                    </label>

                                </div>
                                <div className="button-area column"><button onClick={submit}>Log in</button>
                                    <div className="account-area">
                                        <p>Don't have account?<Link className="none" to='/register'>Sign up here</Link></p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            
            </section>
        </div>
    )
}

export default Login
