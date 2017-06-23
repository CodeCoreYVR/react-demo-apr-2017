import React, {Component} from 'react';

class Search extends Component {
  constructor (props) {
    super(props);

    this.state = {
      filter: ''
    }
    this.updateFilter = this.updateFilter.bind(this);
  }

  updateFilter (event) {
    this.setState({filter: event.currentTarget.value});
  }

  render () {
    const {values = []} = this.props;

    return (
      <div className='Search'>
        <input
          onChange={this.updateFilter}
          type='text' />
        <div>
          {
            values
            .filter(value => value.indexOf(this.state.filter) !== -1)
            .map(
              (value, index) => <p key={index}>{value}</p>
            )
          }
        </div>
      </div>
    );
  }
}

export default Search;
