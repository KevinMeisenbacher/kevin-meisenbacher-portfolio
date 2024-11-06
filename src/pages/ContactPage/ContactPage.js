import './ContactPage.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const ContactPage = () => {
    const emailForm = useRef();

    const handleForm = (e) => {
        e.preventDefault();
        emailjs
        .sendForm('service_82ypoaa', 'template_9psy8s7', emailForm.current, {
            publicKey: 'zduaYV8iHv5d8ryR4',
        })
        .then(console.log('Email sent!'))
        .catch(error => {console.log('FAILED...', error.text)})
    };

    return (
        <form className="contact" ref={emailForm} onSubmit={handleForm}>
            <div className="email-headers">
                <label>Name</label>
                <input type="text" name="from_name" />
                <input type="hidden" name="to_name" value="Kevin" />
                <label>Email</label>
                <input type="email" name="user_email" />
            </div>
            <span><label>Subject</label>
            <input name="subject" /></span>
            <span><label>Message</label>
            <textarea name="message" /></span>
            <button>Send</button>
        </form>
      );
}

export default ContactPage;