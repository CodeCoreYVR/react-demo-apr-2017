import React from 'react';

/*
[
  {name: 'Jon Snow', body: 'Winter has come.', date: new Date()},
  {name: 'Jon Snow', body: 'Winter has come.', date: new Date()},
  {name: 'Jon Snow', body: 'Winter has come.', date: new Date()},
]
*/
// Here we destructure all the properties of props instead
// of referring to them through a props argument
function GuestBookEntry ({name, body, date, isEven = false}) {
  return (
    <div
      style={{
        backgroundColor: isEven ? 'whitesmoke' : 'white'
      }}
      className="GuestBookEntry">
      <p>{body}</p>
      <div><strong>{name}</strong></div>
      <div><em>{date.toString()}</em></div>
    </div>
  )
}

function GuestBookEntries (props) {
  const {entries = []} = props;
  const entriesComponent = entries.map(
    (entry, index) =>
      <GuestBookEntry key={index} {...entry} isEven={index % 2 == 0} />
  );
  // You can use spread (...) to pass all properties of an object
  // as props to a component as above ☝️
  // <GuestBookEntry key={index} name={entry.name} body={entry.body} date={entry.date} />

  return (
    <div className='GuestBookEntries'>
      { entriesComponent }
    </div>
  );
}

export default GuestBookEntries;
