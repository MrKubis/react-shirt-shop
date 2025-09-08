import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/ShirtPage.css"

function ShirtPage(){
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
    console.log(shirt)
    return(
        <div>
            {shirt && 
            <div className="div-sdaspage-container">
                <p>{shirt.name}</p>
                <img src={shirt.image}/>
            </div>
            }
        </div>
    );
}
export default ShirtPage;