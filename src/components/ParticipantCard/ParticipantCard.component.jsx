import './ParticipantCard.styles.css'
import close from "../../media/images/close.png";

const ParticipantCard = (props) => {
    return (
        <div className='participant-card-container' onClick={(e) => e.target.classList.contains("not-press") ? null : props.closeReadMore()}>
            <div className='participant-card not-press'>
                <div style={{ backgroundImage: `url(${close})` }} className='card-cose-btn pointer'></div>
                <div className='pictures-container'>
                    {props.infoObj.insideImg.map ((picture) => (
                        <img src={picture} key={picture} className='main-img participant-card-img not-press' />
                    ))}
                </div>
                <h1 className='participant-card-topic not-press'>{props.infoObj.topic}</h1>
                <h3 className='participant-card-name not-press'>{props.infoObj.name}</h3>
                <p className='participant-card-text not-press'>{props.infoObj["full-text"]}</p>
            </div>
        </div>

    )
}

export default ParticipantCard;