import React, { useState, useRef } from "react";
import desktopVideo from "../../assets/Desktop.m4v";
import {AiOutlinePlayCircle} from "react-icons/ai";
import mobileVideo from "../../assets/Mobile1.m4v";
import thumb from "../../assets/thumbnail.png";
import "./landingPage.css";

const getVideoSrc = (width) => {
  if (width >= 1080) return desktopVideo;
  if (width >= 600) return mobileVideo;
  return mobileVideo;
};
//activate autoplay
const Video = (props) => {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const src = getVideoSrc(window.innerWidth);
  const videoRef = useRef();

  const onLoadedData = () => {
    setIsVideoLoaded(true);
    setTimeout(() => {
      if (
        videoRef.current.currentTime === 0 ||
        videoRef.current.paused ||
        videoRef.current.ended ||
        videoRef.current.readyState <= 2
      )
        setIsVideoPlaying(false);
    }, 500);
  };

  return (
    <div className="video__container">
      <img
        src={thumb}
        alt="thumb"
        className="video-thumb tiny"
        style={{ opacity: isVideoLoaded ? 0 : 1 }}
      />
      <video
        className="video__background"
        playsInline
        muted
        src={src}
        autoPlay
        loop
        onLoadedData={onLoadedData}
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
        ref={videoRef}
      />
      {!isVideoPlaying && (
        <AiOutlinePlayCircle
          size={50}
          className="play__button"
          onClick={() => {
            videoRef.current.play();
            setIsVideoPlaying(true);
          }}
        />
      )}
    </div> // video loop autoPlay
  );
};
function Screen() {
  return <Video />;
}

export default Screen;
