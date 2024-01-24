import { Route, Routes, useNavigate } from "react-router-dom";
import "./CSS/App.css";
import Detail from "./routes/Detail";
import Home from "./routes/home";
import Category from "./routes/Category";
import { useState } from "react";
import postList from "./post.json";

function App() {
  let [profileState, setprofileState] = useState<boolean>(false); //leftprofile sidebar 상태
  let [chatState, setchatState] = useState<boolean>(false);
  let [category, setcategory] = useState<string[]>(["테스트 카테고리1", "테스트 카테고리2"]);
  let [newPost, setNewPost] = useState<string[]>(["테스트 게시글1", "테스트 게시글2"]);
  const blogName: string = "sdc9787"; //블로그 이름
  const profileName: string = "신대철"; //profile 이름
  const profileImg: string = "/public/profile.png"; //프로필 이미지 주소
  const navigate = useNavigate(); //페이지 이동

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
          <div onClick={() => navigate("/")} className="nav-title cursor-pointer">
            {blogName}
          </div>
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
          <div className="left-menu-element-group">
            <div className="left-menu-element">
              <span className="left-menu-element-title">카테고리({category.length})</span>
              {category.map((a, i) => {
                return (
                  <span onClick={() => navigate("/Category/" + i)} key={i} className="left-menu-element-detail cursor-pointer">
                    {a}
                  </span>
                );
              })}
            </div>
            <div className="left-menu-element">
              <span className="left-menu-element-title">최신 게시글({newPost.length})</span>
              {newPost.map((a, i) => {
                return (
                  <span onClick={() => navigate("/Detail/" + i)} key={i} className="left-menu-element-detail cursor-pointer">
                    {a}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className="up">
          <i
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            className="xi-angle-up-min xi-2x"></i>
        </div>
        <div className="chat-icon">
          <i
            onClick={() => {
              chatState === false ? setchatState(true) : setchatState(false);
            }}
            className="xi-forum xi-x"></i>
        </div>
        <div className={"chat chat-" + chatState}></div>

        <div className="main-frame-routes">
          <Routes>
            <Route path="/" element={<Home post={postList.post}></Home>}></Route>
            <Route path="/Category/:id" element={<Category></Category>}></Route>
            <Route path="/Detail/:id" element={<Detail post_detail={postList.post}></Detail>}></Route>
            <Route path="*" element={<div>접근할 수 없는 페이지입니다.</div>}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
