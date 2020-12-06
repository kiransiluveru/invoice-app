import { ADD_INVOICE,ADD_TODO, DELETE_TODO, EDIT_PRIORITY, COMPLETED_TASK, FILTERTASK, UPDATE_INVOICE } from "../actionconstant/ActionConstant";

export function invoiceReducer(currentState={},action)
{
    switch(action.type)
    {
        case ADD_INVOICE:
            const all_invoices=[... currentState.all_invoices]
            console.log("dataob",action.dataObj);
            all_invoices.push(action.dataObj);
            console.log('Before all invoices', all_invoices);
            return Object.assign({},currentState,{all_invoices:all_invoices})

        case UPDATE_INVOICE:
            const current_invoices=[... currentState.all_invoices]
            let updated_invoice = {...action.dataObj};
            let id = updated_invoice.id;
            let index = current_invoices.findIndex((obj) => obj.id === id);
            console.log(' updating on  Index got reducer', index);
            if(index !==-1) {
                current_invoices.splice(index,1);
                current_invoices.push(updated_invoice);
            }
            return Object.assign({},currentState,{all_invoices:current_invoices});
        // case EDIT_PRIORITY:
        //     console.log(action.priority);
        //     const todoedit=[... currentState.todoList];
        //     todoedit[action.index].priority=action.priority
        // return Object.assign({},currentState,{todoList:todoedit})

        // case COMPLETED_TASK:
        //     const ctl=[...currentState.completedList]
        //     const tdl=[... currentState.todoList];
        //     ctl.push(tdl[action.index]);
        //     tdl.splice(action.index,1);
        //     return Object.assign({},currentState,{todoList:tdl},{completedList:ctl})

        // case FILTERTASK:
        // const tempflag=action.filtertype
        // return Object.assign({},currentState,{typeoflist:tempflag})
        default :
        {
            return currentState;
        }

    }
}