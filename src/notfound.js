import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notfound">
            <center><h2>Oops! that page was not found</h2>
            <p><Link to="/">Back to Base</Link></p>
            </center>
        </div>
     );
}
 
export default NotFound;