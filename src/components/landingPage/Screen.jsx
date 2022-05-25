import React from "react"
import desktopVideo from "../../assets/Desktop.mp4"
import mobileVideo from "../../assets/Mobile1.m4v"
import thumb from "../../assets/thumbnail.png"
import "./landingPage.css"

const getVideoSrc = width => {
  if (width >= 1080) return desktopVideo;
  if (width >= 600) return mobileVideo;
  return mobileVideo;
};
//activate autoplay
const Video = props => {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  const src = getVideoSrc(window.innerWidth);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="video__container">
      <img src={thumb} alt="thumb" className="video-thumb tiny" style={{ opacity: isVideoLoaded ? 0 : 1 }} />
      <video className="video__background"  playsInline muted src={src} autoPlay loop onLoadedData={onLoadedData}
        style={{ opacity: isVideoLoaded ? 1 : 0 }} /> 
    </div>// video loop autoPlay
  );
  };
  function Screen() {
    return (
          <Video />
    );
  }

export default Screen;