import React from 'react'
import BtnDeleteTask from './BtnDeleteTask';
import BtnEditTask from './BtnEditTask';
import BtnMarkAsImportant from './BtnMarkAsImportant';
import BtnToggleCompleted from './BtnToggleCompleted';
const ActionTaskItem = ({task,isListInView1}) => {
  return (
    <>
    <div
    className={`flex border-dashed border-slate-200 dark:border-slate-700/[.3] ${
        isListInView1 ? 'items-center' : 'border-t-2  w-full pt-4 mt-4'
    }`}
    >
        <BtnToggleCompleted
        isListInView1={isListInView1}
        taskCompleted={task.completed}
        taskId={task.id}
        />
        <BtnMarkAsImportant
        taskId={task.id}
        taskImportant={task.important}
        />
        <BtnDeleteTask taskId={task.id}/>
        <BtnEditTask task={task}/>
    </div>
    </>
  )
}

export default ActionTaskItem