import { ADD_INVOICE, UPDATE_INVOICE } from "../ActionConstants/ActionConstant";

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