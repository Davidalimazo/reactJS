import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [pending, setPending] = useState("Loading Resource");
    


  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { method: "GET", signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not connect to the resource");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setPending(null);
          setData(data);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch Aborted");
          } else {
            setPending(null);
            setError(err.message);
          }
        });
    }, 500);

     return () => {
       abortCont.abort();
     };

  }, [url]);
    
    return {data, pending, error}
}
export default useFetch;
