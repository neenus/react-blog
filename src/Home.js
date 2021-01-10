import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
const [blogs, setBlogs] = useState([
  { title: "My new website", body: "Lorem ipsum ....", author: "Neenus", id: 1 },
  { title: "Wife rules", body: "Lorem ipsum ....", author: "Rina", id: 2 },
  { title: "My birthday party", body: "Lorem ipsum ....", author: "Kiana", id: 3 },
]);

const handleDelete = id => {
  const newBlogs = blogs.filter(blog => blog.id !== id);
  setBlogs(newBlogs);
}

  return ( 
    <div className="home">
      <BlogList blogs={ blogs } title="All Blogs" handleDelete={ handleDelete } />
    </div>
   );
}
 
export default Home;