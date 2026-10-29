const nodemailer = require("nodemailer")
const emailTemplate = require('../views/emailTemplate')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const sendVerificationEmail = async ({ firstName, lastName, email }) => {
    try {
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            throw new Error("SMTP_USER and SMTP_PASS must be configured");
        }

        return transporter.sendMail({
            from: process.env.SMTP_USER,
            to: `${email}`,
            subject: "Verification Mail",
            // text: `Welcome, ${firstName} ${lastName}, welcome to my app`,
            html: emailTemplate({ name: firstName, code: 345345, link: 'https://ref.com', appName: "My App" })
        });
    } catch (err) {
        console.log(err);

    }

}

module.exports = sendVerificationEmail