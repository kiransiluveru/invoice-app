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
                <section className="pdf-toolbar d-flex justify-content-around">
                    <button className="btn btn-secondary btn-sm"  onClick={createPdf}>Download Invoice PDF</button>
                </section>
                <section className="pdf-body" style={{backgroundColor:'aliceblue', padding:'20px'}} ref={(body) => this.bodyRef = body}>
                    {this.props.children}
                </section>
            </section>
        )
    }
}

export default PdfContainer;