import React  from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const SearchInputStyled = styled.input`
    height: 44px;
    width: 100%;
    padding: 0px 40px 0 24px;
    border-radius: 24px;
    border: 1px solid ${props => props.theme.border};
`;

const SearchInput = ({ value, onChange }) => (
    <SearchInputStyled
        placeholder="Search for gems"
        value={value}
        onChange={onChange}
    />
);

SearchInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default SearchInput;
