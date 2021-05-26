// const nodemailer = require('nodemailer');



// var transport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "92d84b69f5e856",
//       pass: "e9786ba1427c06"
//     }
//   });

//   transporter.verify(function(error, success) {
//     if (error) {
//          console.log(error);
//     } else {
//          console.log('Server is ready to take our messages');
//     }
//  });
//   var mailOptions = {
//     from: '"Shopping Team" <kajalkrdas452@gmail.com>',
//     to: 'kajal@pitangent.com',
//     subject: 'Nice Nodemailer test',
//     text: 'Hey there, it’s our first message sent with Nodemailer ;) ',
//     html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer'
// };

"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "92d84b69f5e856",
        pass: "e9786ba1427c06"
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <kajalkrdas452@gmail.com>', // sender address
    to: "kajal@pitangent.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
