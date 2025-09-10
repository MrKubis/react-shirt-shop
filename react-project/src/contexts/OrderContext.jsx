import { createContext, useState } from "react";

export const OrderContext = createContext(null)

export function OrderContextProvider({children}){
    
    const [order,setOrder] = useState([])

    function addToOrder(item){
        if(order.length>0){
            var isItemFound = false
            order.forEach((item_order) => {
            if(item_order.id === item.id)
            {
                item_order.quantity +=1;
                isItemFound = true
            }
        })  
            if(!isItemFound){
                order.push(item)
            }
        }  
        else
        {
            order.push(item)
        }
    }
    function removeItem(item){
        
    }
    function getOrder(){
        return order
    }
    function clearOrder(){
        setOrder([]);
    }
    const value = { 
        addToOrder,
        removeItem,
        getOrder,
        clearOrder,
    };
    return(
        <OrderContext.Provider value = {{order,setOrder,addToOrder,removeItem,getOrder,clearOrder}}>
            {children}
        </OrderContext.Provider>
    );
}