import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

const SearchInputStyled = styled.input`
    height: 44px;
    width: 100%;
    padding: 0px 24px;
    border-radius: 24px;
    border: 1px solid ${props => props.theme.border};
`;

class SearchInput extends Component {

    render() {
        return (
            <SearchInputStyled
                placeholder="Search for gems"
            />
        );
    }

}

export default SearchInput;
