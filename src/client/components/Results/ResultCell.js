import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import { MdFileDownload, MdFavorite } from "react-icons/md";

const ResultCellStyled = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 40px;
    a {
        text-decoration: none;
        color: ${props => props.theme.primary};
    }
    /* min-width 568px */
    @media ${props => props.theme.phoneBreak} {
        flex-flow: row nowrap;
        align-items: center;
    }
`;

const ResultCellInfo = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    a:hover {
        text-decoration: underline;
    }
    h3, div {
        margin: 0 0 8px;
    }
`;

const ResultCellDescription = styled.div`
    line-height: 1.5;
`;

const ResultCellIcons = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    width: 100%;
    font-size: 24px;
    margin-top: 4px;
    div, a {
        display: flex;
        align-items: center;
        margin-right: 24px;
    }
    /* min-width 568px */
    @media ${props => props.theme.phoneBreak} {
        justify-content: flex-end;
        align-items: center;
        width: inherit;
        margin: 0 0 0 32px;
        div, a {
            margin: 0 0 0 24px;
        }
    }
`;

class ResultCell extends Component {

    render() {

        const { result } = this.props;

        return (
            <ResultCellStyled>
                <ResultCellInfo>
                    <h3>
                        <a
                            href={result.project_uri}
                            target="_blank"
                        >
                            {result.name}
                        </a>
                    </h3>
                    <ResultCellDescription>{result.info}</ResultCellDescription>
                    <div>- {result.authors}</div>
                </ResultCellInfo>
                <ResultCellIcons>
                    <div>v{result.version}</div>
                    <a href={result.gem_uri}>
                        <MdFileDownload />
                    </a>
                    <div>
                        <MdFavorite />
                        {/* <MdFavorite stroke="red" stroke-width="3" /> */}
                    </div>
                </ResultCellIcons>
            </ResultCellStyled>
        );

    }

}

ResultCell.propTypes = {
    result: PropTypes.object,
};

export default ResultCell;
