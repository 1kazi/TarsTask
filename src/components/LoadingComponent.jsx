import {  Image } from "react-bootstrap";
import Loading from "../images/Loading.png";



export default function LoadingComponent  ()  {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center ">
    
        <Image src={Loading} />
      </div>
      <div className="d-flex align-items-center justify-content-center fs-6 fw-bold Loading-text">
        Loading some awesome 
      </div>
      <div className="d-flex align-items-center justify-content-center fs-6 fw-bold Loading-text">
        Images...
      </div>
    </>
  );
}
