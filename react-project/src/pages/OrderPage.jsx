import "./styles/OrderPage.css"

import { use, useContext, useState } from "react";
import { OrderContext } from "../contexts/OrderContext.jsx";
import OrderObjectPanel from "../components/OrderObjectPanel.jsx";
import InfiniteScroller from "../components/InfiniteScroller.jsx";

function OrderPage(){

    function toggleModal(){
        setModal(!modal);
    }

    const {order, clearOrder, removeItem, setItemQuantity} = useContext(OrderContext)
    let total = 0

    const [modal, setModal] = useState(false);

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
                            <button className="standard-button" onClick={() => {
                                removeItem(index)}
                            }>Remove</button>
                        </div>
                    );

                       
                })}
            </ul>
            {order.length >0 && <hr></hr>}
            <p className="text-total">{order.length >0 ? `Total:${total +12}zł`: `Nothing ordered yet...`}</p>
            <button className="standard-button"
            onClick={toggleModal}
            >Order</button>
            {
            //modal && <OrderModal toggleModal = {toggleModal}/>
            }

        </div>
    );
}
export default OrderPage