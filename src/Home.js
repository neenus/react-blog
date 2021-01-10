import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
// eslint-disable-next-line no-unused-vars
const [blogs, setBlogs] = useState([
  { title: "My new website", body: "Lorem ipsum ....", author: "Neenus", id: 1 },
  { title: "Wife rules", body: "Lorem ipsum ....", author: "Rina", id: 2 },
  { title: "My birthday party", body: "Lorem ipsum ....", author: "Kiana", id: 3 },
]);

  return ( 
    <div className="home">
      <BlogList blogs={ blogs } title="All Blogs" />
    </div>
   );
}
 
export default Home;