
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
        `הגב' אורית ברוידס | הערכת הדרכה כמחזקת תחושת מסוגלות`,
        `רס"ל (במיל') אלמוג כהן ואע"צ אלונה צנטי | הערכה 360°- ככה עושים את זה נכון`,
        `יסכה רוטשילד מפקדת טייסת חופ"ה והדס גולבר קצינת חופ"ה בית ספר לטיסה | הערכת הדרך- בניית טופס הערכת גיחה בקורס טיס`    
    ]

    const SEAT2 = [
        `הערכת הדרכה בקמפוס הדיגיטלי`,
        `רס"ן אודי גוברין | למידה מבצעית- מש"ל`,
        `רחל פינטו | ארגון מא/עריך`,
        `עו"ד משה שוקרי, ר' תחום הערכת הדרכה באגף ההדרכה, משטרת ישראל | הערכת הדרכה – הדור הבא`
    ]

    const onFinish = useCallback(
        async ({ email, name, id, level, phone, seat1, seat2, unit, role, type, bus, bahad }) => {
            try {
                const response = await fetch(
                    'https://docs.google.com/forms/d/e/1FAIpQLSdMtLvbtHrp7MyuVdkbna_wTaUYvZBgXH4FAJrPYxHXkFgMKQ/formResponse?' +
                    new URLSearchParams({
                        'entry.343054181': name ?? '',
                        'entry.1410981834': id ?? '',
                        'entry.1818583619': level ?? '',
                        'entry.848216944': phone ?? '',
                        'entry.525075253': seat1,
                        'entry.1337870525': seat2,
                        'entry.1931152825': unit ?? '',
                        'entry.1700613233': role ?? '',
                        'entry.7676708': type,
                        'entry.94308182': bahad,
                        'entry.859804377': bus,
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
            {/* {contextHolder} */}
            <div className='form-container'>

                <h1 className='participants-title' id="registrationTitle">הרשמה לכנס</h1>
                <p className='registration-text'>ההרשמה מיועדת לאנשים העוסקים בפיתוח הדרכה בצבא, בתעשייה, באקדמיה ולמנהלי
                    הדרכה.</p>
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
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>אימייל:</label>}
                            rules={[{ required: true, message: 'אנא הכניסו את המייל שלכם.' }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="name"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>שם מלא:</label>}
                            rules={[{ required: true, message: 'אנא הכניסו את שמכם.' }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="id"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>ת.ז. / מספר אישי (לצורך כניסה לבסיס):</label>}
                            rules={[{ required: true, message: 'אנא הכניסו את תעודת הזהות או המספר האישי שלכם.' }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="level"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>דרגה (לאנשי צבא בלבד):</label>}
                            rules={[{ required: false }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="phone"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>טלפון:</label>}
                            rules={[{ required: true, message: 'אנא הכניסו את מספר הטלפון שלכם.' }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="seat1"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>מושב ראשון:</label>}
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
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>מושב שני:</label>}
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
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>יחידה / ארגון:</label>}
                            rules={[{ required: true, message: 'אנא הכניסו את שם הארגון / היחידה שלכם.' }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="role"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>תפקיד בארגון:</label>}
                            rules={[{ required: true, message: 'אנא הכניסו את תפקידכם בארגון.' }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="type"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>סוג ארגון:</label>}
                            rules={[{ required: true, message: 'אנא בחרו בסוג הארגון שלכם.' }]}
                        >
                            <Radio.Group>
                                <Space className='radio-container' direction="vertical">
                                    <Radio className='radio-btn' value="כוחות הבטחון">כוחות הבטחון</Radio>
                                    <Radio className='radio-btn' value="צה״ל">צה״ל</Radio>
                                    <Radio className='radio-btn' value="ממשלתי">ממשלתי</Radio>
                                    <Radio className='radio-btn' value="תעשייה">תעשייה</Radio>
                                    <Radio className='radio-btn' value="מוסדות חינוך">מוסדות חינוך</Radio>
                                    <Radio className='radio-btn' value="מוסדות אקדמיה">מוסדות אקדמיה</Radio>
                                    <Radio className='radio-btn' value="אחר">אחר</Radio>
                                </Space>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            className='form-item form-select'
                            name="bahad"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>אם הינכם משרתים בקריית ההדרכה: בחרו בבה״ד שלכם.</label>}
                            rules={[{ required: true, message: 'אנא בחרו בבה״ד שלכם. אם אינכם משרתים בקרית ההדרכה - בחרו באפשרות ״בחר״' }]}>
                            <Select
                                initialvalues={{
                                    value: 'בחר',
                                    label: 'בחר',
                                }}

                                options={[{
                                    value: 'בחר',
                                    label: 'בחר',
                                },
                                {
                                    value: '6',
                                    label: 'בה״ד 6',
                                },
                                {
                                    value: '7',
                                    label: 'בה״ד 7',
                                },
                                {
                                    value: '10',
                                    label: 'בה״ד 10',
                                },
                                {
                                    value: '11',
                                    label: 'בה״ד 11',
                                },
                                {
                                    value: '20',
                                    label: 'בה״ד 20',
                                },
                                {
                                    value: '13',
                                    label: 'בה״ד 13',
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
                            name="bus"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>האם תרצו להירשם להסעה?ֿ | ההסעה תצא מחניון ״חנה וסע״ בתל אביב | פתיחת ההסעה תלויה בכמות הנרשמים.</label>}
                            rules={[{ required: true, message: 'האם תרצו להירשם להסעה?ֿ' }]}
                        >
                            <Radio.Group>
                                <Space className='radio-container' direction="vertical">
                                    <Radio className='radio-btn' value="כן">כן</Radio>
                                    <Radio className='radio-btn' value="לא">לא</Radio>
                                    <Radio className='radio-btn' value="עוד לא יודע">לא יודע עדיין</Radio>
                                </Space>
                            </Radio.Group>
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
