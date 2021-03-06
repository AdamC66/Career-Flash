import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
 pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default class MyDocument extends Component {
    state = { numPages: null, pageNumber: 1 };

    onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages });
    };
  
    goToPrevPage = () =>{
      if(this.state.numPages > this.state.pageNumber){
        this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
    }
  }
    goToNextPage = () =>{
      if(this.state.numPages < this.state.pageNumber){
        this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
      }
    }

    render() {
      const { pageNumber, numPages } = this.state;
      
      return (
        <div>
          <nav>
            <button onClick={this.goToPrevPage}>Prev</button>
            <button onClick={this.goToNextPage}>Next</button>
          </nav>
  
          <div>
            <Document
              file={this.props.path}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} width={this.props.width} />
            </Document>
          </div>
  
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      );
    }
  }