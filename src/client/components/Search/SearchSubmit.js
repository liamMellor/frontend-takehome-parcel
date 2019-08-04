import React  from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { MdSearch, MdAutorenew } from "react-icons/md";

const SearchSubmitStyled = styled.button`
    display: flex;
    position: absolute;
    padding: 0;
    right: 20px;
    height: 100%;
    border-radius: 0 24px 24px 0;
    font-size: 24px;
    background: none;
    border: none;
    color: ${props => props.theme.primary};
    cursor: pointer;
`;

const Loader = styled(MdAutorenew)`
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }
`;

const SearchSubmit = ({ loading }) => (
    <SearchSubmitStyled
        type="submit"
    >
        {loading ? <Loader /> : <MdSearch />}
    </SearchSubmitStyled>
);

SearchSubmit.propTypes = {
    loading: PropTypes.bool,
};

export default SearchSubmit;
