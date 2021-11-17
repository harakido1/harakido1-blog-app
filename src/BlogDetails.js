import { useParams, useHistory } from "react-router";
import useFetch from "./useFetch";
import { Row, Col, Card, Icon, Button } from "react-materialize";

const BlogDetails = () => {
    const { id } = useParams();
    const {
        data: blog,
        isPending,
        error,
    } = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();

    const handleClick = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE",
        }).then(() => {
            history.push("/");
        });
    };

    return (
        <Row>
            <Col m={12} s={12}>
                <Card
                    className="pink darken-4"
                    closeIcon={<Icon>close</Icon>}
                    revealIcon={<Icon>more_vert</Icon>}
                    textClassName="white-text"
                >
                    {isPending && <div>Loading...</div>}
                    {error && <div>Error</div>}
                    {blog && (
                        <article>
                            <h2>{blog.title}</h2>
                            <p>Written by: {blog.author}</p>
                            <div>{blog.body}</div>
                            <Button
                                node="button"
                                style={{
                                    marginRight: "5px",
                                    backgroundColor: "#c51162",
                                }}
                                waves="light"
                                onClick={handleClick}
                            >
                                Delete
                            </Button>
                        </article>
                    )}
                </Card>
            </Col>
        </Row>
    );
};

export default BlogDetails;
