import "./InfiniteScroller.css"

function ScrollContainer(props){
    console.log(props.text.length)
    return(
    <div className="scroll-container" width = {props.width}>
        <ul style={{
            animation: `scroll ${props.text.length}s linear infinite`
        }}>
            <li >
                <span>
                    {props.text}
                </span>
            </li>
            <li >
                <span>
                    {props.text}
                </span>
            </li>  
            <li >
                <span>
                    {props.text}
                </span>
            </li>  
            <li >
                <span>
                    {props.text}
                </span>
            </li>  
            <li >
                <span>
                    {props.text}
                </span>
            </li>  
            <li >
                <span>
                    {props.text}
                </span>
            </li>  
            <li >
                <span>
                    {props.text}
                </span>
            </li>  
            <li >
                <span>
                    {props.text}
                </span>
            </li>                                   
        </ul>  

        <ul style={{
            animation: `scroll ${props.text.length}s linear infinite`
        }}>
            <li >
                <span>
                    {props.text}
                </span>
            </li>
            <li >
                <span>
                    {props.text}
                </span>
            </li>  
            <li >
                <span>
                    {props.text}
                </span>
            </li>  
            <li >
                <span>
                    {props.text}
                </span>
            </li>  
            <li >
                <span>
                    {props.text}
                </span>
            </li>  
            <li >
                <span>
                    {props.text}
                </span>
            </li>  
            <li >
                <span>
                    {props.text}
                </span>
            </li>  
            <li >
                <span>
                    {props.text}
                </span>
            </li>                                   
        </ul>               
                    </div>)
}

export default ScrollContainer;