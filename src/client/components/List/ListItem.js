import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

import { MdFileDownload, MdFavorite } from "react-icons/md";

const ListItemStyled = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 40px;
    a {
        text-decoration: none;
        color: ${props => props.theme.primary};
    }
    @media ${props => props.theme.phoneBreak} {
        flex-flow: row nowrap;
        align-items: center;
    }
`;

const Info = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    a:hover {
        text-decoration: underline;
    }
    h3, div {
        margin: 0 0 8px;
    }
`;

const Description = styled.div`
    line-height: 1.5;
`;

const Icons = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    width: 100%;
    font-size: 24px;
    margin-top: 4px;
    div, a {
        display: flex;
        align-items: center;
        margin-right: 24px;
    }
    @media ${props => props.theme.phoneBreak} {
        justify-content: flex-end;
        align-items: center;
        width: inherit;
        margin: 0 0 0 32px;
        div, a {
            margin: 0 0 0 24px;
        }
    }
`;

const FavoriteIcon = styled(MdFavorite)`
    color: ${props => props.favorite ? props.theme.primary : props.theme.background};
    cursor: pointer;
`;

class ListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // Not ideal using a state prop to manage the favoriting but it's better than
            // re-rendering the entire list when an item is favorited or un-favorited
            favorite: props.item.favorite,
        };
        this.onFavoriteClick = this.onFavoriteClick.bind(this);
    }

    onFavoriteClick() {
        const { onFavoriteClick, item } = this.props;
        onFavoriteClick({
            ...item,
            favorite: this.state.favorite,
        });
        this.setState({ favorite: !this.state.favorite });
    }

    render() {

        const { item } = this.props;
        const { favorite } = this.state;

        // This needs to be done here as stroke and stokeWidth arent css props
        // Toggles heart fill and border for favorite state
        const favoriteSvgProps = !favorite ? {
            stroke: '#484ab3',
            strokeWidth: 2,
        } : {};

        return (
            <ListItemStyled>
                <Info>
                    <h3>
                        <a
                            href={item.project_uri}
                            target="_blank"
                        >
                            {item.name}
                        </a>
                    </h3>
                    <Description>{item.info}</Description>
                    <div>- {item.authors}</div>
                </Info>
                <Icons>
                    <div>v{item.version}</div>
                    <a
                        href={item.gem_uri}
                    >
                        <MdFileDownload />
                    </a>
                    <div>
                        <FavoriteIcon
                            // We cannot pass a bool here or the DOM will throw a warning
                            // Numbers work as well for styled component prop and suppress the dom warning
                            favorite={favorite ? 1 : 0}
                            onClick={this.onFavoriteClick}
                            {...favoriteSvgProps}
                        />
                    </div>
                </Icons>
            </ListItemStyled>
        );

    }

}

ListItem.propTypes = {
    item: PropTypes.object,
    onFavoriteClick: PropTypes.func,
};

export default ListItem;
