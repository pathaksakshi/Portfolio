import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BlogsPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/blogs`)
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.log('Error fetching blogs:', error);
      });
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogsPage;
