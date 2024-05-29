import './Luz.styles.css'

const Luz = () => {
    const LUZ = [{
        "time": "9:00",
        "activity": "התכנסות | קפה ומאפה"
    },
    {
        "time": "9:30",
        "activity": "פתיחת יום"
    },
    {
        "time": "10:00",
        "activity": "הרצאת מליאה"
    },
    {
        "time": "11:30",
        "activity": "בראנץ' מפנק"
    },
    {
        "time": "12:15",
        "activity": "מעבר למושבים"
    },
    {
        "time": "12:30",
        "activity": "מושב ראשון"
    },
    {
        "time": "13:10",
        "activity": "מעבר למושב שני"
    },
    {
        "time": "13:20",
        "activity": " מושב שני"
    },
    {
        "time": "14:00",
        "activity": "מעבר למליאה"
    },
    {
        "time": "14:10",
        "activity": "הרצאות מליאה"
    },
    {
        "time": "15:10",
        "activity": "דברי סיכום"
    },
    {
        "time": "15:20",
        "activity": "סיום הכנס | כריך לדרך ונסיעה בטוחה הביתה"
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
