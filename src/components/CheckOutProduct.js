import React from 'react'
import './CheckOutProduct.css'
import { useDispatch } from 'react-redux'
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined'
const CheckOutProduct = ({id, title , image, rating, price}) => {
    let dispatch = useDispatch()
    const removeitem = () => {}
  return (
    <div className='checkout-product'>
        <img src={image} alt='' className='checkout-product-image' /> 
        <div className='checkout-product-info'>
            <p  className='checkout-product-title'> {title}</p>
            <p  className='checkout-product-price'> <strong> $</strong> <strong> {price} </strong></p>
            <div className='product-rating'>
                {Array (rating)
                .fill().map((_, index) => (
                    <p key={index}></p>
                ))}
                </div>
            
            <button onClick={removeitem}>
              <i> <ShoppingCartOutlined /> </i>  
              Remove Item
                </button>
                </div>
                </div>
  )
}

export default CheckOutProduct