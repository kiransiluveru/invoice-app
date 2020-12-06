import React, { Component } from 'react';
import Doc from './DocService';
import PdfContainer from './PdfContainer';

class InvoiceComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Still, Jaime',
            rank: 'SGT',
            description: 'Demonstrate how to export an HTML section to PDF'
        };
    }

    onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState((state) => {
            state[name] = value;
            return state;
        })
    }

    createPdf = (html) => Doc.createPdf(html);

    render() {
        const { all_invoices } = this.props;
        console.log('this.props.all in INVOICE COMPONENT ', all_invoices);
        return (
            <div>
                <PdfContainer
                    createPdf={this.createPdf}
                >
                    <div className="container">
                        <h2> INVOICE </h2>
                        <address>
                            <strong>Twitter, Inc.</strong><br />
                                1355 Market St, Suite 900<br />
                                San Francisco, CA 94103<br />
                            <abbr title="Phone">P:</abbr> (123) 456-7890
                            </address>
                        <table className="table table-hover w-60">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Item Name </th>
                                    <th>No of Units</th>
                                    <th>Quantity</th>
                                    <th>Unit Price</th>
                                    <th>Discount</th>
                                    <th>Tax</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Boolean(all_invoices.length) &&
                                    all_invoices.map((val, index) => {
                                        return (
                                            <tr key={val.id} className="trHover">
                                                <td>{val.item_name}</td>
                                                {/* <td>{val.item_description}</td> */}
                                                <td>{val.number_of_units}</td>
                                                <td>{val.quantity}</td>
                                                <td>{val.unit_price}</td>
                                                <td>{val.discount}</td>
                                                <td>{val.tax}</td>
                                                <span className="editSpan" onClick={() => this.props.onEditClick(val.id)}>
                                                    Edit
                                                </span>
                                            </tr>
                                        );
                                    })
                                }
                                {/* <tr   onMouseOver={() => { console.log('agga') }}  >
                                    <td>1</td>
                                    <td>2</td>
                                    <td>sf</td>
                                    <td>saf</td>
                                    <td>sdf</td>
                                    <td>sdf</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </PdfContainer>
            </div>
        );
    }
}

export default InvoiceComponent;

                    // <div>SMALL ELEMENT </div>
                    //     <section className="flex-column">
                    //         <h2 className="flex">Form Name</h2>
                    //         <section className="flex-row">
                    //             <input placeholder="Rank"
                    //                 name="rank"
                    //                 value={this.state.rank}
                    //                 onChange={this.onChange} />
                    //             <input className="flex"
                    //                 placeholder="Name"
                    //                 name="name"
                    //                 value={this.state.name}
                    //                 onChange={this.onChange} />
                    //         </section>
                    //         <textarea rows="20"
                    //             placeholder="Description"
                    //             name="description"
                    //             value={this.state.description}
                    //             onChange={this.onChange} />
                    //     </section>