const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'focusbuddy66@gmail.com',
    pass: 'fjopasywcsliqkgu'
  }
});

transporter.sendMail({
  from: 'focusbuddy66@gmail.com',
  to: 'YOUR_PERSONAL_EMAIL@gmail.com',
  subject: 'Focus Buddy TEST',
  text: 'This is a test email sent manually to check your Gmail setup.'
}, (err, info) => {
  if (err) {
    console.error('❌ Error:', err);
  } else {
    console.log('✅ Email sent:', info.response);
  }
});
