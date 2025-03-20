import { createContext, useState, useEffect } from "react";
import { product_list } from "../assets/assets";
import { main_shop } from "../assets/assets";
import { toast } from "react-toastify";

export const StoreContext= createContext(null)
const StoreContextProvider= (props)=>{
    const [cartItems,setCartItems]=useState({});
    const url="http://localhost:3000"
    const [token,setToken]=useState("")
    const addToCart=(itemId)=>{
        if(!cartItems[itemId])
        {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        toast.success("Item Added to cart",{
            autoClose:500,
            
        })
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        toast.warning("Item Removed from cart",{
            autoClose:500,
        })
    }

    const getTotalCartAmmount = () => {
        let totalAmmount = 0;
    
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = product_list.find((product) => product._id === item) || 
                               main_shop.find((product) => product._id === item);
    
                if (itemInfo) { 
                    totalAmmount += itemInfo.price * cartItems[item];
                }
            }
        }
    
        return totalAmmount;
    };
    useEffect(()=>{
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
        }
    },[])

    const contextValue={
        product_list,
        cartItems,
        main_shop,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmmount,
        url,
        token,
        setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider