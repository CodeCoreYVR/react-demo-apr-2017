import React, {Component} from 'react';
import GuestBookEntries from './GuestBookEntries';
import GuestBookForm from './GuestBookForm';

class GuestBook extends Component {
  constructor (props) {
    super(props);

    this.state = {
      entries: props.entries || [],
      newEntry: {}
    };
    this.saveNewEntry = this.saveNewEntry.bind(this);
    this.addNewEntry = this.addNewEntry.bind(this);
  }

  saveNewEntry(entry) {
    const {newEntry} = this.state;
    this.setState({newEntry: Object.assign({}, newEntry, entry)});
  }

  addNewEntry() {
    const {entries, newEntry} = this.state;
    newEntry.date = new Date();
    this.setState({entries: [...entries, newEntry]})
  }

  render () {
    return (
      <div className='GuestBook'>
        <GuestBookEntries entries={this.state.entries} />
        <GuestBookForm
          onSubmit={this.addNewEntry}
          onChange={this.saveNewEntry} />
      </div>
    );
  }
}

export default GuestBook;
