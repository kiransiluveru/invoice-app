import { ADD_TODO, DELETE_TODO, EDIT_PRIORITY, COMPLETED_TASK, FILTERTASK } from "../actionconstant/ActionConstant";

export function userReducer(currentState={},action)
{
    switch(action.type)
    {
        case ADD_TODO:
            const todoList=[... currentState.todoList]
            todoList.push(action.dataObj);
            console.log("dataob",action.dataObj);
            return Object.assign({},currentState,{todoList:todoList})

        case DELETE_TODO:
            const todoListdel=[... currentState.todoList];
            todoListdel.splice(action.index,1)
            return Object.assign({},currentState,{todoList:todoListdel})
        case EDIT_PRIORITY:
            console.log(action.priority);
            const todoedit=[... currentState.todoList];
            todoedit[action.index].priority=action.priority
        return Object.assign({},currentState,{todoList:todoedit})

        case COMPLETED_TASK:
            const ctl=[...currentState.completedList]
            const tdl=[... currentState.todoList];
            ctl.push(tdl[action.index]);
            tdl.splice(action.index,1);
            return Object.assign({},currentState,{todoList:tdl},{completedList:ctl})
        
        case FILTERTASK:
        const tempflag=action.filtertype
        return Object.assign({},currentState,{typeoflist:tempflag})
        default :
        {
            return currentState;
        }

    }
}