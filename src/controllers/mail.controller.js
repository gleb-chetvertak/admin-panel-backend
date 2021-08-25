const nodemailer = require('nodemailer')

const createTestEmail = async (id) => {

    // console.log(id);

    // const testAccount = await nodemailer.createTestAccount();
    
    // create reusable transporter object using the default SMTP transport
    const transporter = await nodemailer.createTransport({
        service: 'gmail',
        // host: 'smtp.gmail.com',
        // port: 587,
        // secure: false,
        auth: {
            user: 'ampermaster.dp@gmail.com',
            pass: 'Ampermasterdp2020++v1',
        },
        tls: {
            rejectUnauthorized: false
        }
        // host: "smtp.ethereal.email",
        // port: 587,
        // secure: false, // true for 465, false for other ports
        // auth: {
        //   user: testAccount.user, // generated ethereal user
        //   pass: testAccount.pass, // generated ethereal password
        // },
        // tls: {
        //     rejectUnauthorized: false
        // }
    });

    // send mail with defined transport object
    transporter.sendMail({
        from: '"Stab Ampermaster" <ampermaster.dp@gmail.com>', // sender address
        to: "glebsterchetvertak@gmail.com", // list of receivers
        subject: "Аккаунт удален", // Subject line
        text: `Аккаунт ${id} удален`, // plain text body
        // html: "<b>Hello world?</b>", // html body
    }, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

module.exports = {
    createTestEmail,
};