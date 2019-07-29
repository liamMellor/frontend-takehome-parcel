import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";

import Search from './Search';
import Results from './Results';

const AppStyled = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin: 0 auto;
    height: ${props => props.pristine ? `100vh` : `100%`};
    padding: ${props => props.pristine ? `0 20px` : `192px 20px 0`};
    background: ${props => props.theme.background};
    color: ${props => props.theme.primary};
    font-family: Helvetica;
    @media (min-width: 425px) {
        /* Special case where header copy break to next line on mobile */
        padding: ${props => props.pristine ? `0 20px` : `149px 20px 0`};
    }
    @media ${props => props.theme.phoneBreak} {
        /* min-width 568px */
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
    font-family: ${props => props.theme.font};
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
                <AppStyled pristine={pristine}>
                    <Header pristine={pristine}>
                        <Heading>Search for Ruby Gems</Heading>
                        <Search
                            onSearchComplete={this.onSearchComplete}
                        />
                    </Header>
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
