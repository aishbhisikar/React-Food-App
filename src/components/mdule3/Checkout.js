import React, {useState} from 'react'
import './checkout.css'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import Payment from './Payment'


function Checkout({cart, setCart}) { 
  const [show,setShow]=useState(false)
 const [totalPrice, setTotalPrice] = useState(0)
 const [shippingPrice, setShippingPrice] = useState(10)
 const [itemPrice, setItemPrice] = useState(0)
  
  if (cart.length === 0){
    return (<EmptyCart/>)
  }
  return(
      <>
      <div className="cartlist">
        <div className="cardl1">
          <div className="row">
            <CartList cart={cart} setCart={setCart} totalPrice={totalPrice} 
            setTotalPrice={setTotalPrice} shippingPrice={shippingPrice} 
            itemPrice={itemPrice} setItemPrice={setItemPrice}  setShow={setShow}/> 
            
              {
                show? <Payment cart={cart} totalPrice={totalPrice}
                 shippingPrice={shippingPrice} itemPrice={itemPrice} />:null
              }
            
            
          </div>
        </div>
      </div>
      </>
    )
}

export default Checkout
