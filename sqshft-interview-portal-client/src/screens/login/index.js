import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import {
  API_END_POINTS,
  API_METHODS,
  COMPANY_CAPTION,
  F_NAME,
  IMAGE_URL,
  ROLL_NUMBER,
  ROUTES_MAP,
} from "../../utils/constants";
import { isUserLoggedIn, makeAPICall } from "../../utils/helpers";
import Modal from "../../components/modal";
import Loading from "react-fullscreen-loading";

const Login = ({ requestFullScreen }) => {
  const [firstName, setFirstName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (isUserLoggedIn()) {
      navigate(ROUTES_MAP.QUESTIONS);
    }
  }, []);

  const onStartButtonPress = async () => {
    if (firstName.length < 2) {
      setShowModal(true);
      setModalContent("Please enter valid name.");
      return;
    }
    setLoading(true);
    const data = await makeAPICall({
      endpoint: API_END_POINTS.START_TEST,
      body: {
        firstName,
        rollNumber,
      },
      method: API_METHODS.POST,
    });

    if (data?.success) {
      localStorage.setItem(F_NAME, firstName);
      localStorage.setItem(ROLL_NUMBER, rollNumber);
      requestFullScreen();
      navigate(ROUTES_MAP.QUESTIONS);
    } else {
      setShowModal(true);
      setModalContent(data?.message || "Kindly contact the admin");
    }
    setLoading(false);
  };

  if (loading) {
    <Loading loading background="#FFF" loaderColor="#257d256b" />;
  }

  return (
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-md-6 left-container custom-container">
        <img src={IMAGE_URL} className="img-fluid" alt=" "></img>
        <p className="lead mt-4">{COMPANY_CAPTION}</p>
      </div>
      <div className="col-md-6 custom-container">
        <input
          className="form-control w-75 m-3"
          value={firstName}
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="form-control w-75 m-3"
          type="text"
          placeholder="Enter College Roll Number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />
        <div
          class="alert alert-success instruction-box text-center w-75 mt-3"
          role="alert"
        >
          <h4 class="alert-heading">Important Instructions</h4>
          <p>Please follow these rules while attempting the test:</p>
          <ul class="text-start">
            <li>Do not reload or refresh the page.</li>
            <li>Do not exit or minimize the browser window.</li>
            <li>Once started, complete the test without interruptions.</li>
          </ul>
          <hr />
          <p class="mb-0">
            Any violation of these rules may result in automatic test
            submission.
          </p>
        </div>
        <button
          className="btn btn-primary"
          onClick={onStartButtonPress}
          disabled={firstName.length === 0 || rollNumber.length === 0}
        >
          Start test
        </button>
        <Modal
          show={showModal}
          hideModal={() => setShowModal(false)}
          content={modalContent}
        >
          Modal content
        </Modal>
      </div>
    </div>
  );
};

export default Login;
