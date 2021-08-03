import './comments.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

const Comments = (url) => {

    const [comment, setComment] = useState(null);

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/comments";
        fetch(url, { method: 'GET' }).then(res => {return res.json() }).then(data => setComment(data)).catch(err => console.log(err.message));
    }, []);

    return (
      <div className="comments">
        {comment &&
          comment.map((single) => (
              <div className="c-b" key={single.id}>
                  <Link to={`/details/${single.id}`}>
              <p className="name">Name: {single.name}</p>
              <p className="email">E-mail: {single.email}</p>
              <p className="comment">Comment: {single.body}</p>
              </Link>
            </div>
          ))}
      </div>
    );
}
 
export default Comments;