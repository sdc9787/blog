import "../CSS/Detail.css";
import { useParams } from "react-router-dom";
import BGImg from "../Component/backgroundImg";

interface Post {
  post_detail: { title: string; detail: string; time: string; category: string }[];
}

function Detail(props: Post) {
  let { id } = useParams();
  let detail_id: number = 0;
  if (typeof id === "string") detail_id = parseInt(id);
  return (
    <>
      <BGImg name={props.post_detail[detail_id].title}></BGImg>
      <div className="index-frame">
        <div className="index">
          <div className="index-title">
            <span>목차</span>
            <i className="xi-bars"></i>
          </div>
        </div>
        <div className="index-detail">{props.post_detail[detail_id].detail}</div>
      </div>
    </>
  );
}

export default Detail;
