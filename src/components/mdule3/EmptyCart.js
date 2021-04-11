import React from 'react'
import {  Link } from "react-router-dom";

function EmptyCart()
{
    return (
        <div class="container-fluid mt-100">
            <div class="row"style={{marginTop:'150px'}}>
                    <div class="col-md-12"style={{paddingTop:'15px',paddingBottom:'15px'}}>
                        <div class="card">
                            <div class="card-header">
                                <h2 style={{color:'#000',textAlign:'center'}}>Shopping Cart</h2>
                            </div>
                            <div class="card-body cart">
                                <div class="col-sm-12 empty-cart-cls text-center">
                                    <img src="./images/eCart.png" alt="cart" width="150" height="150" class="img-fluid mb-4 mr-3"/>
                                    <h3 style={{color:'#000'}}><strong>Your Cart is Empty</strong></h3>
                                    <h4 style={{color:'#000'}}>Add something to make me happy😃</h4> 
                                    <Link to="/home" > ⬅️Continue Shopping</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default EmptyCart
