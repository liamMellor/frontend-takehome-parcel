import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import SearchInput from "./SearchInput";
import SearchSubmit from "./SearchSubmit";

import { search } from "../../api/gemApi";

const SearchStyled = styled.form`
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    width: 300px;
`;

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        search(this.state.query).then(data => {
            this.props.onSearchComplete(data);
        })
    }

    onChange(event) {
        this.setState({ query: event.target.value });
    }

    render() {

        const { query } = this.state;

        return (
            <SearchStyled
                onSubmit={this.onSubmit}
            >
                <SearchInput
                    value={query}
                    onChange={this.onChange}
                />
                <SearchSubmit />
            </SearchStyled>
        );

    }

}

Search.propTypes = {
    onSearchComplete: PropTypes.func,
};

export default Search;
