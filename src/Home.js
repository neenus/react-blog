import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
const [blogs, setBlogs] = useState(null);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

const handleDelete = id => {
  const newBlogs = blogs.filter(blog => blog.id !== id);
  setBlogs(newBlogs);
}

// Use effect runs at every DOM re-render
useEffect(() => {
  setTimeout(() => {
    
    fetch("http://localhost:3000/blogs")
      .then(res => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource")
        }
        return res.json();
      })
      .then(data => {
        setBlogs(data)
        setIsLoading(false)
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      })
  }, 1000);
}, [])

  return ( 
    <div className="home">
      {
        error && <div>{ error }</div>
      }
      {
        isLoading && <div>Loading ...</div>
      }
      {
        blogs && <BlogList blogs={ blogs } title="All Blogs" handleDelete={ handleDelete } />
      }
    </div>
   );
}
 
export default Home;