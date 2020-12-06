import { ADD_INVOICE, UPDATE_INVOICE } from "../ActionConstants/ActionConstant";

export function invoiceReducer(currentState={},action)
{
    switch(action.type)
    {
        case ADD_INVOICE:
            const all_invoices=[... currentState.all_invoices]
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
        default : {
            return currentState;
        }

    }
}