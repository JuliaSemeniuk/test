import Option from "components/option/option";
import ReactPlayer from "react-player";
import ReactAudioPlayer from "react-audio-player";
import Button from "components/shared/button/button";

const Question = () => {
  return (
    <div className="question-container">
      <div className="question-header">
        <div className="question-title"></div>
        <div className="question-subtitle"></div>
      </div>
      <div className="question-player">
        <ReactAudioPlayer
          src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ce/d6/58/ced65843-c1d9-5592-08dd-acb86fdb93ac/mzaf_17338138310136790226.plus.aac.ep.m4a"
          autoPlay={false}
          controls
        />
      </div>
      <form className="question-form">
        <Option />
        <Option />
        <Option />
        <Option />
      </form>
      <div className="answer-container">
        <div className="answer-title">{/* data from redux */}</div>
        <div className="answer-video">
          <ReactPlayer url="https://www.youtube.com/watch?v=KwIC6B_dvW4&ab_channel=JohnColtrane" />
        </div>
        <div className="answer-description"></div>
      </div>
      <div className="footer">
        <Button />
      </div>
    </div>
  );
};

export default Question;
