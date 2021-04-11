import React from 'react';
import { HashLink } from 'react-router-hash-link';
import {  Link } from "react-router-dom";
import './nav.css';

function Nav(props) {

	const total = props.cart.reduce((total, current) => 
		total + current.count
	,0)
	//console.log(total)
	
    return (
        <>

			<div className="container">
				<div className="header">
					<div className="logo">
							<h1>🥘Foodies</h1>
					</div>
					<div className="nav">
							<ul>
							<li>
								<HashLink to="#menu">
										Menu
										</HashLink>
							</li>
								<li>
								<HashLink to="#about">
										About
										</HashLink>
								</li>
								<li><Link to="/cart">Cart🛒{total}</Link></li>
								<li>
									<Link to="/">Logout</Link>
								</li>
								
							</ul>
					</div>
				</div>
			</div >
			<div className="home">
            </div>

			<div className="clear"></div>
			<div className="shipping">
				<div className="row">
					<div className="col-md-4"><h4>👍
						All Items Rates are with Taxes </h4></div>
					<div className="col-md-4"><h4>♻️ London Wide Delivery</h4></div>
					<div className="col-md-4"><h4>👍 Fast And Reliable Support</h4></div>
				</div>
			</div>
			<div className="clear"></div>
        </>
    )
}

export default Nav
