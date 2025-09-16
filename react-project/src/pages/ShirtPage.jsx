import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/ShirtPage.css"

import React, { useContext } from 'react'
import { OrderContext } from "../contexts/OrderContext";
import { toast } from "react-toastify";
import InfiniteScroller from "../components/InfiniteScroller.jsx"

import { motion } from "framer-motion"
function ShirtPage(){
    const [size, setSize] = useState(null)
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
        <motion.div 
        initial={{opacity:0, x:10}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:-10}}
        >
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
                    <select className="select-size"
                    onChange={(event) =>{
                        setSize(event.target.value)
                    }}
                    >
                        <option value="" disabled selected>Select size</option>
                        <option value="S" >S</option>
                        <option value="M" >M</option>
                        <option value="L" >L</option>
                        <option value="XL">XL</option>
                    </select>
                    <button className="order-button" onClick={() => {
                        if(size !== null){
                            addToOrder({  
                                "id":shirt.id,
                                "name":shirt.name,
                                "image":shirt.image,
                                "price":shirt.price,
                                "quantity":1,
                                "size":size,
                            });
                            toast.success("Product has been added!")
                                }
                        else{
                            toast.error("Choose size")
                        }
                    }
                }> Add to your order</button>
                
                </div>
            </div>

            }
            <InfiniteScroller text = {shirt.price + "zł"}/>
        </motion.div>
    );
}
export default ShirtPage;