import { SlLike } from "react-icons/sl";
import {  Image } from "react-bootstrap";

export default function CardSection({data,handleShow}) {
  return (
    <>
      <div className="card-box">
        <div className="main-img-wrapper" >
          <Image className="main-img" onClick={()=>handleShow(data)} src={data.urls.regular}/>
        </div>
        <div className=" d-flex align-items-center w-100 justify-content-between ">
          <div className="d-flex align-items-center w-100 ">
            <div>
              <Image src={data.user.profile_image.medium} className="image-section"></Image>
            </div>
            <div className="">
              <div className="card-first-text fw-bold pointer" onClick={()=>handleShow(data)}>{data.user.name}</div>
              <div className="card-second-text fw-bold">@{data.user.twitter_username}</div>
            </div>
          </div>

          <div className="like-frame d-flex pe-2 align-items-center gap-2 justify-content-between">
            <SlLike className="" />
            <span className="like-number fx-14 fw-bold">{data.likes}</span>
          </div>
        </div>
      </div>
    </>
  );
}
