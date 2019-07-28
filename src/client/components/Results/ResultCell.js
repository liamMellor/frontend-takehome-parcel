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
                // Name
                // info
                // authors
                // docs_uri
                // gem_uri (download)
                // project_uri (link)
                // version
            </ResultCellStyled>
        );

    }

}

ResultCell.propTypes = {
    result: PropTypes.object,
};

export default ResultCell;
