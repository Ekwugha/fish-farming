import React from 'react';
import {useState} from 'react';
import QuizScreen from "../../component/QuizScreen.component";
import JoinScreen from "../../component/JoinScreen.component";
import Header from '../../component/header/header.component';
import Footer from '../../component/footer/footer.component';


import './quiz.style.css';

function QuizPage() {
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    return (
        <>
        <Header title="quiz"/>
            <div className='quiz-container font'>
                {
                    isQuizStarted ? (
                        <QuizScreen retry={()=>setIsQuizStarted(false)} />
                    ) : (
                        <JoinScreen start={()=>setIsQuizStarted(true)} />
                    )
                }
            </div>
        <Footer />
        </>
    )
}

export default QuizPage;