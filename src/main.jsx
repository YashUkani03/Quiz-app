import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import QuizForm from './components/Quiz/QuizForm.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/Quiz',
        element: <QuizForm />,

      },
      // {
      //   path: '/result',
      //   element: <Result />,
        
      // },
      // {
      //   path: '/Quiz',
      //   element: <QuizForm />,
        
      // }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
