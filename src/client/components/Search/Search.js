import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import { search } from "../../api/gemApi";

import SearchInput from "./SearchInput";
import SearchSubmit from "./SearchSubmit";

const SearchStyled = styled.form`
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
`;

// This is used to fake the appearance of the top right
// curved border on the search input since the actual input doesnt have a top border
const TransparentBorder = styled.div`
    position: absolute;
    /* Subtract 6px to account for the 2px borders *3 from the tabs */
    width: calc(50% - 6px);
    height: 100%;
    right: 0;
    background: transparent;
    border-top: 2px solid ${props => props.theme.primary};
    border-right: 2px solid ${props => props.theme.primary};
    border-radius: 0 24px 24px 0px;
    top: -2px;
    pointer-events: none;
`;

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            loading: false,
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({ loading: true });
        search(this.state.query).then(data => {
            this.setState({ loading: false });
            this.props.onSearchComplete(data);
        });
    }

    onChange(event) {
        this.setState({ query: event.target.value });
    }

    render() {

        const { query, loading } = this.state;

        return (
            <SearchStyled
                onSubmit={this.onSubmit}
            >
                <SearchInput
                    value={query}
                    onChange={this.onChange}
                />
                <SearchSubmit
                    loading={loading}
                />
                <TransparentBorder />
            </SearchStyled>
        );

    }

}

Search.propTypes = {
    onSearchComplete: PropTypes.func,
};

export default Search;
