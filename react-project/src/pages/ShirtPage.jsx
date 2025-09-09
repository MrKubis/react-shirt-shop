import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/ShirtPage.css"

function ShirtPage(){
    console.log(order)
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
                        console.log(item)
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
                   
                    <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</text>
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