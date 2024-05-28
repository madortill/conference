
import { useCallback, useState, useRef } from 'react';
import './Registration.styles.css';
import Confirmation from '../Confirmation/Confirmation.component';
import { Button, Form, Input, Radio, Select, Space, notification } from 'antd';

const Registration = () => {
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
    const [isSubmited, setIsSubmited] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);

    const SEAT1 = [
        `רס"ן (במיל') פנינה נוימן | מי מפחד (למדוד) מיומנויות רכות?`,
        `רס"ל (במיל') אלמוג כהן ואע"צ אלונה צנטי | הערכה 360°- ככה עושים את זה נכון`,
        `עו"ד משה שוקרי, ר' תחום הערכת הדרכה באגף ההדרכה, משטרת ישראל | הערכת הדרכה – הדור הבא`
        `טל בוזנאה ושרית צברי | קמפוס דיגיטלי כפלטפורמה להערכה`,
    ]
    
    const SEAT2 = [
        `הגב' אורית ברוידס | הערכת הדרכה כמחזקת תחושת מסוגלות`,
        `יסכה רוטשילד מפקדת טייסת חופ"ה והדס גולבר קצינת חופ"ה בית ספר לטיסה | הערכת הדרך- תהליך בניית טופס הערכת גיחה בקורס טיס`    
        `רס"ן אודי גוברין | למידה מבצעית- מש"ל`,
        `רחל פינטו | ארגון מע/אריך`,
    ]

    const onFinish = useCallback(
        async ({ email, name, id, level, phone, seat1, seat2, unit, role, bahad, car, model, food, other}) => {
            try {
                const response = await fetch(
                    'https://docs.google.com/forms/d/e/1FAIpQLSdMtLvbtHrp7MyuVdkbna_wTaUYvZBgXH4FAJrPYxHXkFgMKQ/formResponse' +
                    new URLSearchParams({
                        'entry.343054181': name ?? '',
                        'entry.1410981834': id ?? '',
                        'entry.1818583619': level ?? '',
                        'entry.848216944': phone ?? '',
                        'entry.525075253': seat1,
                        'entry.1337870525': seat2,
                        'entry.1931152825': unit ?? '',
                        'entry.1700613233': role ?? '',
                        'entry.94308182': bahad,
                        'entry.2065539728': car,
                        'entry.990947724': model ?? '',
                        'entry.1088207776': food,
                        'entry.1930764866': other,
                        emailAddress: email,
                    }),
                    {
                        mode: 'no-cors',
                    }
                );
                // Check for status code 200 (success)
                // console.log(response);
                // if (response.status >= 200 && response.status < 400) {
                api.success({
                    message: 'Submitted successfully',
                },
                    setIsConfirmed(true),
                    setIsSubmited(true)
                );
                form.resetFields();
                // } else {
                //     api.error({
                //         message: 'error',
                //     });
                // }
            } catch (e) {
                // api.open({
                //     message: 'Error Occured',
                //     duration: 0,
                //   });
                console.log(e)
                api.error({
                    message: e.message,
                });
                setIsConfirmed(false);
                setIsSubmited(false);
            }
        },
        [api, form]
    );

    return (
        <>
            {isSubmited ? <Confirmation></Confirmation> : null}
            {contextHolder}
            <div className='form-container'>

                <h1 className='participants-title' id="registrationTitle">הרשמה לכנס</h1>
                <p className='registration-text'>יש לוודא קבלת מייל אישור הרשמה עם פרטי ההרצאות המבוקשות. במידה ולא התקבלה הודעה יש לבדוק בתיבת הספאם או לפנות אלינו במייל:</p>
                <a className='registration-text' href="mailto:evaluation.confe@gmail.com">evaluation.confe@gmail.com</a>
                <Form
                    form={form}
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <div className='inputs-container'>
                        <Form.Item
                            className='form-item'
                            name="email"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>אימייל</label>}
                            rules={[{ required: true, message: 'אנא הכניסו את המייל שלכם.' }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="name"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>שם מלא</label>}
                            rules={[{ required: true, message: 'אנא הכניסו את שמכם.' }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="id"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>ת.ז. / מספר אישי (לצורך כניסה לבסיס)</label>}
                            rules={[{ required: true, message: 'אנא הכניסו את תעודת הזהות או המספר האישי שלכם.' }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="level"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>דרגה (לאנשי צבא בלבד)</label>}
                            rules={[{ required: false }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="phone"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>טלפון</label>}
                            rules={[{ required: true, message: 'אנא הכניסו את מספר הטלפון שלכם.' }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="seat1"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>מושב ראשון</label>}
                            rules={[{ required: true, message: 'אנא בחרו מושב ראשון.' }]}
                        >
                            <Radio.Group>
                                <Space className='radio-container' direction="vertical">
                                    {SEAT1.map((name) => (
                                        <Radio key={name} className='radio-btn' value={name}>{name}</Radio>
                                    ))}
                                </Space>
                            </Radio.Group>
                        </Form.Item>
                    </div>
                    <div className='inputs-container'>
                        <Form.Item
                            className='form-item'
                            name="seat2"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>מושב שני</label>}
                            rules={[{ required: true, message: 'אנא בחרו מושב שני.' }]}
                        >
                            <Radio.Group>
                                <Space className='radio-container' direction="vertical">
                                    {SEAT2.map((name) => (
                                        <Radio key={name} className='radio-btn' value={name}>{name}</Radio>
                                    ))}
                                </Space>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="unit"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>ארגון  / יחידה</label>}
                            rules={[{ required: true, message: 'אנא הכניסו את שם הארגון / היחידה שלכם.' }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="role"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>תפקיד בארגון</label>}
                            rules={[{ required: true, message: 'אנא הכניסו את תפקידכם בארגון.' }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item form-select'
                            name="bahad"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>אם הינכם משרתים בקריית ההדרכה: בחרו בבה״ד שלכם.</label>}
                            rules={[{ required: false, message: 'אנא בחרו בבה״ד שלכם. אם אינכם משרתים בקרית ההדרכה - בחרו באפשרות ״בחר״' }]}>
                            <Select
                                // initialvalues={{
                                //     value: 'בחר',
                                //     label: 'בחר',
                                // }}

                                options={[{
                                    value: 'בחר',
                                    label: 'בחר',
                                },
                                {
                                    value: 'בה״ד 6',
                                    label: 'בה״ד 6',
                                },
                                {
                                    value: 'בה״ד 7',
                                    label: 'בה״ד 7',
                                },
                                {
                                    value: 'בה״ד 10',
                                    label: 'בה״ד 10',
                                },
                                {
                                    value: 'בה״ד 11',
                                    label: 'בה״ד 11',
                                },
                                {
                                    value: 'בה״ד 13',
                                    label: 'בה״ד 13',
                                },
                                {
                                    value: 'בה״ד 20',
                                    label: 'בה״ד 20',
                                },
                                {
                                    value: 'מפקדה',
                                    label: 'מפקדה',
                                },
                                {
                                    value: 'חינוך',
                                    label: 'חינוך',
                                }
                                ]}>

                            </Select>
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="car"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>מגיעים ברכב? (מיועד לאישור כניסה, רק מדרגת סר״ן ומעלה)</label>}
                            rules={[{ required: false, message: 'האם תרצו להגיע ברכב?' }]}
                        >
                            <Radio.Group>
                                <Space className='radio-container' direction="vertical">
                                    <Radio className='radio-btn' value="כן">כן</Radio>
                                    <Radio className='radio-btn' value="לא">לא</Radio>
                                    <Radio className='radio-btn' value="לא יודע עדיין">לא יודע עדיין</Radio>
                                </Space>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="model"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>אם עניתם כן, מה מספר הרכב, צבעו והדגם שלו</label>}
                            rules={[{ required: false, message: 'אנא הכניסו את מספר הרכב שלכם על מנת להנפיק אישור כניסה.' }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="food"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>בקשות מזון מיוחדות</label>}
                            rules={[{ required: true, message: 'האם יש לכם בקשות מזון מיוחדות?' }]}
                        >
                            <Radio.Group>
                                <Space className='radio-container' direction="vertical">
                                    <Radio className='radio-btn' value="אין הערות">אין הערות</Radio>
                                    <Radio className='radio-btn' value="צמחוני">צמחוני</Radio>
                                    <Radio className='radio-btn' value="טבעוני">טבעוני</Radio>
                                    <Radio className='radio-btn' value="צליאקי">צליאקי</Radio>
                                    <Radio className='radio-btn' value="אחר..">אחר..</Radio>
                                </Space>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="model"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>אם עניתם אחר, מה הבקשה?</label>}
                            rules={[{ required: false, message: 'האם יש לכם בקשה מיוחדת למזון?' }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>

                        <Button type="primary" htmlType="submit" className='pointer' id='submitBtn'>
                            שליחה
                        </Button>
                    </div>
                </Form >
            </div >
        </>
    )
}

export default Registration;
