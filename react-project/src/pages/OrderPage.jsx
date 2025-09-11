import "./styles/OrderPage.css"

import { useContext, useState } from "react";
import { OrderContext } from "../contexts/OrderContext.jsx";
import OrderObjectPanel from "../components/OrderObjectPanel.jsx";

function OrderPage(){
    const {order, clearOrder, removeItem, setItemQuantity} = useContext(OrderContext)
    let total = 0

    order.forEach(item => {
        total += item.quantity * item.price;
    });

    return(
        <div>
           
            <h1>Your order:</h1>
             <ul>
                {
                order.map((item,index) => {
                    return(
                        <div className="object-list-container" >
                            <OrderObjectPanel object = {item} key={item.id} index = {index}/>

                            <div className="object-quantity-container">
                                <select defaultValue={item.quantity} onChange={(event) => {
                                    setItemQuantity(index, parseInt(event.target.value));
                                    console.log(order)
                                    }}>
                                        {Array.from({length:10}, (_,i) => (
                                        <option key = {i+1} value={i+1}>
                                            {i+1}
                                        </option>
                                        ))}
                                    </select>
                            </div>
                            <button className="remove-button" onClick={() => {
                                removeItem(index)}
                            }>Remove</button>
                        </div>
                    );

                       
                })}
            </ul>
            <p>Total:{total}</p>
        </div>
    );
}
export default OrderPage