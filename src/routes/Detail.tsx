import "../CSS/Detail.css";
import { useParams } from "react-router-dom";
import BGImg from "../Component/backgroundImg";

interface Post {
  post_detail: { title: string; detail: string; time: string; category: string }[];
}

function Detail(props: Post) {
  let { id }: string = useParams();
  console.log(id);

  return (
    <>
      <BGImg name={id}></BGImg>
      <div className="index-frame">
        <div className="index">
          <div className="index-title">
            <span>목차</span>
            <i className="xi-bars"></i>
          </div>
        </div>
        <div className="index-detail">11</div>
      </div>
    </>
  );
}

export default Detail;
