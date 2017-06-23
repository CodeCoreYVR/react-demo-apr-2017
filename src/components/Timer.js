import React, {Component} from 'react';

class Timer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      currentDate: new Date().toString()
    };
  }

  componentDidMount () {
    this.intervalId = setInterval(() => {
      this.setState({currentDate: new Date().toString()})
    }, 1000);
  }

  componentWillUnmount () {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  render () {
    return (
      <p>{this.state.currentDate}</p>
    );
  }
}

export default Timer;
