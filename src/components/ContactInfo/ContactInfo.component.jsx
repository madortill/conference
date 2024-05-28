import './ContactInfo.styles.css'

const ContactInfo = () => {

  return (
    <div className="contact-info">
      {/* <h1 className='contact-header'>צור קשר</h1> */}
      <div className='black-contact'>
        <div className='quote'>"התשובה בעשייה״</div>
        <div className='flex-container'>
          <h3 className='white-text contact-txt'>מוזמנים לפנות אלינו במייל:</h3>
          <a className='white-text mail' href="mailto:evaluation.confe@gmail.com">evaluation.confe@gmail.com</a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;