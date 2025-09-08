import { Link } from "react-router-dom";

function NotFoundPage(){
    return(
        <div className="flex flex-col gap2">
            404 Not Found
            <br/>
            <Link to="/">Return to homepage</Link>
        </div>    
    );
};
export default NotFoundPage;