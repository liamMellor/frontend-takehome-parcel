import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

import Search from './Search';

const AppStyled = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    font-family: Helvetica;
    background: ${props => props.theme.background};
    color: ${props => props.theme.primary};
`;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <AppStyled>
                    <Search />
                </AppStyled>
            </ThemeProvider>
        );
    }

}

export default App;
