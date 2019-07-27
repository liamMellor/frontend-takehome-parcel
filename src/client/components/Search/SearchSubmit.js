import React  from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";

const SearchSubmitStyled = styled.button`
    display: flex;
    position: absolute;
    padding: 0;
    right: 12px;
    height: 100%;
    border-radius: 0 24px 24px 0;
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
`;

const SearchSubmit = () => (
    <SearchSubmitStyled
        type="submit"
    >
        <MdSearch /> 
    </SearchSubmitStyled>
);

export default SearchSubmit;
