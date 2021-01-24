import { useEffect, useState } from "react";

const useFetch = url => {
  
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Use effect runs at every DOM re-render
  useEffect(() => {

    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource")
        }
        return res.json();
      })
      .then(data => {
        setData(data)
        setIsLoading(false)
        setError(null);
      })
      .catch(err => {
        if(err.name !== "AbortError") {
          setError(err.message);
          setIsLoading(false);
        }
      })
    }, 1000);

    // Cleanup function to abort fetch above when component is no longer mounted
    return () => abortCont.abort();
  }, [url])

  return { data, isLoading, error }
}

export default useFetch;