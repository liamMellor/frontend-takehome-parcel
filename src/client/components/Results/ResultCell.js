import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";



const ResultCellStyled = styled.div`

`;

class ResultCell extends Component {

    render() {

        const { result } = this.props;

        return (
            <ResultCellStyled
            >
                <div>{result.name}</div>
            </ResultCellStyled>
        );

    }

}

ResultCell.propTypes = {
    result: PropTypes.object,
};

export default ResultCell;
