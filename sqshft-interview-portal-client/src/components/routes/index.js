import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../../screens/login";
import ProtectedRoute from "./protectedroute";
import { ROUTES_MAP } from "../../utils/constants";
import { Results } from "../../screens/results";
import QuestionBoard from "../../screens/QuestionBoard.js/QuestionBoard";
import Modal from "../modal";


const Navigation = () => {
  const [showModal, setShowModal] = useState(false);

  const [message, setMessage] = useState("Please stay on this tab!. If you try again you will be logged out");

  const [count, setCount] = useState(0)

  const requestFullScreen = () => {
    const docEl = document.documentElement;

    if (docEl.requestFullscreen) {
      docEl.requestFullscreen();
    } else if (docEl.mozRequestFullScreen) { // Firefox
      docEl.mozRequestFullScreen();
    } else if (docEl.webkitRequestFullscreen) { // Chrome, Safari
      docEl.webkitRequestFullscreen();
    } else if (docEl.msRequestFullscreen) { // IE/Edge
      docEl.msRequestFullscreen();
    }
  };

  
  useEffect(() => {
    const handleVisibilityChange = () => {
      // Detect when the page visibility changes (e.g., tab switch, minimize, etc.)
      if (document.hidden) {
        setShowModal(true);
        setCount((oldState) => oldState + 1);
      } 
    };

    const handleWindowBlur = () => {
      setShowModal(true);
      setCount((oldState) => oldState + 1);
    };

    // Add event listeners for visibility change and window focus/blur events
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    
    // Clean up event listeners when the component unmounts
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.addEventListener('blur', handleWindowBlur);
    };
  }, []);


  useEffect(() => {
    if(count === 2) {
      setShowModal(true);
      setMessage("you have been logged out due to a policy violation.");
      setCount((oldState) => oldState + 1);
      localStorage.clear();
    }
  }, [count])


  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES_MAP.LOGIN} element={<Login requestFullScreen={requestFullScreen}/>} />
        <Route exact path={ROUTES_MAP.QUESTIONS} element={<ProtectedRoute />}>
          <Route
            exact
            path={ROUTES_MAP.QUESTIONS}
            element={<QuestionBoard />}
          />
        </Route>
        <Route path={ROUTES_MAP.ANY} element={<Login />} />
        <Route path={ROUTES_MAP.RESULTS} element={<Results />} />
      </Routes>
      {/* Show the warning modal if the state is true */}
      <Modal
          show={showModal}
          hideModal={() => setShowModal(false)}
          content={message}
        >
          
        </Modal>
    </BrowserRouter>
  );
};

export default Navigation;

