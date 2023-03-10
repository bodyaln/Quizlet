import React from "react";
//Styles
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";
import {AnswerObject} from '../App';
type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard : React.FC<Props> = ({
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNr, 
    totalQuestions
}) => (
    <div>
        <p className="number"> Question: {questionNr} / {totalQuestions}</p>
        <p dangerouslySetInnerHTML={{ __html: question}}/>
        <Wrapper>
            {answers.map(answer =>(
                <ButtonWrapper 
                key={answer}
                correct={userAnswer?.correactAnswer === answer}
                userClicked={userAnswer?.answer === answer}
                >
                    <button disabled={!!userAnswer} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html : answer}}/>
                    </button>
                </ButtonWrapper>
            ))}
        </Wrapper>
    </div>
);

export default QuestionCard;