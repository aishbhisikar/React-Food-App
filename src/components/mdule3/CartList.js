import React,{useState} from 'react'
import {  Link } from "react-router-dom";

function CartList(props) {
    
    const {cart,setCart} = props
    const removeFromCart = (id) => {
        setCart(
          cart.filter((item) => item.id !== id)
        );
      };

      const onAdd = (id) => {
        const exist = cart.find((item) => id === item.id);
        const newCart = cart.filter((item) => item.id !== id)
        if (exist.count <= 9) {
        exist.count += 1
          setCart(
            [...newCart, exist]
          );
        }
      }

      const onRemove = (id) => {
        const exist = cart.find((item) => id === item.id);
        const newCart = cart.filter((item) => item.id !== id)
        if (exist.count > 1) {
        exist.count -= 1
          setCart(
            [...newCart, exist]
          );
        }
      }

      React.useEffect(() => {
        const itemsPrice = props.cart.reduce((total, current) => total + current.count * current.rate, 0);
        props.setItemPrice(itemsPrice)
        const totalPrice = itemsPrice + props.shippingPrice;
        props.setTotalPrice(totalPrice)
        // console.log(totalPrice, itemsPrice)
      },[cart])

  
    return (
        <div className="col-md-8 cart1">
            <div className="title1">
                <div className="row">
                    <h4><b>Shopping Cart</b></h4> 
                </div>
            </div>
            {cart.map((val, index) => (
                <div className="row border-top border-bottom" key={val.id}>
                    <div className="row main5 align-items-center">
                        <div className="col-2">
                            <img className="img-fluid" src={val.photo} alt={val.dishName}/>
                        </div>
                        <div className="col">
                            <div className="row text-muted">{val.dishName}</div>
                        </div>
                        <div className="col"> 
                            <button onClick={() => onRemove(val.id)} style={{backgroundColor:'#fff',border:'none'}} >
                                <span>-</span>
                            </button>
                            <a href="#" className="border">{val.count}</a>
                            <button onClick={()=>onAdd(val.id)}
                            style={{backgroundColor:'#fff',border:'none'}} >
                                <span>+</span>
                            </button>
                        </div>
                        <div className="col">
                            ${val.rate * val.count} 
                            <button style={{backgroundColor:'#fff',border:'none',marginLeft:'30px'}} 
                            onClick={()=>removeFromCart(val.id)}
                            >
                                <span className="close">&#10005;</span>
                            </button>
                         </div>
                    </div>
                </div>
            ))}
                        
                        <div className="row back-to-shop">
                            <div className="col"> 
                                <Link to="/home" > <span className="text-muted">⬅️Continue Shopping</span></Link>
                            </div>
                            <div className="col"> 
                                 <h6 style={{marginLeft:'50px'}}>Subtotal:    ${props.itemPrice}</h6>
                            </div>
                        </div>
                        <div style={{textAlign:'right',marginTop:'10px'}}> 
                        <button style={{backgroundColor:'#fff',border:'none',marginLeft:'30px'}} 
                        onClick={()=>props.setShow(true)}> 
                            <span className="text-muted">Proceed to Checkout➡️</span>
                        </button>  
                        </div>
        </div>
                    
                
    )
}

export default CartList
