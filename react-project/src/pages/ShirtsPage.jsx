import { NavLink } from "react-router-dom";
import ProductPanel from "../components/ProductPanel";
import "./styles/ShirtsPage.css"
import { useEffect } from "react";
import { useState } from "react";
import InfiniteScroller from "../components/InfiniteScroller.jsx"

function ShirtsPage(){
    const [tshirts, setTshirts] = useState(null);

    useEffect(() =>{
        fetch("http://localhost:8000/tshirts")
        .then(res=>{
            return res.json();
        })
        .then(
            data =>{

                setTshirts(data)
            }
        )
    },[])
    return(

            <div className="product-panels-container">
                <InfiniteScroller text="SHIRTS"></InfiniteScroller>
               {tshirts && tshirts.map((tshirt)=>{
                    return(
                        <NavLink key = {tshirt.name} to={`/shirts/${tshirt.name}`}>
                            <ProductPanel image={tshirt.image} name={tshirt.name + " T-shirt"} price={tshirt.price} key = {tshirt.name} object = {tshirt}/>
                        </NavLink>
                    );
                }
                )
                }
                                                    
                
            </div>

    );
}
export default ShirtsPage;