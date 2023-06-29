    import React, { createContext, useState } from 'react'
import { PRODS } from '../products';


    export const ShopContext = createContext(null); 
    
    const getDefaultCart = () => {

        let cart ={}
        for (let i=1 ; PRODS.length +1 ; i++){
            cart[i] = 0
        }

        return cart ;

    }

   

    
    export const ShopContextProvider = (props) => {
    // we are going to define our states


    const[cartItems ,setCartItems] = useState(getDefaultCart()) ;

    const addToCart = (itemId) => {
      setCartItems((prev) =>  ({...prev, [itemId] : prev[itemId] + 1}));

    };


    const removeFromCart = (itemId) => {
      setCartItems((prev) =>  ({...prev, [itemId] : prev[itemId] - 1}));

    };




const contextValue = {cartItems, addToCart, removeFromCart}

console.log(cartItems);

      return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
      )
    };
    