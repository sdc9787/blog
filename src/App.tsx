import { Route, Routes } from "react-router-dom";
import "./CSS/App.css";
import Detail from "./routes/Detail";
import Home from "./routes/home";
import { useState } from "react";

function App() {
  let [profileState, setprofileState] = useState<boolean>(false); //leftprofile sidebar 상태
  let profileImg: string = "./public/profile.png"; //프로필 이미지 주소
  let [chatState, setchatState] = useState<boolean>(false);
  const blogName: string = "sdc9787"; //블로그 이름
  const profileName: string = "신대철"; //profile 이름

  return (
    <>
      <header>
        <div className="nav">
          <div className="profile">
            <img
              className="profile-icon"
              onClick={() => {
                profileState === false ? setprofileState(true) : setprofileState(false);
              }}
              src={profileImg}
            />
          </div>
          <div className="nav-title">{blogName}</div>
          <div className="dark-mode">
            <i className="xi-moon xi-x"></i>
          </div>
        </div>
      </header>
      <div className="main-frame">
        <div className={"left-menu left-menu-" + profileState}>
          <i
            onClick={() => {
              setprofileState(false);
            }}
            className={"xi-arrow-left xi-2x left-menu-icon-" + profileState}></i>
          <div className="left-menu-profile">
            <img className="left-menu-profile-icon" src={profileImg} />
            <span className="left-menu-profile-blogName">{blogName}</span>
            <span className="left-menu-profile-profileName">{profileName}</span>
          </div>
        </div>
        <div className="up">
          <i className="xi-angle-up-min xi-2x"></i>
        </div>
        <div className="chat-icon">
          <i
            onClick={() => {
              chatState === false ? setchatState(true) : setchatState(false);
            }}
            className="xi-forum xi-x"></i>
        </div>
        <div className={"chat chat-" + chatState}></div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/:id" element={<Detail></Detail>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
