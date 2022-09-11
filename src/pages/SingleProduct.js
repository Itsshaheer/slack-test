import React from 'react'
import './SingleProduct.css'
import {useParams} from 'react-router-dom'
import {products} from '../Utils/ProductData'
import { useDispatch } from 'react-redux'
import  ShoppingCartOutlined  from '@material-ui/icons/ShoppingCartOutlined'
import { addtobasket } from '../redux/actions'
function SingleProduct() {
    let{id}= useParams()
    let SingleProduct=products.find((item) => item.id===id)
    let dispatch= useDispatch()
    const additemtobasket = ()=>{
        const item= {id:SingleProduct.id,
            title:SingleProduct.title,
            price:SingleProduct.price,
            image:SingleProduct.image,
            specification:SingleProduct.specification,
            detail:SingleProduct.detail

        };
        dispatch(addtobasket(item))

    }
  return (
    <div className='single-product-container'>
        <img className='single-product-ad' src='' />
        <div>
            <div className='single-product'>
                <img src={SingleProduct.image}
                className='single-product-image'/>
                <div className='single-product-info'>
                    <div className='single-product-title'>
                        {SingleProduct.title}</div>
                      <p className='single-product-price'>
                        Price: $
                        {SingleProduct.price}
                      </p>
                      <div className='single-product-specification'>
                        <h4>Specificaton</h4>
                        {SingleProduct.specification && SingleProduct.specification.map((item,index)=>(
                            <li key={index}>{item}</li>
                        ))}
                      </div>
<div className='single-product-description'>
    <h4>Product Description</h4>
    <p>{SingleProduct.detail}</p>
</div>
<button onClick={additemtobasket}>
    <i> <ShoppingCartOutlined /></i> Add To Basket
</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct