import './SquareDetails.styles.css';
import { useNavigate } from 'react-router-dom';
import InfoIcons from '../InfoIcons/InfoIcons.component';
import link from '../../media/images/external-link.png';

const SquareDetails = (props) => {
    const navigate = useNavigate();

    const INFO = [
        {
            "title": "למי?",
            "text": `אוכלוסיית השרוך הבורדו: קצפ"ה, נגדי הדרכה, מפתחי הדרכה זוטרים ובכירים, מגפ"ה, רמ"דים ורע"נים חיילים, מנהלי הדרכה בכירים בהכשרות.`,
            "img": '',
            "id": "bg1"
        },
        {
            "title": "איפה?",
            "text": "קריית ההדרכה, מחנה אריאל שרון.",
            "img": '',
            "id": "bg2"
        },
        {
            "title": "מתי?",
            "text": "הכנס יתקיים ביום רביעי 19/6/24, 8:30-15:00",
            "img": '',
            "id": "bg3"
        },
        {
            "title": "מה בתוכנית?",
            "img": '',
            "text": "הרצאות מעוררות השראה, כלים פרקטים, גיבוש קהילה מקצועית ואוכל טוב.",
            "id": "bg4"
        },
        {
            "title": "עלות?",
            "text": "הכנס ללא עלות אך נדרשת הרשמה מראש",
            "img": 'yes',
            "id": "bg5"
        }
    ]

    return (
        <div className="detail-squars">
            {INFO.map((element, index) => (
                <div id={element.id} className='square' key={index}>
                    <h2 className='square-title'>{ element.title }</h2>
                    <p className='square-text'>{ element.text }</p>
                    {element.img && <img src={ link } className='link' onClick={() => navigate("/registration")}/>}
                </div>
            ))}
            <div className='square' id="bg6" style={{ justifyContent: 'center'}}>
                <div className='icons-container-square'>
                    <InfoIcons></InfoIcons>
                </div>
                {/* <p>הרשמתך נקלטה במערכת בהצלחה. </p><p>בחירתך למושב הראשון:</p><p>{{מושב 1}} </p><p>בחירתך למושב השני:</p><p>{{מושב 2}} </p><p>הכנס יתקיים בקריית ההדרכה בנגב בתאריך 8.11</p><p>לפרטים נוספים הסתכלו באתר: <a href="https://madortill.github.io/knowit-2023/" rel="noopener noreferrer" target="_blank">https://madortill.github.io/knowit-2023/</a></p><p>לשאלות ובקשות פנו אלינו במייל :</p><p>know.it.till@gmail.com</p> */}
            </div>

        </div>
    );
}

export default SquareDetails;