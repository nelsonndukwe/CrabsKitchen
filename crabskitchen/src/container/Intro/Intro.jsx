import React, { useState } from "react";
import { meal } from "../../constants";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import "./Intro.css";
import { useRef } from "react";

const Intro = () => {
  const [playvideo, setPlayVideo] = useState(false);
  const vidref = useRef();

  const handleVideo = () => {
    setPlayVideo((prevvideo) => !prevvideo);

    if (playvideo) {
      vidref.current.pause();
    } else {
      vidref.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        ref={vidref}
      />

      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay-circle flex__center"
          onClick={handleVideo}
        >
          {playvideo ? <BsFillPauseFill color="#ffff" fontSize={30} /> : <BsFillPlayFill color="#ffff" fontSize={30} />}
        </div>
      </div>
    </div>
  );
};

export default Intro;
