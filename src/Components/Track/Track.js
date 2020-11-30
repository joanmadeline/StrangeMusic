import React from "react";
import "./Track.css";
import {
  CgPlayButton,
  CgPlayTrackPrev,
  CgPlayTrackNext,
  CgPlayPause,
} from "react-icons/cg";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.isPlaying = this.isPlaying.bind(this);
    // this.viewTrack = this.viewTrack.bind(this);
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className="button" onClick={this.removeTrack}>
          -
        </button>
      );
    } else {
      return (
        <button className="button" onClick={this.addTrack}>
          +
        </button>
      );
    }
  }

  isPlaying() {
    let isPlaying = false;
    if (isPlaying) {
      isPlaying = false;
      return (
        <CgPlayPause
          className="button"
          id="play-button"
          onClick={<CgPlayButton />}
        />
      );
    } else {
      isPlaying = true;
      return (
        <CgPlayButton
          className="button"
          id="play-button"
          onClick={<CgPlayPause />}
        />
      );
    }
    // if (this.props.isPlaying) {
    //   return (
    //     <CgPlayPause
    //       className="button"
    //       id="play-button"
    //       isPlaying={true}
    //       onClick={<CgPlayButton isPlaying={false} />}
    //     />
    //   );
    // } else {
    //   return (
    //     <CgPlayButton
    //       className="button"
    //       id="play-button"
    //       isPlaying={false}
    //       onClick={<CgPlayPause isPlaying={true} />}
    //     />
    //   );
    // }
  }

  viewTrack() {
    return (document.querySelector(".Track").innerHTML = "Hello");
  }

  render() {
    return (
      <div className="Track">
        <div onClick={this.viewTrack}>
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} - {this.props.track.album}
          </p>
        </div>
        <div className="player">
          <CgPlayTrackPrev className="button" />
          {/* <CgPlayButton className="button" id="play-button" isPlaying={false} /> */}
          {this.isPlaying()}
          <CgPlayTrackNext className="button" />
          {this.renderAction()}
        </div>
      </div>
    );
  }
}

export default Track;
