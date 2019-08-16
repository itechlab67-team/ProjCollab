import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: `${process.env.EMAIL}`,
        pass: `${process.env.EMAILPASSWORD}`
    }
});

const sendEmail = email => {
    const mailOptions = {
        from: `${process.env.EMAIL}`,
        to: `${email}`, // email
        subject: 'Confirm your registration',
    }
    fs.readFile(path.join(__dirname, '../../', 'assets/confirmEmail.html'), (err, data) => {
        const emailData = data.toString().replace('http://placeholder', 'https://localhost:3000');
        mailOptions['html'] = emailData;
        transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                console.log(err)
            } else {
                console.log(info);
            }
        });
    });
}

export default sendEmail;