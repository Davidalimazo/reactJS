import { useParams, useHistory } from "react-router";
import { useEffect, useState } from 'react';
import "./comments.css";

const Details = () => {
    const { id } = useParams();
    const history = useHistory();

    const [comment, setComment] = useState(null);

    useEffect(() => {
         const url = "https://jsonplaceholder.typicode.com/comments/" + id;
         fetch(url, { method: "GET" })
           .then((res) => {
             return res.json();
           })
           .then((data) => setComment(data))
           .catch((err) => console.log(err.message));
    }, [id]);
    
    const handleDelete = (ay) => {
        const url = "https://jsonplaceholder.typicode.com/comments/" + ay;
        fetch(url, { method: "DELETE" })
          .then((data) => history.push('/'))
          .catch((err) => console.log(err.message));
    }

    return (
      <div className="details">
        {comment && <h1 className="name">{comment.name}</h1>}
        {comment && <h2 className="email">{comment.email}</h2>}
            {comment && <h3 className="comment">{comment.body}</h3>}
            <center><button className="btn btn-danger" onClick={()=>handleDelete(comment.id)}>Delete</button></center>
      </div>
    );
}
 
export default Details;