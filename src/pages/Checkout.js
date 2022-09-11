
import React from 'react'
import { useSelector } from 'react-redux'
import './Checkout.css'
import Ad from '../BannerImages/ad.jpg'
import CheckOutProduct from '../components/CheckOutProduct'
const Checkout = () => {
    const {basket, user} = useSelector((state) => state.data)
  return (
    <div className='checkout'>
        <div className='checkout-left'>
            <img className='add'
                 src= {Ad}

                />
                <div>
                    <h3> Hello, {user?.email}</h3>
                    <h2 className='checkout-title'>
                        {basket.length ===0 ? "Your Shopping Basket Is Empty"
                        : "Your Shopping Basket"} </h2> 
                        {basket && basket.map((item) => (
                            <CheckOutProduct
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating= {item.rating}
                            />
                        ))} </div>
                        </div> 
                        <div className='checkout-right'>{/*subtotal */} </div>
                        </div>
                       
  )
}

export default Checkout