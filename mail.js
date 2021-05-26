var nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "92d84b69f5e856",
      pass: "e9786ba1427c06"
    }
  });

var mailOptions = {
  from: '"Example Team" <kajal@pitangent.com>',
  to: 'kajalkrdas452@gmail.com',
  subject: 'Nice Nodemailer test',
  text: 'Hey there, it’s our first message sent with Nodemailer ',
  html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br /><img src="cid:uniq-mailtrap.png" alt="mailtrap" />',
  attachments: [
    {
      filename: 'mailtrap.png',
      path: __dirname + '/mailtrap.png',
      cid: 'uniq-mailtrap.png'
    }
  ]
};



module.exports = function(to,options=mailOptions){
  const opt = {...options,to:to}
  transport.sendMail(opt, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
}