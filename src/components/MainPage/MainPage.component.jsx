import './MainPage.styles.css';
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SquareDetails from '../SquareDetails/SquareDetails.component';
import CountdownTimer from '../countdown/CountdownTimer.component';
import Slider from '../slider/slider.component';
import ParticipantsPreview from '../ParticipantsPreview/ParticipantsPreview.component';
import FrontAnimation from '../FrontAnimation/FrontAnimation.component';
import Luz from '../../components/Luz/Luz.component'
import ContactInfo from '../ContactInfo/ContactInfo.component';

const MainPage = (props) => {
    const navigate = useNavigate();
    const control = useAnimation();
    const motionRef1 = useRef(null);
    const motionRef2 = useRef(null);
    const motionRefTimer = useRef(null);
    const motionRefBlack = useRef(null);
    const isInViewBlack = useInView(motionRefBlack);
    const isInViewTimer = useInView(motionRefTimer);
    const isInView1 = useInView(motionRef1);
    const isInView2 = useInView(motionRef2);

    const DATA = [
        `כנס הערכת הדרכה הצה"לי, מיועד לאוכלוסיית השרוך הבורדו, אוכלוסיית פיתוח ההדרכה ולאוכלוסיית מנהלי ההדרכה הבכירים בבה"דים ובחילות צה"ל.`,
        `הכנס מהווה הזדמנות ייחודית עבור מפתחים ומפתחות ומפקדים ומפקדות בעולמות ההדרכה להתכנס, לדון וללמוד על סוגיות מרכזיות בנושא הערכת הדרכה בכלל והערכת הדרכה בשנת מלחמה בפרט.`,
        `במהלך הכנס נשמע הרצאות מרתקות ממפתחי ומפתחות הדרכה ומפקדים ומפקדות בכירים ובכירות על הערכת הדרכה, נקבל כלים יישומיים ונחזק את הקהילה המקצועית שלנו.`,
        `צוות ההיגוי של הכנס מורכב מקריית ההדרכה, חיל האוויר, חיל הים, פיקוד ההכשרות והאימונים, אמ"ן, פיקוד העורף ועוד רבים וטובים.`
    ]

    useEffect(() => {
        props.handleDate(isInViewBlack);
    }, [isInViewBlack]);

    return (
        <div className="main-page">
            <span className='section1 section'>
                <div className='white-section1'>

                <h1 className='main-header'>הערכת הדרכה מעולם לא הייתה רלוונטית יותר.</h1>
                <p className='small-text'>הכנס הצה״לי להערכת הדרכה 2024</p>
                    <button className='sign-btn pointer' onClick={() => navigate("/registration")}>להרשמה</button>
                </div>
                <div className='black-section1' ref={motionRefBlack}>
                    <FrontAnimation></FrontAnimation>
                </div>
            </span>

            <span className='section2 section'>
                <div className='white-section2'>

                    <div className='text-pic-section text-pic-section1'>

                        <motion.div className='text-section text-section1' ref={motionRef1} style={{ transform: isInView1 ? "none" : "translateX(300px)", opacity: isInView1 ? 1 : 0, transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)" }}>
                            <h1 className='header'>על הכנס</h1>
                            <p className="main-page-text">{DATA[0]}</p>
                            <p className="main-page-text">{DATA[1]}</p>
                        </motion.div>
                    </div>

                    <div className='text-pic-section text-pic-section2'>
                        <div className='text-section text-section2'>
                            <motion.div ref={motionRef2} style={{ transform: isInView2 ? "none" : "translateX(-300px)", opacity: isInView2 ? 1 : 0, transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)" }}>
                                <p className="main-page-text">{DATA[2]}</p>
                                <p className="main-page-text">{DATA[3]}</p>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div ref={motionRefTimer} style={{ opacity: isInViewTimer ? 1 : 0, transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1)" }}>
                        <CountdownTimer targetDate={props.targetDate} />
                    </motion.div>
                </div>
            </span>
            <span className='section3 section'>
                <div className='black-section2'>
                    <ParticipantsPreview></ParticipantsPreview>
                </div>
                <SquareDetails></SquareDetails>
            </span>
            <Luz></Luz>
            <ContactInfo></ContactInfo>
        </div>
    );
}


export default MainPage;