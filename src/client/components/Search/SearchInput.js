import React  from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const SearchInputStyled = styled.input`
    height: 44px;
    width: 100%;
    padding: 0px 40px 0 24px;
    border: 2px solid ${props => props.theme.primary};
    border-top: none;
    border-right: none;
    border-radius: 0 0px 24px 24px;
    background-color: ${props => props.theme.background} ;
    color: ${props => props.theme.primary};
    font-size: 16px;
    outline: none;
`;

const SearchInput = ({ value, onChange }) => (
    <SearchInputStyled
        value={value}
        onChange={onChange}
    />
);

SearchInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default SearchInput;
