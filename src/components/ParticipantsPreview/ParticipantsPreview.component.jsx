import './ParticipantsPreview.styles.css'
import { useNavigate } from 'react-router-dom';
import PersonPreview from '../PersonPreview/PersonPreview.component';
import arrow from '../../media/images/arrow.png';
import AmirG from '../../media/images/people/AmirGefen.jpg';
import AlmogC from '../../media/images/people/almogC.jpeg';
import Alona from '../../media/images/people/alona.jpeg';
import OriG from '../../media/images/people/oriG.jpeg';
import OritB from '../../media/images/people/oritB.jpeg';
import Pnina from '../../media/images/people/pnina.jpeg';
import YuvalL from '../../media/images/people/yuvalL.jpeg';
import Zvika from '../../media/images/people/zvika.jpeg';
import Raheli from "../../media/images/people/raheli.jpeg";
import TalB from '../../media/images/people/talB.jpeg';
import Isca from '../../media/images/people/isca.jpeg'

const ParticipantsPreview = () => {
    const navigate = useNavigate();
    const PEOPLE = [
        {
            // "src": gila,
            "name": "אל״מ מיקי אלמקאייס | מפקד בה״ד 10, חיל הרפואה",
            "topic": "הובלת מאמץ הלמידה במלחמה, הטמעת לקחים חיליים מלחימה להכשרות בבה״ד",
            "font-size": "1rem",
        },
        {
            // "src": adi,
            "name": 'רס"ן עינת יונתן אש, רמ"ד הערכה ובקרה בתוה"ד חיל אוויר',
            "topic": "מהערכה להחלטה",
            "font-size": "1rem",
        },
        {
            "src": YuvalL,
            "name": 'סא״ל יובל לייקין | רע״ן הדרכה אמ״ן',
            "topic": "הדרכה תחת אש",
            "font-size": "1rem",
        },
        {
            "src": Zvika,
            "name": 'אל״מ (במיל׳) צביקה וולק',
            "topic": "על תהליך הערכת הקרבות ב7/10",
            "font-size": "1rem",
        },
        {
            "src": AmirG,
            "name": 'ד״ר אמיר גפן',
            "topic": " 'מי הזיז את הבינה שלי'- הערכה בעידן הבינה המלאכותית",
            "font-size": "1rem",
        },
        {
            "src": Pnina,
            "name": `רס"ן (במיל') פנינה נוימן`,
            "topic": "מי מפחד (למדוד) מיומנויות רכות?",
            "font-size": "1rem",
        },
        {
            "src": OritB,
            "name": "הגב' אורית ברוידס",
            "topic": "הערכת הדרכה כמחזקת תחושת מסוגלות",
            "font-size": "1rem",
        },
        {
            "srcs": [AlmogC, Alona],
            "name": `רס"ל (במיל') אלמוג כהן ואע"צ אלונה צנטי`,
            "topic": "הערכה 360°- ככה עושים את זה נכון",
            "font-size": "1rem",
        },
        {
            "src": Isca,
            "name": `יסכה רוטשילד מפקדת טייסת חופ"ה והדס גולבר קצינת חופ"ה בית ספר לטיסה`,
            "topic": "הערכת הדרך- תהליך בניית טופס הערכת גיחה בקורס טיס",
            "font-size": "1rem",
        },
        {
            "src": TalB,
            "name": "טל בוזנאה ושרית צברי",
            "topic": "קמפוס דיגיטלי כפלטפורמה להערכה",
            "font-size": "1rem",
        },
        {
            "src": OriG,
            "name": `רס"ן אודי גוברין`,
            "topic": `למידה מבצעית- מש"ל`,
            "font-size": "1rem",
        },
        {
            "src": Raheli,
            "name": "רחל פינטו",
            "topic": "ארגון מע/אריך",
            "font-size": "1rem",
        },
        {
            // "src": nir,
            "name": `עו"ד משה שוקרי, ר' תחום הערכת הדרכה באגף ההדרכה, משטרת ישראל`,
            "topic": "הערכת הדרכה – הדור הבא",
            "font-size": "1rem",
        }
        
    ]
    return (
        <>
            <h1 className='white-text header header-people'>המרצים והמרצות שלנו:</h1>
            <div className='people-container'>
                {PEOPLE.map((element, index) => (
                    <PersonPreview font={element['font-size']} topic={element.topic} name={element.name} key={index} bg={element.src}></PersonPreview>
                ))}
            </div>
            <div className='see-more' onClick={() => {navigate("/lectures");  window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}>
                    <p className='white-text see-text'>צפו בעוד</p>
                    <img className='arrow' src={arrow}></img>
            </div>
        </>
    );
}

export default ParticipantsPreview;