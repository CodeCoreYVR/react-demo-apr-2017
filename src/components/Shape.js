import React, {Component} from 'react';

const COLORS = ['Magenta', 'Yellow', 'Cyan', 'Lime'];

class Shape extends Component {
  constructor (props) {
    super(props);

    this.state = {
      colorIndex: 0
    };

    this.cycleColor = this.cycleColor.bind(this);
  }

  cycleColor () {
    const {colorIndex} = this.state;
    this.setState({colorIndex: (colorIndex + 1) % COLORS.length});
  }

  render () {
    const {props} = this;
    const style = {
      backgroundColor: 'blue',
      height: '30px',
      width: '30px'
    };

    style.backgroundColor = COLORS[this.state.colorIndex];
    if (props.type === 'circle') {
      style.borderRadius = '999999px';
    }
    if (props.type === 'diamond') {
      style.transform = 'rotateZ(45deg) scale(0.8)';
    }

    return (
      <div
        onClick={this.cycleColor}
        style={style} className='shape' />
    );
  }
}

/*
function Shape (props) {
  const style = {
    backgroundColor: 'blue',
    height: '30px',
    width: '30px'
  };

  style.backgroundColor = props.color || 'blue';
  if (props.type === 'circle') {
    style.borderRadius = '999999px';
  }
  if (props.type === 'diamond') {
    style.transform = 'rotateZ(45deg) scale(0.8)';
  }

  return (
    <div style={style} className='shape' />
  );
}
*/


export default Shape;
