import Menu from "./components/Menu/Menu"
import ModalCreateTask from "./components/Utilities/ModalTask"
import { useSelector,useDispatch } from "react-redux"
import { modalActions } from "./store/Modal.store";
import TasksSection from "./components/TasksSection/TasksSection";
import AccountData from "./components/AccountSection/AccountData";
import { tasksActions } from "./store/Tasks.store";
function App() {
  const modal = useSelector((state) =>state.modal);
  const dispatch = useDispatch();
  const closeModalCreateTask = () => {
    dispatch(modalActions.closeModalCreateTask());
  }
  const createNewTaskHandler = (task) => {
    dispatch(tasksActions.addNewTasks(task))
  }
  
  return (
    <div className="bg-slate-200 min-h-screen  text-slate-600 dark:bg-slate-900 dark:text-slate-400 xl:text-base sm:text-sm text-xs">
      {modal.modalCreateTaskOpen && (
        <ModalCreateTask
         onClose={closeModalCreateTask}
         onConfirm={createNewTaskHandler}
         nameForm="Add a task"
        />
      )}
      <Menu/>
      <TasksSection/>
      <AccountData/>
    </div>  
  )
}

export default App
