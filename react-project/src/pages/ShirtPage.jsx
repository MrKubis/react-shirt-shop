import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/ShirtPage.css"

import React, { useContext } from 'react'
import { OrderContext } from "../contexts/OrderContext";



function ShirtPage(){

    const{order,addToOrder} = useContext(OrderContext)
    const params = useParams();
    const [shirt, setShirt] = useState(null)
    //Setting shirt
    useEffect(() => {
        fetch("http://localhost:8000/tshirts")
        .then(res => {
            return res.json()
        })
        .then(
            data => {
                data.forEach((item) => {
                    if (item.name === params.shirtName){
                        setShirt(item)
                    }
                })
            }
        )
    },[])
    if(shirt)
        //I deffinetely need to fix this one
    return(
        <div>
            {shirt && 
            <div className="page-container">
                
                <div className="image-container">
                    <img src={shirt.image}/>
                    <img src={shirt.image}/>
                </div>
                <div className="text-container">
                    <p className="text-name">{shirt.name}</p>
                   
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>    
                <div className="order-container">
                    <select className="select-size">
                        <option value="" disabled selected>Select size</option>
                        <option value="S" >S</option>
                        <option value="M" >M</option>
                        <option value="L" >L</option>
                        <option value="XL">XL</option>

                    </select>
                    <button className="order-button" onClick={() => {
                        addToOrder({  
                            "id":shirt.id,
                            "name":shirt.name,
                            "image":shirt.image,
                            "price":shirt.price,
                            "quantity":1,
                        });
                    }
                }> Add to your order</button>
                </div>

                 <div className="scroll-container">
                        <ul aria-hidden="true">
                            <li>
                                <p className="text-price">{shirt.price}zł</p>
                            </li>
                            <li>
                                <p className="text-price">{shirt.price}zł</p>
                            </li>
                            <li>
                                <p className="text-price">{shirt.price}zł</p>
                            </li>
                            <li>
                                <p className="text-price">{shirt.price}zł</p>
                            </li>
                            <li>
                                <p className="text-price">{shirt.price}zł</p>
                            </li>
                            <li>
                                <p className="text-price">{shirt.price}zł</p>
                            </li>
                            <li>
                                <p className="text-price">{shirt.price}zł</p>
                            </li>
                            <li>
                                <p className="text-price">{shirt.price}zł</p>
                            </li>
                            <li>
                                <p className="text-price">{shirt.price}zł</p>
                            </li>
                            <li>
                                <p className="text-price">{shirt.price}zł</p>
                            </li>
                            <li>
                                <p className="text-price">{shirt.price}zł</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p className="text-price">{shirt.price}zł</p>
                            </li>
                            <li>
                                <p className="text-price">{shirt.price}zł</p>
                            </li>
                            <li>
                                <p className="text-price">{shirt.price}zł</p>
                            </li>
                            <li>
                                <p className="text-price">{shirt.price}zł</p>
                            </li>
                            <li>
                                <p className="text-price">{shirt.price}zł</p>
                            </li>
                            <li>
                                <p className="text-price">{shirt.price}zł</p>
                            </li>
                            <li>
                                <p className="text-price">{shirt.price}zł</p>
                            </li>
                            <li>
                                <p className="text-price">{shirt.price}zł</p>
                            </li>
                            <li>
                                <p className="text-price">{shirt.price}zł</p>
                            </li>
                            <li>
                                <p className="text-price">{shirt.price}zł</p>
                            </li>
                            <li>
                                <p className="text-price">{shirt.price}zł</p>
                            </li>
                        </ul>
                    </div>
            </div>
            }
        </div>
    );
}
export default ShirtPage;