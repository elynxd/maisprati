import { Component } from "react";

export class LifeCycleClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0}
    }

    componentDidMount() {
        console.log("Component mounted!")
    }

    componentDidUpdate(prevProps, prevStates) {
        console.log("Component updated, previous props and states", prevProps, prevStates)
    }

    componentWillUnmount() {
        console.log("Component will be unmounted!")
    }

    increaseCount = () => {
        this.setState({count: this.state.count +1})
    }

    render(){
        return (
            <>
            <h2>Count: {this.state.count}</h2>
            <button onClick={this.increaseCount}>Increase +1</button>
            </>
        )
    }

}