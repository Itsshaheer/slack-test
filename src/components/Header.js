import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import  LocationOnOutlined  from '@material-ui/icons/LocationOnOutlined'
import  ShoppingCartOutlined  from '@material-ui/icons/ShoppingCartOutlined'
import { useSelector, useDispatch } from 'react-redux'
import { logOutInitiate } from '../redux/actions'

const Header = () => {
    const {user, basket} = useSelector((state) => state.data)
    let dispatch=useDispatch()
    const handleauth= () => {
        if (user){
        dispatch(logOutInitiate())
        }
    }
  return (
    <nav className='header'>
        <a href='/'>
            <img className='header-logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt='amazon-logo' />
            </a>
            <div className='header-option' style={{marginRight: '-10px'}}>
            <LocationOnOutlined />
            </div>
            <div className='header-option'>
                <span className='header-option1'> Hello</span>
                <span className='header-option2'> Select Your Address</span>
                
                </div>
                <div className='search'>
                    <select> <option> All</option></select>
                    <input type='text' className='searchinput'/>
                    <SearchIcon className='searchicon' />
                    </div>

                    <div className='header-nav'>
                        <a href= {`${user ? '/' : '/login'}`} className='header-link'>
                            <div onClick={handleauth} className='header-option'>
                        <span className='header-option1'> Hello, {user ? user.email : "Guest"}{""} </span>
                       <span className='header-option2'>  {user ? "Sign Out" : 'Sign In'} </span> 
                   </div>
                   </a>
                   
                        <a href='/orders' className='header-link'>
                            <div className='header-option'>
                        <span className='header-option1'> Returns</span>
                       <span className='header-option2'> Orders</span> 
                   </div>
                   </a>
                   
                        <a href='/checkout' className='header-link'>
                            <div className='header-basket'>
                        <ShoppingCartOutlined />
                       <span className='header-option2 basket-count'> {basket && basket.length} </span> 
                   </div>
                   </a>
                   </div>
                



            </nav>
  
  )
}

export default Header