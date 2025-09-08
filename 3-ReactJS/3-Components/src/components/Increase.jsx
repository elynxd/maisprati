import { Component } from "react";

export class Increase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increase() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <h1>Contador: {this.state.count}</h1>
                <button onClick={() => this.increase()}>
                    Incrementar
                </button>
            </div>
        );
    }
}
