import React from 'react';
import { CssBaseline, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import questions from './Question';
import { useLocation } from 'react-router-dom';
function Result() {

    const location = useLocation()
    const { correctAnswers, totalQuestions } = location.state
    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                <Box sx={{ height: '70vh', overflow: 'hidden', overflowY: 'auto', scrollbarWidth: 'none' }} style={{ backgroundColor: 'transparent', border: '1px solid teal' }}>
                    <Typography style={{ color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20, fontSize: 30 }}>
                        You have Scored {correctAnswers.length} out of {totalQuestions} Questions
                    </Typography>
                    {questions.map((question, index) => (
                        <Box key={index} sx={{ marginLeft: 5, marginRight: 5, marginTop: 2, marginBottom: 2, padding: 2, border: '1px solid teal', borderRadius: '8px' }}>
                            <Typography variant="h6" style={{ color: 'white', }} >
                                {question.question}
                            </Typography>
                            <Typography variant="body1" style={{ color: 'white', marginTop: 1 }}>
                                Correct Answer: {question.options.find(option => option.value === question.correctAnswer)?.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </React.Fragment>

    )
}

export default Result
