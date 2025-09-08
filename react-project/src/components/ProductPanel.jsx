import "./ProductPanel.css"

function ProductPanel(props){
    console.log(props)
    return(
        <div className="product-info-container">
                <img src={props.image} width = "350px" ></img>
            <div className="info-container">
                <p className="info-text">{props.name}</p>   
                <p className="price-text">{props.price}</p>
            </div>
        </div>
    );
}
export default ProductPanel;