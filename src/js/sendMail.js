export const sendMail = ({ name, email, message }) => {
  let params = {
    name,
    email,
    message,
  };
  emailjs.send('service_zn3aqae', 'template_3o02fkr', params);
};
