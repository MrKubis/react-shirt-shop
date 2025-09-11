import "./OrderObjectPanel.css"

import { useContext } from "react";
import { OrderContext } from "../contexts/OrderContext.jsx";

function OrderObjectPanel(props){

    const {setItemQuantity, removeItem} = useContext(OrderContext)
    return(
    <div className="object-container">
        <div className="object-image-container">
            <img  src = {props.object.image}></img>
        </div>
        <div className="object-info-container">
            <ul>
                <li>
                    <p>{props.object.name}</p>
                </li>
                <li>
                    <p>{props.object.price}</p>
                </li>
                <li>
                    <p>Size: M</p>
                </li>
            </ul>
        </div>
        <div className="object-quantity-container" onChange={(event) => {
        setItemQuantity(props.index, parseInt(event.target.value))
        console.log(props.object)
        }}>
        </div>
    </div>);

}
export default OrderObjectPanel