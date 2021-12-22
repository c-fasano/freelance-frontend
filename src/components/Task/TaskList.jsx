import React from 'react';
//Components
import TaskCard from './TaskCard'

const TaskList = (props) => {
  return (
    <>
      {props.tasks?.map((task) => (
        <TaskCard 
          {...props}
          task={task}
          key={task._id}
        />
      ))
      }
    </>
  )
}

export default TaskList