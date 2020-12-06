import { savePDF } from '@progress/kendo-react-pdf';
// const sendMail = require('../../mail');

class DocService {
  createPdf = (html) => {
      console.log("HTML >>>", html);
      // try{
      //   sendMail(html);
      // }catch(e){
      //   console.log('sending mails error',e)
      // }
    savePDF(html, {
      paperSize: 'Letter',
      fileName: 'form.pdf',
      margin: 3
    })
  }
}

const Doc = new DocService();
export default Doc;