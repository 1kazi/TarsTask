import { useState } from "react";
import {CiSearch} from "react-icons/ci"
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
 
  return (
    <>
    <div className="container">
      <div className="main-header  px-4 d-flex align-items-center justify-content-between">
        <div className=" d-flex align-items-center justify-content-center gap-4">
          <span className="right-section-text">Image Gallery</span>
       
        </div>
        <div className=" d-flex align-items-center justify-content-center input-box">
        <CiSearch/>
           <input
             type="text"
             className="input-box"
           
             placeholder="Search Images here"
           />
         </div>
        <div className="d-flex align-items-center justify-content-center gap-3 w-auto left-section-text">
          <p className="m-0">Explore</p>
          <p className="m-0">Collection</p>
          <p className="m-0">Community</p>
          <p className="m-0">Dark mode</p>
        </div>
      <DarkModeToggle/>
      </div>
      </div>
    </>
  );
}
