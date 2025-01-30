import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../../screens/login";
import ProtectedRoute from "./protectedroute";
import { ROUTES_MAP } from "../../utils/constants";
import { Results } from "../../screens/results";
import QuestionBoard from "../../screens/QuestionBoard.js/QuestionBoard";

const Navigation = () => {
  const requestFullScreen = () => {
    const docEl = document.documentElement;

    if (docEl.requestFullscreen) {
      docEl.requestFullscreen();
    } else if (docEl.mozRequestFullScreen) {
      // Firefox
      docEl.mozRequestFullScreen();
    } else if (docEl.webkitRequestFullscreen) {
      // Chrome, Safari
      docEl.webkitRequestFullscreen();
    } else if (docEl.msRequestFullscreen) {
      // IE/Edge
      docEl.msRequestFullscreen();
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTES_MAP.LOGIN}
          element={<Login requestFullScreen={requestFullScreen} />}
        />
        <Route exact path={ROUTES_MAP.QUESTIONS} element={<ProtectedRoute />}>
          <Route
            exact
            path={ROUTES_MAP.QUESTIONS}
            element={<QuestionBoard requestFullScreen={requestFullScreen} />}
          />
        </Route>
        <Route path={ROUTES_MAP.ANY} element={<Login />} />
        <Route path={ROUTES_MAP.RESULTS} element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
