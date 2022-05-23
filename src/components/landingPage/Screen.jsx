import desktopVideo from "../../assets/Desktop.mp4"
import mobileVideo from "../../assets/Mobile.mp4"
import "./landingPage.css"

const getVideoSrc = width => {
  if (width >= 1080) return desktopVideo;
  if (width >= 600) return mobileVideo;
  return mobileVideo;
};
//activate autoplay
const Video = props => {
  const src = getVideoSrc(window.innerWidth);
  return (
    <div className="video__container">
      <video className="video__background"  playsInline muted src={src} autoPlay loop /> 
    </div>// video loop autoPlay
  );
  };
  function Screen() {
    return (
          <Video />
    );
  }

export default Screen;