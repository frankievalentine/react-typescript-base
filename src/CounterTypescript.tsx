import * as React from "react";

import CountTypescript from "./CountTypescript";

interface Props {}

interface State {
    count: number;
}

export default class Counter extends React.Component<Props, State> {
    state: State = {
        count: 0
    };

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
        return (
            <div>
                <CountTypescript count={this.state.count} />
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}
