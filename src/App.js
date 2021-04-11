import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/login/LoginForm';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Checkout from './components/mdule3/Checkout';

function App() {
  const [cart, setCart] = React.useState([])

  const addCart = (id, dishName, photo, rate) => {
    setCart((preCart) => {
        //console.log(preCart)
        if(preCart.length !== 0) {
            const currentItem = preCart.find((item) => item.id === id)
            //console.log(preCart)
            const newCart = preCart.filter((item) => item.id !== id)
            //console.log(newCart, currentItem)
            return [...newCart, {id, dishName, photo, rate,count:currentItem ? currentItem.count + 1 : 1}]
            
        } else {
            return [
                {
                    id,
                    dishName,
                    photo,
                    rate,
                    count:1
                }
            ]
        }
        
    })
}

  return (
    <>
       <BrowserRouter>
        <Switch>
            <Route exact path='/' component={LoginForm}/>
            <Route path='/home' component={() => <Home cart={cart} addCart={addCart}/>} />
            <Route path='/cart' component={() => <Checkout cart={cart} setCart={setCart} />}/>
        </Switch>
      </BrowserRouter> 
      
    </>
  
  );
}

export default App;


