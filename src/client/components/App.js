import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";

import Search from './Search';
import Results from './Results';

const AppStyled = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    height: ${props => props.pristine ? `100vh` : `100%`};
    padding: ${props => props.pristine ? `0 20px` : `20px 20px 0`};
    margin: 0 auto;
    font-family: Helvetica;
    background: ${props => props.theme.background};
    color: ${props => props.theme.primary};

    /* min-width 568px */
    @media ${props => props.theme.phoneBreak} {
        width: 75%;
        max-width: 768px;
    }

    /* min-width 768pxpx */
    @media ${props => props.theme.tabletBreak} {
    }

`;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
            favorites: [],
            pristine: true,
        }
        this.onSearchComplete = this.onSearchComplete.bind(this);
    }

    onSearchComplete(results) {
        this.setState({
            results,
            pristine: false,
        });
    }

    render() {

        const { results, pristine } = this.state;

        return (
            <ThemeProvider theme={theme}>
                <AppStyled
                    pristine={pristine}
                >
                    <Search
                        onSearchComplete={this.onSearchComplete}
                    />
                    <Results
                        results={results}
                    />
                    {/* <Favorites /> */}
                </AppStyled>
            </ThemeProvider>
        );
    }

}

export default App;
