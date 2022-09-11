import React, {useEffect, useState} from 'react'
import './Login.css'
import AmazonLogo  from '../BannerImages/Amazon_Logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { LoginInitiate } from '../redux/actions'
import { useHistory } from 'react-router-dom'
const Login = () => {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const {user} = useSelector((state) => state.data)
    let dispatch= useDispatch()
    let history= useHistory()
    useEffect(() => {
        if (user) {
            history.push('/')
        }
    }, [user, dispatch])
     const signIn = (e) => {
         e.preventDefault()
         dispatch(LoginInitiate(email,password))
         setEmail("")
         setPassword("")
     }
  return (
    <div className='login'>
        <a href= '/'> 
            <img src={AmazonLogo} className='login-logo' alt='logo' />
            </a>
            <div className='login-container'>
                <h1>Sign In </h1>
                <form>
                    <h5> Email</h5> 
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password}  onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit' onClick={signIn} className='login-signin'> 
                       Sign In
                    </button>
                 </form>

                </div>
                <p> New to Amazon?</p> 
                <a href='/register'>
                    <button className='login-register'>
                        Create Your Amazon Account </button> </a>
    </div>
  )
}

export default Login