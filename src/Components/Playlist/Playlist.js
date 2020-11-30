import React from "react";
import Tracklist from "../TrackList/Tracklist";
import "./Playlist.css";

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input
          placeholder={"New Playlist"}
          onChange={this.handleNameChange}
          className="playlist-name"
        />
        <Tracklist
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
        <button className="save-playlist" onClick={this.props.onSave}>
          Save to Spotify
        </button>
      </div>
    );
  }
}

export default Playlist;
