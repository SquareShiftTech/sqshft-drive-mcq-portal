import { IMAGE_URL } from "../../utils/constants";
import "./index.css";

export const Navbar = () => {
  return (
    <>
      <div className="nav-bar-container">
        <img src={IMAGE_URL} className="img" alt=" "></img>
      </div>
      <div
        style={{
          color: "red",
          padding: "20px 0 0 0",
          textAlign: "center",
          fontSize: "26px",
        }}
      >
        Please stay on this tab!. If you try to change tab you will be logged
        out
      </div>
    </>
  );
};
