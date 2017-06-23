import React from 'react';

function GuestBookForm (props) {
  const {onChange = () => {}, onSubmit = () => {}} = props;

  const handleChange = event => {
    const {currentTarget} = event;
    onChange({[currentTarget.id]: currentTarget.value});
  }

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form className='GuestBookForm' onSubmit={handleSubmit}>
      <div style={style.formControl}>
        <label htmlFor='message'>Message</label>
        <textarea
          onChange={handleChange}
          id='message'
          type='text' />
      </div>

      <div style={style.formControl}>
        <label htmlFor='name'>Name</label>
        <input
          onChange={handleChange}
          id='name'
          type='text' />
      </div>

      <div style={style.formControl}>
        <input type='submit' value='Submit' />
      </div>
    </form>
  );
}

const style = {
  formControl: {
    display: 'flex',
    flexDirection: 'column'
  }
}

export default GuestBookForm;
