import { useEffect, useState } from "react";
import { Header, CardSection } from "../components";
import { Button, Image } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Backgroundimg from "../images/Header-section-img.png";
import backArrow from "../assets/images/back-arrow.png";
import { BiSearch } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
import fetchData from "../server/Api";
import LoadingComponent from "../components/LoadingComponent";

export default function Home() {
  const [data, setData] = useState([]);
  const [serch, setSerch] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(false);
  const [popUpData,setPopUpData]=useState(null);

  async function getData(any = false) {
    // const res = await fetchData('https://api.unsplash.com/photos?page=1&client_id=yOzIoIZ2QueeIEWegfgVX9rYtYdic9ihlGdZroIESKY');
    const res = await fetchData(
      `https://api.unsplash.com/${serch && "search/"}photos?page=1${
        serch && `&query=${serch}`
      }&per_page=18&client_id=yOzIoIZ2QueeIEWegfgVX9rYtYdic9ihlGdZroIESKY`
    );
    if (res.status == 200) {
      if (any) {
        setData(res.data.results);
      } else {
        setData(res.data);
      }

      setLoading(false);
    }
    console.log(res.data);
  }




  useEffect(() => {
    getData();
  }, []);

  const handleClose = () => setShow(false);
  function handleShow (data){ 
    setPopUpData(data);
    setShow(true)
  };
  // function serchOnTagsHandler(value){
  //   setSerch(value)
  // }
  return (
    <div>
      <Header />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{popUpData?.alt_description || "Heading of Data"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Image src={popUpData?.urls?.regular || Backgroundimg} alt="image" className="model-main-image w-100"/>
          <div className=" d-flex align-items-center w-100 justify-content-between ">
          <div className="d-flex align-items-center w-100 ">
            <div>
              <Image src={popUpData?.user.profile_image.medium} className="image-section"></Image>
            </div>
            <div className="">
              <div className="card-first-text fw-bold pointer" >{popUpData?.user.name}</div>
              <div className="card-second-text fw-bold">@{popUpData?.user.twitter_username}</div>
            </div>
          </div>

          <div className="like-frame d-flex pe-2 align-items-center gap-2 justify-content-between">
            <SlLike className="" />
            <span className="like-number fx-14 fw-bold">{popUpData?.likes}</span>
          </div>
        </div>
        <h6 className="mt-3">Related Tags</h6>
          <div className="animal-result-box-main mt-3">
                  {data &&
                    data.map((item, i) => {
                      return (
                    
                          <div className="animal-result-box" onClick={()=>serchOnTagsHandler(item.tags && item.tags[1].title)}>
                            <span>
                              {(item.tags &&  item.tags[1].title[0].toUpperCase() + item.tags[1].title.slice(1)) || "tages"}
                            </span>
                          </div>
                       
                      );
                    })}
                </div>

        </Modal.Body>
   
      </Modal>

      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="">
          {!result && (
            <div className="hero-section">
              <Image className="Image-section" src={Backgroundimg} />
              <div className="container">
                {/*--------------------- HOME HERO SECTION START ---------------------------*/}
                <div className="main-section">
                  <h3 className="Download-section text-white"> 
                    Download High Quality Images by creators
                  </h3>
                  <p className="Descption-text">
                    Over 2.4 million+ stock Images by our talented community
                  </p>
                  <div className=" search-section d-flex align-items-center justify-content-center ">
                    <BiSearch className="ms-3" />
                    <input
                      type="text"
                      className="input-box w-100 bg-white "
                      name="search"
                      value={serch}
                      onChange={(e) => {
                        setSerch(e.target.value);
                      }}
 
                      placeholder="Search high resolution Images, categories, wallpapers0"
                    />
                    <Button
                      className=" btn-primary"
                      onClick={() => {
                        getData(true);
                        setResult(true);
                      }}
                    >
                      Search
                    </Button>
                  </div>
                 
                </div>
                {/*------------------------ HOME HERO SECTION START -------------------------*/}
              </div>
            </div>
          )}
          {result && (
            <section className="search-result-her-section">
              <div className="container">
                <div className="container-section">
                  <h2 className=" d-flex align-items-center">
                    {" "}
                    <Image
                      src={backArrow}
                      onClick={() => {
                        setResult(false);
                      }}
                      alt="image"
                      className="back-arrow"
                    />{" "}
                    &nbsp;{" "}
                    {(serch && serch[0].toUpperCase() + serch.slice(1)) ||
                      "Images Unsplash"}
                  </h2>
                </div>
                <div className="animal-result-box-main">
                  {data &&
                    data.map((item, i) => {
                      return (
                    
                          <div className="animal-result-box" onClick={()=>serchOnTagsHandler(item.tags && item.tags[1].title)}>
                            <span>
                              {(item.tags &&  item.tags[1].title[0].toUpperCase() + item.tags[1].title.slice(1)) || "tages"}
                            </span>
                          </div>
                       
                      );
                    })}
                </div>
              </div>
            </section>
          )}
          <section className="main-gallry-section-wrapper">
            <div className="container">
              <div className="gallry-section-wrapper">
                {data &&
                  data?.map((item, i) => {
                    return (
                      <div key={i} className="box">
                        <CardSection data={item} handleShow={handleShow} />
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
