import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import ResultCell from './ResultCell';

const ResultsStyled = styled.div`
    padding: 0 16px;
`;

class Results extends Component {

    render() {

        const { results, onFavoriteClick } = this.props;

        return (
            <ResultsStyled>
                {results.map(result => (
                    <ResultCell
                        key={result.sha}
                        result={result}
                        onFavoriteClick={onFavoriteClick}
                    />
                ))}
            </ResultsStyled>
        );

    }

}

Results.propTypes = {
    results: PropTypes.array,
    onFavoriteClick: PropTypes.func,
};

export default Results;
