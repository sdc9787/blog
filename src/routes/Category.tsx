import "../CSS/Categoty.css";
import { useParams } from "react-router-dom";

function Category() {
  let { id } = useParams();
  console.log(id);

  return (
    <>
      <div className="main-frame">
        <div className="index-frame">
          <div className="index">
            <div className="index-title">
              <span>목차</span>
              <i className="xi-bars"></i>
            </div>
          </div>
        </div>

        <div className="index-detail">11</div>
      </div>
    </>
  );
}

export default Category;
