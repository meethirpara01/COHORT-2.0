import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GOOGLE_USER,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        clientId: process.env.GOOGLE_CLIENT_ID,
        type: 'OAuth2'
    }
});

transporter.verify()
    .then(() => {
        console.log('Email transporter is ready to send emails');
    })
    .catch((err) => {
        console.error('Error setting up email transporter:', err);
    });

export async function sendEmail({ to, subject, html, text }) {
    const mailOptions = {
        from: process.env.GOOGLE_USER,
        to,
        subject,
        html,
        text
    };
    
    const details = await transporter.sendMail(mailOptions);
    console.log('Email sent:', details);
    return details;
}