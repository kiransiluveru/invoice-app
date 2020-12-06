import { createStore } from 'redux';
import { combineReducers } from 'redux'; 
import {todoReducer as totalList} from '../reducers/TodoReducer';
import { invoiceReducer as invoice } from '../reducers/InvoiceReducer';

let initialState = {
    totalList:{
        todoList:[],
        completedList:[],
        typeoflist:'TODO LIST'
    },
    invoice:{
        all_invoices:[],
        all_users:[],
        logged_user_info:{ name: 'kiran', email:'sil@gmsil.com', id: 'sil@gmsil.com' }
    }
}

export let store = createStore( combineReducers ({totalList, invoice}),  initialState);
