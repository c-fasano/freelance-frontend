import React from 'react';
// Components
import TaskActions from './TaskActions'

const TaskCard = (props) => {
  return (
    <>
      <p>{props.task.task}</p>
      <select name="task.status" onChange={(e) => props.handleSetStatus(props.task._id, e.target.value)}>
        <option value="Not-started">Not Started</option>
        <option value="In-Progress">In Progress</option>
        <option value="Complete">Complete</option>
      </select>
      <TaskActions 
        {...props}
      />
    </>
  )
}

export default TaskCard