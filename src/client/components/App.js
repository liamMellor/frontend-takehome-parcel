import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const AppStyled = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: Helvetica;
    background: ${props => props.theme.background};
    color: ${props => props.theme.primary};
`;

class App extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <AppStyled>
                    <h1>Liam</h1>
                </AppStyled>
            </ThemeProvider>
        );
    }

}

export default App;
