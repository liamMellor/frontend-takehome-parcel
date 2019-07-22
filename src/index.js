import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {

    render() {
        return <div>
            <div className="container">
                <h1>Hello Liam</h1>
            </div>
        </div>
    }

}

ReactDOM.render(<HelloMessage />, document.getElementById("app"));
