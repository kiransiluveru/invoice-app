import React from 'react';

class PdfContainer extends React.Component {
    constructor(props) {
        super(props);
        this.bodyRef ='myref';
    }

    render() {
        const createPdf = () => this.props.createPdf(this.bodyRef);
        console.log("this.",this.props.children);
        return (
            <section className="pdf-container">
                <section className="pdf-toolbar">
                    <button  onClick={createPdf}>Download Invoice PDF</button>
                </section>
                <section className="pdf-body" ref={(body) => this.bodyRef = body}>
                    {this.props.children}
                </section>
            </section>
        )
    }
}

export default PdfContainer;