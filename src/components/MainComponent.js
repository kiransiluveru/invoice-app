import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import uuid from 'uuid-random';
import InvoiceComponent from './InvoiceComponent';
import { addInvoice,  updateInvoice } from '../actioncreator/ActionCreator';

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPdf: false,
            item_name: '',
            item_description: '',
            number_of_units: '',
            quantity: '',
            unit_price: '',
            discount: '',
            tax: '',
            isEdit: false,
            currentEditingId:'',
        }
    }
    changeAll = (event) => {
        console.log('event.target.value ', event.target.value, ' <<< ', event.target.name);
        this.setState({ [event.target.name]: event.target.value });
    }

    addInvoice = () => {
        console.log('adding invoice', this.state);
        const details = _.pick(this.state, ['item_name', 'item_description', 'number_of_units',
            'quantity', 'unit_price', 'discount', 'tax']);
        const { logged_user_info } = this.props;
        let uuid_val = this.state.isEdit ? this.state.currentEditingId: uuid();
        let invoiceDetails = {...details, id: uuid_val,
            created_by: _.get(logged_user_info, 'id', 'systemuser@gmail.com')
        };

        if(this.state.isEdit){
            this.props.dispatch(updateInvoice(invoiceDetails));
        } else{
            this.props.dispatch(addInvoice(invoiceDetails));
        }
        this.setState({item_name: '',item_description: '',number_of_units: '',quantity: '',unit_price: '',discount: '',
        tax: '', isEdit: false, currentEditingId:'' });
    }

    onEditClick = (id) => {
        console.log('Edit occured', id);
        const {all_invoices} = this.props;
        let index = all_invoices.findIndex((obj) => obj.id === id);
        const details = _.pick(all_invoices[index], ['item_name', 'item_description', 'number_of_units',
            'quantity', 'unit_price', 'discount', 'tax', 'id']);
        this.setState({...details, isEdit: true, currentEditingId: id });
    }

    render() {
        const { item_name, item_description,
            number_of_units, quantity, unit_price,
            discount, tax } = this.state;
        console.log("sdsd", this.props.all_invoices, this.state);
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">Navbar</span>
                </nav>
                <div className="container p-2">
                    <div className='row'>
                        <div className="col-sm-3 p-2">
                            <input required name="item_name" type="text" value={item_name} placeholder="Item Name" onChange={this.changeAll} />
                        </div>
                        <div className="col-sm-3 p-2">
                            <input required name="item_description" type="text"  value={item_description} placeholder="Item Description" onChange={this.changeAll} />
                        </div>
                        <div className="col-sm-3 p-2">
                            <input required name="number_of_units" type="number" value={number_of_units} placeholder="Number of Units" onChange={this.changeAll} />
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-3 p-2">
                        <input required name="quantity" type="number" value={quantity} placeholder="Quantity" onChange={this.changeAll} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <input required name="unit_price" type="number" value={unit_price} placeholder="Unit Price" onChange={this.changeAll} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <input required name="discount" type="number" value={discount} placeholder="Discount" onChange={this.changeAll} />
                    </div>
                    <div className="inputItem">
                        <select name="tax" onChange={this.changeAll} value={tax} defaultValue="Service Tax">
                            <option value="Service Tax">Service Tax</option>
                            <option value="Sess Tax">Sess Tax</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <button className="btn btn-dark" onClick={this.addInvoice}>{ this.state.isEdit ? 'Update Item': 'Add Item'}</button>
                    </div>
                </div>
                </div>
                <div>
                <InvoiceComponent all_invoices={this.props.all_invoices} onEditClick={this.onEditClick} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(store) {
    console.log("store", store)
    return {
        totalList: store.totalList.todoList,
        completedList: store.totalList.completedList,
        listtype: store.totalList.typeoflist,
        all_invoices: store.invoice.all_invoices,
        logged_user_info: store.invoice.logged_user_info,
        all_users: store.invoice.all_users,
    }
}
export default connect(mapStateToProps)(MainComponent)