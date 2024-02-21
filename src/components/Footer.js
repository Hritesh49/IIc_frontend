import React from "react";
import { Stack, Typography } from "@mui/material";
import imsta from "../assets/Animation - 1708551503875.json"
import you from "../assets/Animation - 1708551992046.json"
import git from "../assets/Animation - 1708552066124.json"
import face from "../assets/Animation - 1708551869893.json"
import lin from "../assets/Animation - 1708552149066.json"
import Lottie from "lottie-react";
import "./footer.css";
function Footer() {
  return (
    <div className="main">
      <div className="page1">
      
      <h4>Our Social Networks</h4>
      <p>Follow our social media handles to stay updated !</p>
      <div class="social">
       <a href="https://www.instagram.com/idea_labs/"><Lottie className='slottie' animationData={imsta}  /></a>
       <a href="https://www.facebook.com/ideaclubvssut"><Lottie className='slottie' animationData={face}  /> </a>
       <a href="https://www.youtube.com/channel/UCl1eNHmMb4IjWveBRbKU7Iw"><Lottie className='slottie' animationData={you}  /> </a>
       <a href="https://github.com/Idea-Innovation-Cell-VSSUT-Burla"> <Lottie className='gitlottie' animationData={git} /> </a>
       <a href="https://www.linkedin.com/company/idea-and-innovation-cell/"><Lottie className='slottie' animationData={lin} /> </a>
      
    </div>

      </div>
      <div className="page2">
        © Copyright Idea Innovation Cell. All Rights Reserved
      </div>
    </div>
   
  );
}

export default Footer;
