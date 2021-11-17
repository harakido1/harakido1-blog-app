import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    return (
        <div className="container blog-list">
            <h4 className="lobster" style={{ textDecoration: "underline" }}>
                {title}
            </h4>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h5 style={{ color: "#000" }}>{blog.title}</h5>
                    </Link>
                    <p>Written by: {blog.author}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
