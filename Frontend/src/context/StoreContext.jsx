import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from 'axios'

export const StoreContext= createContext(null)
const StoreContextProvider= (props)=>{
    const [cartItems,setCartItems]=useState({});
    const url="http://localhost:3000"
    const [token,setToken]=useState("")
    const [product_list,setProductList]=useState([]);
    const [main_shop,setMainShop]=useState([]);
    const addToCart=async(itemId)=>{
        if(!cartItems[itemId])
        {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
        toast.success("Item Added to cart",{
            autoClose:500,
            theme:"dark"
        })
    }
    const removeFromCart=async(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
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
    const fetchProductList=async()=>{
        const response= await axios.get(url+"/api/item/list")
        setProductList(response.data.data)
    }
    const fetchShopList=async()=>{
        const response= await axios.get(url+"/api/shop/list")
        setMainShop(response.data.data)
    }

    const loadCartData= async(token)=>{
        const response= await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setCartItems(response.data.cartData);
    }

    useEffect(()=>{
        
        async function loadData(){
            await fetchProductList();
            await fetchShopList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData();
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