import React from 'react'

function Payment(props) {
    
    return (
        <div className="col-md-4">
            <div className="payment-info">
                <div className="d-flex justify-content-between align-items-center">
                    <h3>Card Details</h3>
                </div>
                <span className="type d-block mt-3 mb-1">Card type</span>
                <label className="radio">
                     <input type="radio" name="card" value="payment" /> 
                     <span><img width="30" src="./images/m.png" alt="mastercard" /></span> 
                </label>
                <label className="radio">
                     <input type="radio" name="card" value="payment" defaultChecked/>
                      <span><img width="30" src="./images/v.png" alt="visa" /></span>
                 </label>
                <label className="radio">
                     <input type="radio" name="card" value="payment"/> 
                     <span><img width="30" src="./images/amex.png" alt="amex"/></span> 
                </label>
                <label className="radio">
                     <input type="radio" name="card" value="payment"/> 
                     <span><img width="30" src="./images/paypal.png" alt="paypal"/></span> 
                </label>
                <div>
                    <label className="credit-card-label">Name on card</label>
                    <input type="text" className="form-control credit-inputs" placeholder="Name"/>
                </div>
                <div>
                    <label className="credit-card-label">Card number</label>
                    <input type="text" className="form-control credit-inputs" placeholder="0000 0000 0000 0000"/>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label className="credit-card-label">Date</label>
                        <input type="text" className="form-control credit-inputs" placeholder="12/24"/>
                    </div>
                    <div className="col-md-6">
                        <label className="credit-card-label">CVV</label>
                        <input type="text" className="form-control credit-inputs" placeholder="342"/>
                    </div>
                </div>
                <hr className="line"/>
                <div className="d-flex justify-content-between information">
                    <span>Subtotal:$</span>
                    <span>{props.itemPrice}</span>
                </div>
                <div className="d-flex justify-content-between information">
                    <span>Shipping:$</span><span>{props.shippingPrice}</span>
                </div>
                <div className="d-flex justify-content-between information">
                    <span>Total(Incl. taxes):$</span><span>{props.totalPrice}</span>
                </div>
                <button className="btn btn-primary btn-block d-flex justify-content-between mt-3" type="button">
                    <span>${props.totalPrice}</span>
                    <span>Checkout<i className="fa fa-long-arrow-right ml-1"></i></span>
                </button>
            </div>
        </div>
    )
}

export default Payment
