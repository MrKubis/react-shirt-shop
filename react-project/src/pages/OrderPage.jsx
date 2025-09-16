import "./styles/OrderPage.css"

import { useContext, useState } from "react";
import { OrderContext } from "../contexts/OrderContext.jsx";
import OrderObjectPanel from "../components/OrderObjectPanel.jsx";
import InfiniteScroller from "../components/InfiniteScroller.jsx";

function OrderPage(){
    const {order, clearOrder, removeItem, setItemQuantity} = useContext(OrderContext)
    let total = 0

    order.forEach(item => {
        total += item.quantity * item.price;
    });

    return(
        <div className>
            <img className="img-et" src="/images/et.png"></img>
            <InfiniteScroller text = "YOUR ORDER" />
             <ul>
                {
                order.map((item,index) => {
                    return(
                        <div className="object-container" >
                            <OrderObjectPanel object = {item} key={item.id} index = {index}/>

                                <select className="select-quantity" defaultValue={item.quantity} onChange={(event) => {
                                    setItemQuantity(index, parseInt(event.target.value));
                                    console.log(order)
                                    }}>
                                        {Array.from({length:10}, (_,i) => (
                                        <option key = {i+1} value={i+1}>
                                            {i+1}
                                        </option>
                                        ))}
                                    </select>
                            <button className="remove-button" onClick={() => {
                                removeItem(index)}
                            }>Remove</button>
                        </div>
                    );

                       
                })}
            </ul>
            {order.length >0 && <hr></hr>}
            <p className="text-total">{order.length >0 ? `Total:${total +12}zł`: `Nothing ordered yet...`}</p>
        </div>
    );
}
export default OrderPage