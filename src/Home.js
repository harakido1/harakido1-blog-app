import useFetch from "./useFetch";
import BlogList from "./BlogList";
import { Row, Col, Card, Icon } from "react-materialize";

const Home = () => {
    const {
        data: blogs,
        isPending,
        error,
    } = useFetch("http://localhost:8000/blogs");

    return (
        <Row>
            <Col m={6} s={12}>
                <Card
                    className="pink darken-4"
                    closeIcon={<Icon>close</Icon>}
                    revealIcon={<Icon>more_vert</Icon>}
                    textClassName="white-text"
                >
                    {error && <div>{error}</div>}
                    {isPending && <div>Loading...</div>}
                    {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
                </Card>
            </Col>
        </Row>
    );
};

export default Home;
