import { Row, Col, Card, Icon } from "react-materialize";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Row>
            <Col m={6} s={12}>
                <Card
                    className="pink darken-4"
                    closeIcon={<Icon>close</Icon>}
                    revealIcon={<Icon>more_vert</Icon>}
                    textClassName="white-text"
                >
                    <div>
                        <Icon large className="material-icons prefix">
                            not_interested
                        </Icon>
                        <h2>Sorry</h2>
                        <h5>
                            <p>
                                The page you are looking for is not available...
                            </p>
                        </h5>
                        <Link to="/">
                            <h5>Back to the Homepage...</h5>
                        </Link>
                    </div>
                </Card>
            </Col>
        </Row>
    );
};

export default NotFound;
