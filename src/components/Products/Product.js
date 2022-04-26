import { useDispatch } from "react-redux";
import {addTothali} from '../../reducers/index'
import React, {useState} from 'react'


function Product({ data }) {
  const [quantity, setquantity]= useState(1)
  
  const dispatch= useDispatch();

  const add =(item)=>{
    item = JSON.parse(JSON.stringify(item))
    item.quantity=quantity;
    item.totalPrice= Number(item.quantity)*Number(item.Price)
    dispatch(addTothali(item))
  }
  const increment=()=>{
   
    setquantity(quantity+1)
  }
  const decrement=()=>{
    if(quantity>1){

      setquantity(quantity-1)
      
    }
    
  }

  return (
    <div className="col-3">
      <div className="product" style={{width:'18rem'}} >
        <img src={data.Image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.Name}</h5>
          <p className="card-text">
            <p>${data.Price}</p>
            <p>{data.Calories}</p>
          </p>
          
    <div className="quantityButton">
           <button onClick={decrement}>&#8722;</button>
           <span>{quantity}</span>
           <button onClick={increment} >&#43;</button>
    </div>
          <br></br>
          <button className="btn btn-primary" onClick={()=>add(data)} >
            ADD to CART
          </button>
          {/* <a href="/" className="btn btn-primary" onClick={()=>dispatch(addTothali)} >
            ADD to CART
          </a> */}
        </div>
      </div>
    </div>
  );
}
export default Product;
