
import { useSelector } from "react-redux";
import Product from './Product';
 function Menu() {
    const productdata = useSelector((state) => state.counter.products);
  return (
    <div className="container">
        
        <div className='row' style={{marginTop:"20px"}}>
          {productdata.map((ele) => (
            <Product data={ele} key={ele.id}/>
          ))}
        </div>
      </div>
  )
}
export default Menu