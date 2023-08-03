import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'
import axios from "axios"

const Register = () => {
    const nav=useNavigate();
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const submit = async () => {
        try {
            const res=await axios.post('https://mernbackend-94fp.onrender.com/auth/register', { username, password })
            console.log(res.data.msg)
            if(res.data.msg==="User already exists"){
                nav('/signuperror')
            }
            else{
                alert("Registration completed")
                nav('/')
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
                                    <h2>Sign Up</h2>
                                    <label className="column" for="">  SET USERNAME
                                        <input type="text" value={username} onChange={(e) => { setusername(e.target.value) }} />
                                    </label>
                                    <label className="column" for=""> SET PASSWORD
                                        <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                                    </label>

                                </div>
                                <div className="button-area column"><button onClick={submit}>Create Account</button>
                                    <div className="account-area">
                                        <p>Already have an account?<Link className="none" to='/login'>Login here</Link></p>
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

export default Register