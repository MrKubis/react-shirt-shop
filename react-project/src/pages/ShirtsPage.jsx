import { NavLink } from "react-router-dom";
import ProductPanel from "../components/ProductPanel";
import "./styles/ShirtsPage.css"
import { useEffect } from "react";
import { useState } from "react";
import InfiniteScroller from "../components/InfiniteScroller.jsx"
import * as data from "../data/db.json"

function ShirtsPage(){
    const [tshirts, setTshirts] = useState(null);

    
    useEffect(() =>{
        setTshirts(data.tshirts)
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