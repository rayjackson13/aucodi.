import React from 'react';
import { timeToString } from 'helpers/time';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            started: new Date()
        };
    }

    componentDidMount() {
        this.timer = setInterval(this.tick, 10);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick = () => {
        const { started } = this.state;
        this.setState({
            time: new Date() - started
        });
    }

    render() {
        const { time } = this.state;
        const { classes = '' } = this.props;
    
        return (
            <p className={ classes }>{ timeToString(time) }</p>
        );
    }
}

export default Counter;