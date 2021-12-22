import React, { useState } from 'react';

const HourCounter = (props) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let totalHours = props.hours + parseInt(text)
    props.handleUpdateHours(totalHours)
    props.setHoursToggle(false)
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          required
          type="number"
          name="hoursWorked"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type='submit'
        >
          Add Hours
        </button>
      </form>
    </>
  )
}

export default HourCounter