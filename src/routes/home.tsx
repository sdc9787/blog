import "../CSS/home.css";
import { useNavigate } from "react-router-dom";
import BGImg from "../Component/backgroundImg";

interface Post {
  post: { title: string; detail: string; time: string; category: string }[];
}

function Home(props: Post) {
  let navigate = useNavigate(); // 페이지 이동

  return (
    <>
      <BGImg name="전체 글"></BGImg>
      <div className="full-post">
        {props.post.map((a, i) => {
          return (
            <div
              onClick={() => {
                navigate(`/Detail/${i}`);
              }}
              key={i}
              className="full-post-element">
              <span className="full-post-element-category">{a.category}</span>
              <span className="full-post-element-title">{a.title}</span>
              <span className="full-post-element-time">{a.time}</span>
              <span className="full-post-element-detail">{a.detail}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
