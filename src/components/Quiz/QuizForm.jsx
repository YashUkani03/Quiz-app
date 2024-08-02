// import React from 'react';
// import Container from ''
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';

// function QuizForm() {
//     return (
//         <div className='flex justify-center items-center text-white'>
//             <div>
//                 <React.Fragment>
//                     <CssBaseline />
//                     <Container maxWidth="sm">
//                         <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
//                     </Container>
//                 </React.Fragment>
//             </div>
//         </div>
//     )
// }

// export default QuizForm

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TextField, Typography } from '@mui/material';

export default function QuizForm() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container >
                <Box sx={{ height: '70vh' }} style={{ backgroundColor: 'transparent', border: '1px solid teal' }} >
                    <Typography style={{ padding: 40, fontSize: 30, color: 'white', }}>
                        Let's Crack the Quiz!
                    </Typography>
                    <Box component='section' sx={{ mx: 13, width: '80%', height: '45vh', border: '1px dashed teal' }}>
                        <Typography className='text-white'>
                            Who is the Iron man of India?
                        </Typography>
                        <Typography className='text-white'>
                            Who is the Iron man of India?
                        </Typography>
                        <Typography className='text-white'>
                            Who is the Iron man of India?
                        </Typography>
                        <Typography className='text-white'>
                            Who is the Iron man of India?
                        </Typography>
                        <Typography className='text-white'>
                            Who is the Iron man of India?
                        </Typography>

                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}