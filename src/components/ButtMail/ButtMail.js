import './ButtMail.scss';

const ButtMail = ({ recipient, subject, message }) => {
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
    console.log(mailto);
    return (
        <a href={mailto}>Send</a>
    )
}

export default ButtMail;