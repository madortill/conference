import './Luz.styles.css'

const Luz = () => {
    const LUZ = [{
        "time": "9:00",
        "activity": "התכנסות | הרשמה, קפה ומאפה"
    },
    {
        "time": "9:30",
        "activity": "פתיחת היום"
    },
    {
        "time": "9:50",
        "activity": "הרצאות במליאה"
    },
    {
        "time": "11:30",
        "activity": "בראנץ' מפנק"
    },
    {
        "time": "12:15",
        "activity": "הפסקה ומעבר למושבים"
    },
    {
        "time": "12:30",
        "activity": "מושב א׳ (בחירה מתוך 4 אפשרויות)"
    },
    {
        "time": "13:10",
        "activity": "הפסקה ומעבר למושב ב׳"
    },
    {
        "time": "13:20",
        "activity": "מושב ב׳ (בחירה מתוך 4 אפשרויות)"
    },
    {
        "time": "14:00",
        "activity": "הפסקה ומעבר לאולם 800"
    },
    {
        "time": "14:10",
        "activity": "הרצאות במליאה"
    },
    {
        "time": "15:00",
        "activity": "דברי סיכום"
    },
    {
        "time": "15:20",
        "activity": "סיום, כריך לדרך ונסיעה בטוחה"
    }]
    return (
        <div className='luz-container'>
            {LUZ.map((element, index) => (
                <div className='luz-line' key={element.time}>
                    <div className='luz-container-time'>
                        <div className='luz-time'>{element.time}</div>
                    </div>
                    <div className='luz-container-activity'>
                        <div className='luz-activity'>{element.activity}</div>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}
export default Luz;
