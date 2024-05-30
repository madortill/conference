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
import Isca from '../../media/images/people/isca.jpeg';
import Duo1 from '../../media/images/people/duo1.jpeg';
import Duo2 from '../../media/images/people/duo2.jpeg';
import Einat from '../../media/images/people/einat.jpeg';
import zahal from '../../media/images/zahal.png';
import campus from '../../media/images/people/campus.jpeg';
import bahad from '../../media/images/people/bahad10.jpeg'


const ParticipantsPreview = () => {
    const navigate = useNavigate();
    const PEOPLE = [
        {
            "src": bahad,
            "name": "אל״מ מיקי אלמקאייס",
            "topic": "הובלת מאמץ הלמידה במלחמה, הטמעת לקחים חיליים מלחימה להכשרות בבה״ד",
            "font-size": "1rem",
        },
        {
            "src": Einat,
            "name": 'רס"ן עינת יונתן אש',
            "topic": "מהערכה להחלטה",
            "font-size": "1rem",
        },
        {
            "src": YuvalL,
            "name": 'סא״ל יובל לייקין',
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
            "src": Duo1,
            "name": `רס"ר (במיל') אלמוג כהן ואע"צ אלונה צנטי`,
            "topic": "הערכה 360°- ככה עושים את זה נכון",
            "font-size": "0.75rem",
        },
        {
            "src": Isca,
            "name": `רס״ן יסכה רוטשילד וסרן הדס גולבר`,
            "topic": "הערכת הדרך- תהליך בניית טופס הערכת גיחה בקורס טיס",
            "font-size": "1rem",
        },
        {
            "src": campus,
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
            "name": "רחלי גנשאפט פינטו",
            "topic": "ארגון מע/אריך",
            "font-size": "1rem",
        },
        {
            "src": Duo2,
            "name": `עו"ד משה שוקרי ואלינה באנק`,
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