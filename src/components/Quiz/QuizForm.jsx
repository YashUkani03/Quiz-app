import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography, FormControl, FormControlLabel, RadioGroup, Radio, Button } from '@mui/material';
import questions from '../Question';
import { Link, useNavigate } from 'react-router-dom';


export default function QuizForm() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [selectedAnswer, setSelectedAnswer] = React.useState('');
    const [isCorrect, setIsCorrect] = React.useState(null);
    const [correctAnswers, setCorrectAnswers] = React.useState('')
    const [incorrectAnswers, setIncorrectAnswers] = React.useState('')
    const navigate = useNavigate()

    const handleAnswerChange = (event) => {
        setSelectedAnswer(event.target.value);
    };

    const checkAnswer = () => {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedAnswer === currentQuestion.correctAnswer) {
            setIsCorrect(true);
            setCorrectAnswers([...correctAnswers, currentQuestion]);
        } else {
            setIsCorrect(false);
            setIncorrectAnswers([...incorrectAnswers, { question: currentQuestion, selectedAnswer }]);
        }
    };

    const nextQuestion = () => {
        if (selectedAnswer === '') {
            alert('Please select an answer before proceeding to the next question.');
            return;
        }
        checkAnswer()
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer('');
            setIsCorrect(null);
        }
    };

    const onResultShow = () => {
        navigate('/result', { state: { correctAnswers, incorrectAnswers, totalQuestions: questions.length } })
    }

    const previousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                <Box sx={{ height: '70vh' }} style={{ backgroundColor: 'transparent', border: '1px solid teal' }}>
                    <Typography style={{ padding: 40, fontSize: 30, color: 'white' }}>
                        Let's Crack the Quiz!
                    </Typography>
                    <Box component='section' sx={{ mx: 13, width: '80%', height: '45vh' }}>
                        <Typography variant="h6" gutterBottom style={{ color: 'white', padding: 10, paddingLeft: 30 }}>
                            Q. {currentQuestion.question}
                        </Typography>
                        <FormControl component="fieldset" >
                            <RadioGroup
                                style={{ color: 'white' }}
                                aria-label="quiz-options"
                                name="quiz-options"
                                value={selectedAnswer}
                                onChange={handleAnswerChange}
                            >
                                {currentQuestion.options.map((option) => (
                                    <FormControlLabel
                                        style={{ color: 'white' }}
                                        key={option.value}
                                        value={option.value}
                                        control={<Radio style={{ color: 'white', paddingLeft: 50 }} />}
                                        label={option.label}
                                    />
                                ))}
                            </RadioGroup>
                            {isCorrect !== null && (
                                <Typography
                                    variant="outlined"
                                    style={{
                                        marginTop: 10,
                                        marginLeft: 40,
                                        color: isCorrect ? 'green' : 'red'
                                    }}
                                >
                                    {isCorrect ? 'Correct!' : 'Incorrect!'}
                                </Typography>
                            )}
                            <div className='flex flex-row items-stretch'>
                                <Button
                                    variant="outlined"
                                    onClick={previousQuestion}
                                    style={{ marginTop: 35, marginLeft: 35, color: 'whitesmoke' }}
                                    disabled={currentQuestionIndex === 0}
                                >
                                    Previous Question
                                </Button>
                                {currentQuestionIndex === questions.length - 1 ?
                                    <Button
                                        variant="contained"
                                        onClick={onResultShow}
                                        style={{ marginLeft: 35, marginTop: 35, color: 'white', borderColor: 'teal', }}
                                    >
                                        <Link to='/result'>
                                            Submit
                                        </Link>
                                    </Button>
                                    :
                                    <Button
                                        variant="outlined"
                                        onClick={nextQuestion}
                                        style={{ marginTop: 35, marginLeft: 35, color: 'white' }}

                                    >
                                        Next Question
                                    </Button>
                                }
                            </div>
                        </FormControl>
                    </Box>
                </Box>
            </Container>
        </React.Fragment >
    );
}
