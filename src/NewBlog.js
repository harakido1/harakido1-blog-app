import { Row, Col, Card, Icon, Button } from "react-materialize";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewBlog = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);
        setTitle("");
        setBody("");
        setAuthor("");

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            console.log("new blog posted successfully");
            setIsPending(false);
            history.push("/");
        });
    };

    return (
        <Row>
            <Col m={12} s={12}>
                <Card
                    actions={[]}
                    className="pink darken-4"
                    closeIcon={<Icon>close</Icon>}
                    revealIcon={<Icon>more_vert</Icon>}
                    textClassName="white-text"
                >
                    <h2>To Add a New Blog, Click Input Line</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-field">
                            <i className="material-icons prefix">title</i>
                            <input
                                type="text"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <label>Blog title:</label>
                        </div>
                        <div className="input-field">
                            <i className="material-icons prefix">message</i>
                            <textarea
                                className="materialize-textarea"
                                required
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                            ></textarea>
                            <label>Blog body:</label>
                        </div>
                        <div className="input-field">
                            <i className="material-icons prefix">edit</i>
                            <input
                                type="text"
                                required
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                            <label>Blog author:</label>
                        </div>
                        {!isPending && (
                            <Button
                                node="button"
                                type="submit"
                                waves="light"
                                style={{ backgroundColor: "#c51162" }}
                            >
                                Submit
                                <Icon right>send</Icon>
                            </Button>
                        )}
                        {isPending && (
                            <Button
                                disabled
                                node="button"
                                type="submit"
                                waves="light"
                                style={{ backgroundColor: "#c51162" }}
                            >
                                Adding blog...
                                <Icon right>send</Icon>
                            </Button>
                        )}
                    </form>
                </Card>
            </Col>
        </Row>
    );
};

export default NewBlog;
