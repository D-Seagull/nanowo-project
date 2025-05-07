import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
export const sendMail = async ({ name, email, message }) => {
  let params = {
    name,
    email,
    message,
  };
  await emailjs
    .send('service_zn3aqae', 'template_3o02fkr', params)
    .then(() =>
      iziToast.success({
        title: 'Wysłane!',
        message: 'Odpowiemy jak najszybciej',
        position: 'center',
        theme: 'light',
        color: '#7DE2D1',
        messageColor: '#1B1B1B',
        titleColor: '#1B1B1B',
        progressBar: false,
        timeout: 4000,
        layout: 2,
        transitionIn: 'fadeInDown',
        transitionOut: 'fadeOutUp',
      })
    )
    .catch(error =>
      iziToast.error({
        title: 'Wystapil blad!',
        message: 'Sprobuj pozdniej ',
        position: 'center',
        color: 'red',
        layout: 2,
      })
    );
};
