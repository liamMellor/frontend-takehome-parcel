import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import ListItem from './ListItem';

const ListStyled = styled.div`
    padding: 0 16px;
`;

const NoItems = styled.div`
    text-align: center;
    margin-top: 40px;
`;

const List = ({ items, onFavoriteClick }) => (
    <ListStyled>
        {!items.length ?
            <NoItems>There's nothing here!</NoItems>
            :
            null
        }
        {items.map(item => (
            <ListItem
                key={item.sha}
                item={item}
                onFavoriteClick={onFavoriteClick}
            />
        ))}
    </ListStyled>
);

List.propTypes = {
    items: PropTypes.array,
    onFavoriteClick: PropTypes.func,
};

export default List;
