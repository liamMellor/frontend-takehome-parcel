import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";

import favoritesApi from '../api/favoritesApi';

import Tabs from './Tabs';
import Search from './Search';
import Results from './Results';

const AppStyled = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin: 0 auto;
    font-family: ${props => props.theme.font};
    height: ${props => props.pristine ? `100vh` : `100%`};
    padding: ${props => props.pristine ? `0 20px` : `237px 20px 0`};
    background: ${props => props.theme.background};
    color: ${props => props.theme.primary};
    @media (min-width: 425px) {
        /* Special case where header copy break to next line on mobile */
        padding: ${props => props.pristine ? `0 20px` : `195px 20px 0`};
    }
    /* min-width 568px */
    @media ${props => props.theme.phoneBreak} {
        width: 75%;
        max-width: 768px;
    }
`;

const Header = styled.div`
    position: ${props => props.pristine ? `relative` : `fixed`};
    padding: ${props => props.pristine ? '0' : '24px 0'};
    background: ${props => props.pristine ? `transparent` : props.theme.background};
    width: ${props => props.pristine ? `inherit` : 'calc(100% - 40px)'};
    max-width: 768px;
    top: 0;
    @media ${props => props.theme.phoneBreak} {
        width: ${props => props.pristine ? `100%` : '75%'};
    }
`;

const Heading = styled.h1`
    margin: 0 0 10px;
`;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
            favorites: [],
            pristine: true,
            activeTab: 0,
        };
        this.onSearchComplete = this.onSearchComplete.bind(this);
        this.onTabClick = this.onTabClick.bind(this);
        this.onFavoriteClick = this.onFavoriteClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            favorites: favoritesApi.getArray(),
        });
    }

    onSearchComplete(results) {
        this.setState({
            results,
            activeTab: 0,
            pristine: false,
        });
    }

    onTabClick(tabIndex) {
        this.setState({
            activeTab: tabIndex,
            pristine: false,
        });
    }

    onFavoriteClick(result) {
        if (result.favorite) {
            favoritesApi.remove(result)
        }
        else {
            favoritesApi.set(result);
        }
        this.setState({
            favorites: favoritesApi.getArray(),
        });
    }

    render() {

        const { results, favorites, pristine, activeTab } = this.state;
        const list = activeTab === 0 ? results : favorites;

        return (
            <ThemeProvider
                theme={theme}
            >
                <AppStyled
                    pristine={pristine}
                >
                    <Header
                        pristine={pristine}
                    >
                        <Heading>Search for Ruby Gems</Heading>
                        <Tabs
                            activeTab={activeTab}
                            onTabClick={this.onTabClick}
                        />
                        <Search
                            onSearchComplete={this.onSearchComplete}
                        />
                    </Header>
                    { !pristine ?
                        <Results
                            results={list}
                            onFavoriteClick={this.onFavoriteClick}
                        />
                        :
                        null
                    }
                </AppStyled>
            </ThemeProvider>
        );
    }

}

export default App;
