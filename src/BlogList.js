

import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
  
   
    <div className="blog-listt" >
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            
          </Link>
        </div>
      ))}
    </div>
    
  );
}
 
export default BlogList;
