import React from "react";
import "./SearchResults.css";
import Tracklist from "../TrackList/Tracklist";
// import Track from "../Track/Track";

class SearchResults extends React.Component {
  render() {
    return (
      <div className="Results">
        <h2>Search Results</h2>
        <Tracklist
          tracks={this.props.searchResults}
          onAdd={this.props.onAdd}
          isRemoval={false}
        />
      </div>
    );
  }
}

export default SearchResults;
