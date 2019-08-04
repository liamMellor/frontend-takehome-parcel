import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import ResultCell from './ResultCell';

const ResultsStyled = styled.div`
    padding: 0 16px;
`;

const NoResults = styled.div`
    text-align: center;
    margin-top: 40px;
`;

const Results = ({ results, onFavoriteClick }) => (
    <ResultsStyled>
        {!results.length ?
            <NoResults>There's nothing here!</NoResults>
            :
            null
        }
        {results.map(result => (
            <ResultCell
                key={result.sha}
                result={result}
                onFavoriteClick={onFavoriteClick}
            />
        ))}
    </ResultsStyled>
);

Results.propTypes = {
    results: PropTypes.array,
    onFavoriteClick: PropTypes.func,
};

export default Results;
