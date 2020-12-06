import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import uuid from 'uuid-random';
import InvoiceComponent from './InvoiceComponent';
import { addInvoice, updateInvoice } from '../ActionCreators/ActionCreator';

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
            tax: 'Service Tax',
            isEdit: false,
            currentEditingId: '',
        }
    }
    changeAll = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    addInvoice = () => {
        const details = _.pick(this.state, ['item_name', 'item_description', 'number_of_units',
            'quantity', 'unit_price', 'discount', 'tax']);
        let isEmptyFieldExist = false;
        Object.keys(details).filter((key) => {
            if(String(details[key]).length === 0){
                isEmptyFieldExist = true;
            }
        });

        if(isEmptyFieldExist){
            window.alert('Please fill All Fields');
            // preventDefault();
            return;
        }
        const { logged_user_info } = this.props;
        let uuid_val = this.state.isEdit ? this.state.currentEditingId : uuid();
        let invoiceDetails = {
            ...details, id: uuid_val,
            created_by: _.get(logged_user_info, 'id', 'systemuser@gmail.com')
        };

        if (this.state.isEdit) {
            this.props.dispatch(updateInvoice(invoiceDetails));
        } else {
            this.props.dispatch(addInvoice(invoiceDetails));
        }
        this.setState({
            item_name: '', item_description: '', number_of_units: '', quantity: '', unit_price: '', discount: '',
            tax: 'Service Tax', isEdit: false, currentEditingId: ''
        });
    }

    onEditClick = (id) => {
        const { all_invoices } = this.props;
        let index = all_invoices.findIndex((obj) => obj.id === id);
        const details = _.pick(all_invoices[index], ['item_name', 'item_description', 'number_of_units',
            'quantity', 'unit_price', 'discount', 'tax', 'id']);
        this.setState({ ...details, isEdit: true, currentEditingId: id });
    }

    render() {
        console.clear();
        const { item_name, item_description,
            number_of_units, quantity, unit_price,
            discount, tax } = this.state;
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1 justify-content-center">CREATE INVOICE</span>
                </nav>
                <div className="container p-2">
                    <div className='row'>
                        <div className="col-sm-3 p-2">
                            <input required name="item_name" id ="item_name_id" type="text" value={item_name} placeholder="Item Name" onChange={this.changeAll} />
                        </div>
                        <div className="col-sm-3 p-2">
                            <input required name="item_description" id ="item_description_id" type="text" value={item_description} placeholder="Item Description" onChange={this.changeAll} />
                        </div>
                        <div className="col-sm-3 p-2">
                            <input required name="number_of_units" id="no_of_items_id" type="number" value={number_of_units} placeholder="Number of Units" onChange={this.changeAll} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3 p-2">
                            <input required name="quantity" id="quantity_id" type="number" value={quantity} placeholder="Quantity" onChange={this.changeAll} />
                        </div>
                        <div className="col-sm-3 p-2">
                            <input required name="unit_price" id="unit_price_id" type="number" value={unit_price} placeholder="Unit Price" onChange={this.changeAll} />
                        </div>
                        <div className="col-sm-3 p-2">
                            <input required name="discount" id="discount_id" type="number" value={discount} placeholder="Discount" onChange={this.changeAll} />
                        </div>
                        <div className="inputItem col-sm-3 p-2">
                            <select name="tax" id="tax_id" onChange={this.changeAll} value={tax} defaultValue="Service Tax">
                                <option key="Service Tax" value="Service Tax">Service Tax</option>
                                <option key="Sess Tax" value="Sess Tax">Sess Tax</option>
                                <option key="Other"value="Other">Other</option>
                            </select>
                        </div>
                        <div className="p-2">
                            <button className="btn btn-primary btn-sm" onClick={this.addInvoice}>{this.state.isEdit ? 'Update Item' : 'Add Item'}</button>
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
    return {
        all_invoices: store.invoice.all_invoices,
        logged_user_info: store.invoice.logged_user_info,
        all_users: store.invoice.all_users,
    }
}
export default connect(mapStateToProps)(MainComponent)