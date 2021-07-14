const nodemailer = require('nodemailer');
require('dotenv').config();

//Gmail account info
const tranporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // user:process.env.EMAIL,
        // pass:process.env.PASSWORD
        user: process.env.SENDER_EMAIL,
        pass: process.env.PASSWORD
    }
});

//Email info
// const mailOptions = {
//     from: '',
//     to: '',
//     subject: 'Trying How to send email using NodeJS',
//     text: 'Hi I am sending email using nodeJs'
// };


//send attachment
const mailOptions = {
    from: process.env.SENDER_EMAIL, //sender email address
    to: process.env.RECEIVER_EMAIL, //receiver email address
    subject: 'How to send email attachments using NodeJS',
    //text: 'Follow the instructions and you will be fine',
    attachments: [{
        filename: 'Ada_Lovelace_portrait.jpg',
        path: __dirname + '/Ada_Lovelace_portrait.jpg'
    }]
};


//send eamil and retrive server response
tranporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Email sent:' + info.response);
    }
});