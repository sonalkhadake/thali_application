import {useSelector, useDispatch} from 'react-redux'
import {RemoveItems} from '../../reducers/index'


function Thali() {
    const thali = useSelector((state)=>state.counter.thali)
    const dispatch = useDispatch();
  return (
    <div  className='thali'>
      
      <div  >
          {thali.map((item)=>(
              <div  key={item.id}>
      
          <div  >

         <div className="product" style={{width:'18rem'}} >
        <img src={item.Image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.Name}</h5>
          <p className="card-text">
            <p>Price:${item.Price*item.quantity}</p>
            <p>Qty:{item.quantity}</p>
            <p className='description'>{item.Description}</p>
          </p>
          
          <button className="btn btn-primary" onClick={()=> dispatch(RemoveItems({thaliItemId:item.id}))}  >
            Remove
          </button>
          
        </div>
      </div>
    </div>
              </div>
          ))}
      </div>

    </div>
    
  )
}

export default Thali