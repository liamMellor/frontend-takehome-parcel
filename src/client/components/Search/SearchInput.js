import React  from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const SearchInputStyled = styled.input`
    height: 44px;
    width: 100%;
    padding: 0px 40px 0 24px;
    border-radius: 24px;
    background-color: ${props => props.theme.background} ;
    border: 2px solid ${props => props.theme.primary};
    color: ${props => props.theme.primary};
    font-size: 16px;
    outline: none;
    &:focus {
        border-color: rgba(72, 74, 179, .7);
        box-shadow: 0 1px 10px 0 rgba(32,33,36,0.28);
    }
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
