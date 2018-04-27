import React from "react";
import { Row, Col } from "../../components/Grid";
import Wrapper from "../../components/Wrapper";

const NoMatch = () => (
    <Wrapper>
        <Row>
            <Col size="md-12">
                <h1>404 Page Not Found</h1>
                <h1>
                    <span role="img" aria-label="Face With Rolling Eyes Emoji">
                        🙄
                    </span>
                </h1>
            </Col>
        </Row>
    </Wrapper>
);

export default NoMatch;