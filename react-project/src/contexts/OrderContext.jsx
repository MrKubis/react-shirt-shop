import { createContext, useState } from "react";

export const OrderContext = createContext(null)

export function OrderContextProvider({children}){
    
    const [order,setOrder] = useState([])

    function setItemQuantity(index,quantity){
        setOrder((oldOrder)=>{
            const newOrder = [...oldOrder]
            newOrder[index] = {...newOrder[index],quantity}
            return newOrder;
        });
    }
    function addToOrder(item){
        if(order.length>0){
            var isItemFound = false
            order.forEach((item_order) => {
            if(item_order.id === item.id && item_order.size === item.size)
            {
                item_order.quantity +=1;
                isItemFound = true
            }
        })  
            if(!isItemFound){
                order.push(item);
            }
        }  
        else
        {
            order.push(item)
        }
    }
    function removeItem(index){
        let temporder  = order.filter((_,i) => i!== index)
        setOrder(temporder);
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
        <OrderContext.Provider value = {{order,setOrder,addToOrder,removeItem,getOrder,clearOrder,setItemQuantity}}>
            
            {children}
            
        </OrderContext.Provider>
    );
}