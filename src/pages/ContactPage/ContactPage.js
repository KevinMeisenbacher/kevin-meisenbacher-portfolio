import './ContactPage.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const ContactPage = () => {
    const recipient = 'kevinmeisenbacher@outlook.com';

    const emailForm = useRef();

    const handleForm = (e) => {
        e.preventDefault();
        emailjs
        .sendForm('service_82ypoaa', 'template_9psy8s7', emailForm.current, {
            publicKey: 'zduaYV8iHv5d8ryR4',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <form ref={emailForm} onSubmit={handleForm}>
        <span><label>Name</label>
        <input type="text" name="from_name" /></span>
        <input type="hidden" name="to_name" value="Kevin" />
          <span><label>Email</label>
          <input type="email" name="user_email" /></span>
          <span><label>Subject</label>
          <input name="subject" /></span>
          <span><label>Message</label>
          <textarea name="message" /></span>
          <input type="submit" value="Send" />
        </form>
      );
}

export default ContactPage;