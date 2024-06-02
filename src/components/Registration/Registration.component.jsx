
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
        `רס"ן (במיל') פנינה נוימן | מי מפחד (למדוד) מיומנויות רכות`,
        `רס"ר (במיל') אלמוג כהן ואע"צ אלונה צנטי | הערכה 360°- ככה עושים את זה נכון`,
        `עו"ד משה שוקרי, ר' תחום הערכת הדרכה באגף ההדרכה, משטרת ישראל ואלינה באנק, מנהלת פיתוח הדרכה, זכיין ההדרכה במכללה הלאומית לשוטרים | הערכת הדרכה – הדור הבא`,
        `טל בוזנאה ושרית צברי | קמפוס דיגיטלי כפלטפורמה להערכה`,
    ]
    
    const SEAT2 = [
        `הגב' אורית ברוידס | הערכת הדרכה כמחזקת תחושת מסוגלות`,
        `רס״ן יסכה רוטשילד מפקדת טייסת חופ"ה וסרן הדס גולבר קצינת חופ"ה בית ספר לטיסה | הערכת הדרך- תהליך בניית טופס הערכת גיחה בקורס טיס` ,   
        `רס"ן אודי גוברין | למידה מבצעית- מש"ל`,
        `רחלי גנשאפט פינטו | ארגון מע/אריך`,
    ]

    const onFinish = useCallback (
        async ({email, name, level, phone, seat1, seat2, unit, role, bahad, car, carNumber, color, model, food}) => {
            try {
                const response = await fetch (
                    'https://docs.google.com/forms/d/e/1FAIpQLScjYm6gcS-WCMMAO2Pxo7oxa2advDvmHXtBK2e8b1h8mOl-gA/formResponse?' +
                    new URLSearchParams ({
                        'entry.934400202': name ?? '',
                        'entry.1115520134': level ?? '',
                        'entry.860340030': phone ?? '',
                        'entry.590287215': seat1,
                        'entry.1127533607': seat2,
                        'entry.1560729842': unit ?? '',
                        'entry.1914024005': role ?? '',
                        'entry.349923372': bahad,
                        'entry.604594531': car,
                        'entry.182644226': carNumber ?? '',
                        'entry.877109021': color ?? '',
                        'entry.460501388': model ?? '',
                        'entry.1891370651': food,
                        emailAddress: email,
                    }),
                    {
                        mode: 'no-cors',
                    }

        );
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
                    rules={[{ required: true, message: 'אנא הכניסו את השם שלכם.' }]}
                >
                    <Input className='form-input' />
                </Form.Item>
                <Form.Item
                    className='form-item'
                    name="level"
                    label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>דרגה (לאנשי צבא בלבד)</label>}
                    rules={[{ required: false, message: 'אנא הכניסו את דרגה שלכם.' }]}
                >
                    <Input className='form-input' />
                </Form.Item>
                <Form.Item
                    className='form-item'
                    name="phone"
                    label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>פלאפון</label>}
                    rules={[{ required: true, message: 'אנא הכניסו את טלפון שלכם.' }]}
                >
                    <Input className='form-input' />
                </Form.Item>
                <Form.Item
                    className='form-item'
                    name="seat1"
                    label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}> מבין האפשרויות הבאות, עלייך לבחור באפשרות המועדפת עלייך: מושב א׳</label>}
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
                    label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}> מבין האפשרויות הבאות, עלייך לבחור באפשרות המועדפת עלייך:  מושב ב׳</label>}
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
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>אם הינך מקריית ההדרכה: נא לבחור בבה״ד שלכם</label>}
                            rules={[{ required: true, message: "" }]}>
                            <Select
                                initialvalues={{
                                    value: 'בחר',
                                    label: 'בחר',
                                }}

                                options={[
                                {
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
                                    value: 'בה״ד החינוך',
                                    label: 'בה״ד החינוך',
                                },
                                {
                                    value: 'מפקדה',
                                    label: 'מפקדה',
                                }
                                ]}>

                            </Select>
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="car"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>דרגת סרן ומעלה: מעוניינים באישור כניסה לרכב</label>}
                            rules={[{ required: false, message: "" }]}
                        >
                            <Radio.Group>
                                <Space className='radio-container' direction="vertical">
                                    <Radio className='radio-btn' value="כן">כן</Radio>
                                    <Radio className='radio-btn' value="לא">לא</Radio>
                                </Space>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="carNumber"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>אם כן, יש למלא את הפרטים הבאים: מספר הרכב</label>}
                            rules={[{ required: false, message: "" }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="color"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>צבע הרכב</label>}
                            rules={[{ required: false, message: "" }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="model"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>דגם הרכב</label>}
                            rules={[{ required: false, message: "" }]}
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
                                    <Radio className='radio-btn' value="אין">אין</Radio>
                                    <Radio className='radio-btn' value="צמחוני">צמחוני</Radio>
                                    <Radio className='radio-btn' value="טבעוני">טבעוני</Radio>
                                    <Radio className='radio-btn' value="צליאקי">צליאקי</Radio>
                                    <Radio className='radio-btn' value="אחר">אחר</Radio>
                                </Space>
                            </Radio.Group>
                        </Form.Item>
             </div>
                 <Button type="primary" htmlType="submit" className='pointer' id='submitBtn'>
                    שליחה
                </Button>
            </Form>
            </div>
        </>
    )
}

export default Registration;
