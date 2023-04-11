import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Quizz01 from './Pages/Quizz - 01/quizz01';
import Quizz02 from './Pages/Quizz - 02/quizz02';
import Quizz03 from './Pages/Quizz - 03/quizz03';
import Quizz04 from './Pages/Quizz - 04/quizz04';
import Quizz05 from './Pages/Quizz - 05/quizz05';
import Quizz06 from './Pages/Quizz - 06/quizz06';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Pages/Home/Home';
import Feedback from './Pages/Feedback/feedback';
import ErrorPage from './Error-page';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/quizz01",
    element: <Quizz01 />,
  },
  {
    path: '/quizz02',
    element: <Quizz02 />
  },
  {
    path: '/quizz03',
    element: <Quizz03 />
  },
  {
    path: '/quizz04',
    element: <Quizz04 />
  },
  {
    path: '/quizz05',
    element: <Quizz05 />
  },
  {
    path: '/quizz06',
    element: <Quizz06 />
  },
  {
    path: "/Feedback",
    element: <Feedback />
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router}/>
    <Footer/>
  </React.StrictMode>
);