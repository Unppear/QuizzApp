import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Pages/Home/Home';
import Quizz01 from './Pages/Quizz - 01/quizz01';
import Feedback from './Pages/Feedback/feedback';
import ErrorPage from './Error-page';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/quizz01",
    element: <Quizz01 />,

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
    <RouterProvider router={router} basename={process.env.PUBLIC_URL}/>
    <Footer/>
  </React.StrictMode>
);