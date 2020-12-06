
// const sgMail = require('@sendgrid/mail');

// sgMail.setApiKey('')  //Temporary key will expire after 5 days

// function sendMail(htmlContent){
//     const msg = {
//         to: 'siluverukirankumar6@gmail.com', // Change to your recipient
//         from: 'goldenwordsinfinity@gmail.com', // Change to your verified sender
//         subject: 'Hey, Please Check Your Invoice: form invoicestatement.herokuapp.com',
//         text: 'Hi Please check your invoice',
//         html: htmlContent || '',
//     }

//     sgMail
//     .send(msg)
//     .then(() => {
//     console.log('Email sent <<<<<<<<<<<<<<<<<<<<<<<<< ')
//     })
//     .catch((error) => {
//         console.log('ERROR SENDING EMAIL',error);
//     })
// }

// module.exports = sendMail;

// // sendMail('s');