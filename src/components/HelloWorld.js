// the "variable" React holds the default export of the react module
// the "variable" Component holds an export under that name in the react module
import React, {Component} from 'react';

// Regular export must imported by using braces as follows:
// import { HelloWorld } from './HelloWorld';
/*
export function HelloWorld (props) {
  const salutation = props.isBye
    ? <b>Bye</b>
    : <i>Hello</i>
  const style = {
    color: 'deepskyblue',
    backgroundColor: 'whitesmoke',
    borderRadius: '3px',
    padding: '2px'
  }
  return (
    <p style={style}>{salutation} {props.name}!</p>
  );
}
*/
export class HelloWorld extends Component {
  constructor (props) {
    // Always call super with the props object
    // when using the constructor method
    super(props);
    // super calls the method of the same name in
    // its super class (i.e. super(props) calls Component's
    // constructor method with props)

    // Only when initializing state should your
    // mutate it. Otherwise, always use setState to change it.
    this.state = {
      isHovered: false
    };

    // sayBye here is a method of an instance of the HelloWorld constructor
    this.sayBye = this.sayBye.bind(this);
    this.sayHello = this.sayHello.bind(this);
  }

  // sayBye below is a prototype method of the HelloWorld
  // constructor
  sayBye () {
    this.setState({isHovered: true});
  }

  sayHello () {
    this.setState({isHovered: false});
  }
  // a class-based must inherit from React.Component
  // (or, Component if imported)

  // a class-based must have a render() method that
  // returns a React element which can be JSX
  render () {
    // in a class-based component props is a property
    // of this
    const salutation = this.state.isHovered
      ? <b>Bye</b>
      : <i>Hello</i>;
    const style = {
      color: 'deepskyblue',
      backgroundColor: 'whitesmoke',
      borderRadius: '3px',
      padding: '2px'
    }
    return (
      <p
        onMouseEnter={this.sayBye}
        onMouseLeave={this.sayHello}
        style={style}>{salutation} {this.props.name}!</p>
    );
  }
}

// Default exports can be imported without braces, and
// there can only be one default export like Highlanders
// import HelloWorld from './HelloWorld'
export default HelloWorld;
