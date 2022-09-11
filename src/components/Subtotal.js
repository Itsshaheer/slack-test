import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getBasketTotal } from '../Utils/BasketTotal'
const Subtotal = () => {
    const {basket, user} = useSelector((state) => state.data)
    let history = useHistory()
    const handlecheckout = () =>  {
        if (user) {
            history.push('/payment')

        } else {
            history.push('/login')
        }

    };
  return (
    <div className='subtotal'>
        <CurrencyFormat 
        renderText={(value) =>  (
            <>
           <p> Subtotal ({basket.length} items) : <strong> {value} </strong> </p>
          <small className='subtotal-gift'>
    <input type='checkbox'/> This order contains a gift </small>
            </>
        )}
  decimalScale={2}
  value={getBasketTotal(basket)}
  displayType={'text'}
  thousandSeperator={true}
  prefix={'$'}
  />
  <button onClick={handlecheckout}> Procceed to checkout</button>
        </div>
  )
}

export default Subtotal