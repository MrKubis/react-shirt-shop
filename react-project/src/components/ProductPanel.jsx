import "./ProductPanel.css"

function ProductPanel(props){
    return(
        <div className="product-info-container">
                <img src={props.image} width = "350px" ></img>
            <div className="info-container">
                <p className="info-text">{props.name}</p>   
                <p className="price-text">{props.price}zł</p>
            </div>
        </div>
    );
}
export default ProductPanel;