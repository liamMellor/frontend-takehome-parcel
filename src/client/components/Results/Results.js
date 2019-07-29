import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import ResultCell from './ResultCell';

const ResultsStyled = styled.div`
    padding: 0 16px;
`;

class Results extends Component {

    render() {

        const { results } = this.props;

        return (
            <ResultsStyled
            >
                {results.map(result => <ResultCell result={result} key={result.sha}/>)}
            </ResultsStyled>
        );

    }

}

Results.propTypes = {
    results: PropTypes.array,
};

export default Results;
