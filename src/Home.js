import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
const [blogs, setBlogs] = useState(null);
// eslint-disable-next-line no-unused-vars
const [isLoading, setIsLoading] = useState(true);

const handleDelete = id => {
  const newBlogs = blogs.filter(blog => blog.id !== id);
  setBlogs(newBlogs);
}

// Use effect runs at every DOM re-render
useEffect(() => {
  setTimeout(() => {
    
    fetch("http://localhost:3000/blogs")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data)
        setIsLoading(false)
      });
  }, 1000);
}, [])

  return ( 
    <div className="home">
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