import { configureStore} from "@reduxjs/toolkit";
import modalReducer from './Modal.store';
import menuReducer from './Menu.store';
import tasksReducer,{tasksMiddleware} from './Tasks.store';
const store = configureStore({
    reducer:{
        tasks: tasksReducer,
        modal:modalReducer,
        menu:menuReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tasksMiddleware)
})
 export default store;