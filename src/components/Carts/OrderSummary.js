import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import{getTotal, CheckOut} from '../../reducers'
import {RemoveItems} from '../../reducers/index'


 function OrderSummary() {
   const thali = useSelector((state)=>state.counter.thali)
   const total = useSelector(getTotal)
   const dispatch = useDispatch();
    
  return (
    <div className='thalicontainer' >
    <div className="borderedContainer cardContainer">
      <h2 className='title'>ORDER SUMMARY</h2>
      <div className='CartTotalPriceContainer'>
        <p>Total:</p>
        
        <span className='cartTotalPrice'>${total}</span>
      </div>
      </div>
      {thali.map((element)=>(<div  key={element.id}>
        <div className="cartItem" style={{display:'flex'}}>
      <div className="cartdis" >
        <b>Name:{element.Name}</b>
        <br></br>
        
        <b>Quantity:{element.quantity}</b>
        <br></br>
        
        <b>Price:${element.Price*element.quantity}</b>

      </div>
      <div className="removebtn" >
        <span>
          <button className="btn btn-primary" onClick={()=> dispatch(RemoveItems({thaliItemId:element.id}))}>Remove</button>
          </span>
      </div>
      

    </div>

      </div>))}
      <div className='checkout'>
      
      <button className='btn btn-primary'onClick={()=>dispatch(CheckOut())}>CHECKOUT</button>
      
      </div>
    </div>
  )
}
export default OrderSummary

