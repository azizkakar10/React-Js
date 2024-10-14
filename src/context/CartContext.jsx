import { createContext, useState } from "react";


export const CartContext = createContext();

function CartContextProvider({children}){
    const [cartItem , setCartItem] = useState([]);
    return(
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
} 