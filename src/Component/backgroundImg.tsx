interface propsType {
  name: string | number;
}

function BGImg(props: propsType) {
  const backgroundImg: string = "/public/backgroundImg.jpg";
  return (
    <>
      <div className="backGroundImg">
        <img src={backgroundImg} />
        <div>
          <span>{props.name}</span>
        </div>
      </div>
    </>
  );
}

export default BGImg;
