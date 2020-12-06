import { createStore } from 'redux';
import { combineReducers } from 'redux'; 
import { invoiceReducer as invoice } from '../reducers/InvoiceReducer';

let initialState = {
    invoice:{
        all_invoices:[],
        all_users:[],
        logged_user_info:{ name: 'kiran', email:'siluverukirankumar6@gmail.com', id: 'kiransiluveru' }
    }
}

export let store = createStore( combineReducers ({invoice}),  initialState);
