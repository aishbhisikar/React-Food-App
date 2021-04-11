import React from 'react'
import Nav from './Navbar/Nav'
import MenuData from './menu/MenuData';
import Menu from './menu/Menu';
import About from './con&abt/About';

export const Home = (props) => {
    return (
        <div>
            <Nav cart={props.cart}/>
            <div className="grid" >
		        {MenuData.map((val,index) =>{
                    return(
                            <Menu  
                                key={val.id}
                                {...val} addCart={props.addCart}
                            />	
                    );
		        })}
	        </div>
            <div className="clear"></div>
            <About/>
        </div>
    )
}

export default Home
