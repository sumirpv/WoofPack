import React from "react";
import { Roww, Col } from "../../components/Grid";
import Wrapper from "../../components/Wrapper";

const NoMatch = () => (
    <Wrapper>
        <Roww>
            <Col size="md-12">
                <h1>
                    <img src="https://qph.fs.quoracdn.net/main-qimg-1374b6fde81b047e717bdb09aa86bb72" alt="Sorry Page not found" style={{backgroundSize: "cover"}}/>  
                </h1>
            </Col>
        </Roww>
    </Wrapper>
);

export default NoMatch;