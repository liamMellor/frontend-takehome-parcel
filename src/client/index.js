import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const App = styled.div`
    height: 100%;
    background: #EEEEEE;
    font-family: Georgia;
    padding: 50px;
`;

class HelloMessage extends React.Component {

    render() {
        return (
            <App>
                <h1>Liam</h1>
            </App>
        );
    }

}

ReactDOM.render(<HelloMessage />, document.getElementById("app"));
