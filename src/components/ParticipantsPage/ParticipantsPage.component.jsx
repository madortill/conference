import './ParticipantsPage.styles.css';
import { useState, useRef } from 'react';
import ContactInfo from '../ContactInfo/ContactInfo.component';
import Exhibition from '../exhibition/Exhibition.component';
import AmirG from '../../media/images/people/AmirGefen.jpg';
import AlmogC from '../../media/images/people/almogC.jpeg';
import Alona from '../../media/images/people/alona.jpeg';
import OriG from '../../media/images/people/oriG.jpeg';
import OritB from '../../media/images/people/oritB.jpeg';
import Pnina from '../../media/images/people/pnina.jpeg';
import YuvalL from '../../media/images/people/yuvalL.jpeg';
import ParticipantCard from '../ParticipantCard/ParticipantCard.component';


const ParticipantsPage = () => {
    const [isCard, setIsCard] = useState(false);
    const objRef = useRef({});
    const MAIN_INFO = [{
        // "img": main1,
        "name": "אל״מ מיקי אלמקאייס | מפקד בה״ד 10, חיל הרפואה",
        "topic": "הובלת מאמץ הלמידה במלחמה, הטמעת לקחים חיילים מלחימה להכשרות בבה״ד",
        "description": "",
        "full-text": ""
    },
    {
        // "img": main2,
        "name": 'רס״ן עינת יונתן אש | רמ״ד הערכה חיל אוויר',
        "topic": "BI ככלי להערכת הדזרכה וקבלת החלטות",
        "description": ".",
        "full-text": ""
    },
    {
        "img": YuvalL,
        "name": 'סא״ל יובל לייקין | רע״ן הדרכה אמ״ן',
        "topic": "הדרכה תחת אש",
        "description": "משרת בצה״ל מזה 20 שנה. בעברו איש מודיעין השדה ומחקר בזירה הסורית והפלסטינית. בעברו ראש ענף מפקדים באמ״ן ומפקד קורס קציני מודיעין.",
        "full-text": `עם חלוף השבועיים הראשונים מאז פרוץ מלחמת 'חרבות ברזל' ביקשנו לבחון את האתגרים המרכזיים אותם חוו סגלי הכשרות החוגרים והקצונה - בהיותם אנשי הדרכה, מפקדים ומשרתים בעלי זהות אמ"נית - שאותגרה בראי כשלון ה-שבעה באוקטובר. בהרצאה אבקש לשתף בתובנות אליהן הגענו ובדרכי הפתרון האפשריים לכך, בבחינת - שלא נזדקק לכך אף פעם.
        `
    },
    {
        // "img": main4,
        "name": 'אל״מ (במיל׳) צביקה וולק',
        "topic": "על תהליך הערכת הקרבות ב7/10",
        "description": "",
        "full-text": "",
    },
    {
        "img": AmirG,
        "name": 'ד״ר אמיר גפן',
        "topic": " 'מי הזיז את הבינה שלי'- הערכה בעידן הבינה המלאכותית.",
        "description": `ד"ר עמיר גפן, מומחה לבינה מלאכותית בחינוך ובהדרכה ארגונית; מרצה בתוכנית לתואר שני בטכנולוגיה ולמידה באונ' ת"א; חוקר עבור אגף המחקר והפיתוח במשרד החינוך את השפעות השימוש בבינה מלאכותית להכנת עבודות. `,
        "full-text": `הבינה המלאכותית בתהליכי הדרכה, למידה והערכה
        אתגרי הבינה: טעויות, הטיות והזיות. 
        אתיקה ויושרה בעידן הבינה.
        האם וכיצד מעריכים עבודה שהוכנה בסיוע הבינה. 
        כלי יישומי: הצעה למחוון הערכה בעידן הבינה. 
        דיון, שאלות ותשובות.`
    },]

    const SEATS = [{
        "img": Pnina,
        "name": `רס"ן (במיל') פנינה נוימן`,
        "topic": "מי מפחד (למדוד) מיומנויות רכות?",
        "description": `פנינה נוימן , בעבר הלא כל כך רחוק אשת למידה ופיתוח ארגוני בצה"ל ( ז"י, חיל האוויר, המכללות הצבאיות) וקצינת מילואים פעילה (ביותר) באמ"ץ תוה"ד בהווה...כיום מנהלת פיתוח ארגוני בחברת Civan, עם הרבה ניסיון בפיתוח מנהיגות ופיתוח בכירים בצה"ל וגם בחוץ...`,
        "full-text": `תנו לי לחדש לכם משהו בנושא אפקטיביות הכשרה: האם ידעתם שהמדד הטוב ביותר לביצועים טובים בתפקיד לאורך זמן הוא דווקא רמת הביצועים בתחום ה"רך"? כן כן, דווקא היכולות האלה הן הכי קשות לגישור ולא המיומנויות הטכניות. מיומנויות רכות, כמו תקשורת, עבודת צוות, פתרון בעיות, גמישות וניהול זמן, הן חיוניות יותר מאי פעם בעולם העבודה המודרני. הן מאפשרות לעבוד בצורה יעילה יותר, לשתף פעולה עם אחרים ולהתמודד עם אתגרים.
        למרות חשיבותן הרבה, מדידת מיומנויות רכות יכולה להיות אתגר. שיטות מדידה מסורתיות, כמו מבחנים ושאלונים, אינן תמיד יעילות בהערכת מיומנויות אלו.
        אני מזמינה אתכם להצטרף אלי לטעימה של מגוון של מתודות להערכה וגם עקרונות שיכולים לעזור לכם לבחור כיצד להעריך את אפקטיביות ההכשרה בתחום הכל כך חשוב הזה.`
    },
    {
        "img": OritB,
        "name": "הגב' אורית ברוידס",
        "topic": "הערכת הדרכה כמחזקת תחושת מסוגלות",
        "description": "יזמית, מייסדת ומפתחת מודל מסע מעצב עתיד. יועצת ארגונית בהכשרתה ומעצבת עתיד בנשמתה. מובילה תהליכי שינוי מורכבים עמוקים בארגונים. בתהליכיה משלבת מיומנויות מתחום הפיתוח הארגוני, למידה ארגונית וחשיבה יצירתית מחברת.",
        "full-text": ""
    },
    {
        "img": AlmogC,
        "name": `רס"ל (במיל') אלמוג כהן ואע"צ אלונה צנטי`,
        "topic": "הערכה 360°- ככה עושים את זה נכון.",
        "description": `אלמוג כהן, בת 29, במילואים בקריית ההדרכה בתפקיד אחראית פיתוח הדרכה. בוגרת תואר ראשון במידענות וטכנולוגיות אינטרנט באונ' בר- אילן. בשירות הצבאי עסקה בארבעת עולמות ההדרכה- הערכה, ניהול, הוראה ופיתוח. 
        אלונה צנטי, בת 29, אזרחית עובדת צה"ל בקריית ההדרכה בתפקיד רת"ח הערכה. בוגרת תואר ראשון בחינוך עם תעודת הוראה. ביצעה קורס ניהול ופיתוח הדרכה באזרחות וקורס מפתחי הדרכה בכירים בצריפין.`,
        "full-text": `קורס יהלום הינו הכשרת מפקדים מתקדמת המועברת בקריית ההדרכה ופותחה זה עתה. על מנת להעריך את טיב ההכשרה, פיתחנו תוכנית הערכה כוללת ומקיפה. בהרצאה המרתקת שלנו תיחשפו לתוכנית המלאה המכילה בתוכה הערכה מקדימה, מעצבת ומסכמת. כמו כן, כלי הערכה שבנינו יעניקו לכם השראה לפיתוח תוכנית הערכה אפקטיבית אצלכם ביחידה.`
    },
    {
        // "img": yael,
        "name": `יסכה רוטשילד מפקדת טייסת חופ"ה והדס גולבר קצינת חופ"ה בית ספר לטיסה.`,
        "topic": "הערכת הדרך- בניית טופס הערכת גיחה בקורס טיס",
        "description": "",
        "full-text": ""
    },
    {
        // "img": yaniv,
        "name": "",
        "topic": "הערכת הדרכה בקמפוס הדיגיטלי",
        "description": "",
        "full-text": ''
    },
    {
        "img": OriG,
        "name": `רס"ן אודי גוברין.`,
        "topic": `למידה מבצעית- מש"ל`,
        "description": `רמ"ד ניהול מידע וידע, מחלקת תוה"ד, ענף חופ"ה`,
        "full-text": "מצורך בלמידה ושיתוף בין טייסות למערכת למידה מבצעית וניהול השינוי הארגוני.",
    },
    {
        // "img": dana,
        "name": "רחל פינטו",
        "topic": "",
        "description": "",
        "full-text": ""
    },
    {
        // "img": nir,
        "name": `עו"ד משה שוקרי, ר' תחום הערכת הדרכה באגף ההדרכה, משטרת ישראל`,
        "topic": "הערכת הדרכה – הדור הבא",
        "description": `23 שנים במשטרה, קצין חקירות בעברו, לקח חלק בפרשיות מוכרות כגון: הבנק למסחר, הסוסים הטרויאניים (ריגול תעשייתי). שימש כמפקד קורסים, מפתח הדרכה וקצין הדרכה סמפכ"ל.`,
        "full-text": `הצגת תחום הערכת הדרכה במשטרת ישראל ותהליך משובי השטח בפרט, באמצעות case study וסיפור על אחד מקורסי הדגל של משטרת ישראל (קורס ייסוד סייר), שעבר בשנתיים האחרונות "מהפכה" והתאמה לדור הלומדים החדש. במושב הנ"ל נסקור את כל שלבי התהליך: תכנון, איסוף ועיבוד הנתונים, הפקת לקחים ויישומם בפועל. כמו כן, נסתכל על התהליך ב"מבט על" תוך התייחסות למודלים בהערכת הדרכה וה- ROV (return of value).`,
    }]


    const handleReadMore = (obj) => {
        objRef.current = obj;
        setIsCard(true);
    }

    const closeReadMore = () => {
        setIsCard(false);
    }

    return (
        <div className='participants-page'>
            {isCard ? <ParticipantCard closeReadMore={closeReadMore} infoObj={objRef.current}></ParticipantCard> : null}
            <div className='main-container'>
                <h1 className='participants-title'>מרצי מליאה</h1>
                <div className='dark-card-container'>
                    {MAIN_INFO.map((element, index) => (
                        <div className='dark-card' key={index}>
                            <div className='main-content-container'>
                                <div className='main-img' style={{ backgroundImage: `url(${element.img})` }}></div>
                                <div className='main-text-container'>
                                    <h2 className='main-topic'>{element.topic}</h2>
                                    <h6 className='main-name'>{element.name}</h6>
                                    <p className='main-text'>{element.description}</p>
                                </div>
                            </div>

                            <button className='read-more-btn' onClick={() => handleReadMore(element)}>קרא עוד</button>
                        </div>
                    ))}
                </div>

                <h1 className='participants-title' style={{ marginTop: '4rem' }}>מושבים</h1>
                <div className='secondary-card-container'>
                    {SEATS.map((element, index) => (
                        <div className='secondary-card' key={index}>
                            <div className='secondary-img' style={{ backgroundImage: `url(${element.img})` }}></div>
                            <div className='secondary-text-container'>
                                {/* <div> */}
                                    <h2 className='secondary-topic' style={{fontSize: element['font-size']}}>{element.topic}</h2>
                                    <h6 className='secondary-name'>{element.name}</h6>
                                    <p className='secondary-text'>{element.description}</p>
                                {/* </div> */}
                                <button className='read-more-btn-secondary' onClick={() => handleReadMore(element)}>קרא עוד</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* <h1 className='participants-title'>תערוכת EXPO</h1>
                <div className='exhibition-container'>
                    <Exhibition></Exhibition>
                </div> */}

            </div>
            <ContactInfo></ContactInfo>
        </div>
    );
}

export default ParticipantsPage;