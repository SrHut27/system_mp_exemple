const transporter = require('../../configs/email');

function contactEmail(email) {
    const mailOptions = {
        from: "gabrielrfreitas2707@gmail.com",
        to: email,
        subject: "Olá! Obrigado por entrar em contato!",
        html: `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Conheça o Projeto de Desenvolvimento do Time Maria Peregrina</title>
                <style>
                    /* Estilos CSS */
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 600px;
                        margin: 20px auto;
                        padding: 20px;
                        background-color: #fff;
                        border-radius: 10px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #333;
                    }
                    .intro {
                        padding: 20px;
                        background-color: #f9f9f9;
                        border-radius: 5px;
                        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
                    }
                    p {
                        color: #555;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Conheça o Projeto de Desenvolvimento do Time Maria Peregrina</h1>
                    <div class="intro">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eros commodo, tincidunt nulla nec, mattis odio. Duis sit amet elit tortor. Nullam auctor est sed ultrices malesuada.</p>
                        <p>Curabitur posuere, felis vel consequat auctor, magna velit luctus metus, eget bibendum elit purus vel nibh. Nullam lacinia felis in leo placerat, et semper ipsum condimentum. Proin condimentum magna in lacinia viverra.</p>
                    </div>
                    <p>Aenean ac lorem eget magna ultricies feugiat sit amet at leo. Praesent nec est nec dui ultricies feugiat. Donec fermentum eleifend justo, eget vehicula ligula pharetra non. Aliquam ut fermentum nulla.</p>
                </div>
            </body>
            </html>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) throw error;
        else {
            console.log(`Email de contato enviado para: ${email}`);
        };
    });
}

module.exports = contactEmail;