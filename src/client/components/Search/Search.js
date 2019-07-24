import React, { Component } from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";

const SearchStyled = styled.form`
    display: flex;
    flex-flow: row nowrap;
    width: 300px;
`;

class Search extends Component {

    render() {
        return (
            <SearchStyled>
                <SearchInput />
            </SearchStyled>
        );
    }

}

export default Search;
