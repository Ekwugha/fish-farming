import React from 'react';
// import SinglePagePDFViewer from "../../component/pdf/single-page";
// import AllPagesPDFViewer from "../../component/pdf/all-pages";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
// import samplePDF from "./sample.pdf";
import { saveAs } from "file-saver";
import Header from '../../component/header/header.component';
import Footer from '../../component/footer/footer.component';


import './pdf.styles.css';

function PdfPage() {
    const saveFile = () => {
        saveAs(
          "https://core.ac.uk/download/pdf/10864244.pdf",
          "fish-farming.pdf"
        );
      };
    return (
        <>
        <Header title="pdf"/>
        <div className='containerrr quiz-container join-screen'>
            <p className='text-bold'>To learn more about Fish Farming, download the PDF below</p>
            <button onClick={saveFile}>
                Click to download
            </button>
        </div>
        <Footer />
        </>
    )
}

export default PdfPage;