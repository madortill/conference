import './ContactInfo.styles.css'
import war from '../../media/images/war-logo.png';
import zahal from '../../media/images/zahal.png';
import kirya from '../../media/images/kirya.png';
 

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
        <div className='flex-container-2'>
          <img src={war} className='pics'/>
          <img src={zahal} className='pics' />
          <img src={kirya} className='pics' />
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;