import { ADD_TODO, DELETE_TODO, COMPLETED_TASK, FILTERTASK, EDIT_PRIORITY, ADD_INVOICE, UPDATE_INVOICE } from "../actionconstant/ActionConstant";

export function addTodo(dataObj)
{
    return {
        type:ADD_TODO,
        dataObj:dataObj
    }
}
export function deleteTodo(index){
    return{
        type:DELETE_TODO,
        index:index,
    }
}
export function editPriority(index,priority){
    return{
        type:EDIT_PRIORITY,
        index:index,
        priority:priority,
    }
}
export function completedTask(index){
    return{
        type:COMPLETED_TASK,
        index:index,

    }
}
export function filterTask(filtertype)
{
    return{
        type:FILTERTASK,
        filtertype:filtertype
    }
}

export function addInvoice(dataObj){
    return {
        type: ADD_INVOICE,
        dataObj: dataObj
    }
}

export function updateInvoice(dataObj){
    return {
        type: UPDATE_INVOICE,
        dataObj: dataObj
    }
}