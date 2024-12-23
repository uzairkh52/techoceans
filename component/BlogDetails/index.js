import React, { useEffect, useState } from 'react';

const BlogDetails = ({ slug }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`/api/blogs?slug=${slug}`);
      const data = await response.json();
      setBlog(data.blog);
      setLoading(false);
      
    };

    fetchBlog();
  }, [slug]);

  if (loading) return <p>Loading blog...</p>;

  if (!blog) return <p>Blog not found!</p>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p>Author: {blog.author}</p>
      <p>Slug: {blog.slug}</p>
    </div>
  );
};

export default BlogDetails;