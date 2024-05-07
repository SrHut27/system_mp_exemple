const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "gabrielrfreitas2707@gmail.com",
        pass: "ivpc ldon dmdj vlkc"
    }
});

module.exports = transporter;