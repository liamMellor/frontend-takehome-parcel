import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

// components
import SearchInput from "./SearchInput";
import SearchSubmit from "./SearchSubmit";

// services
import { search } from "../../api/gemApi";

const SearchStyled = styled.form`
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
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
            </SearchStyled>
        );

    }

}

Search.propTypes = {
    onSearchComplete: PropTypes.func,
};

export default Search;
