import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleEnterPress = this.handleEnterPress.bind(this);
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  handleEnterPress(event) {
    if (event.key === 'Enter') {
      this.search();
    }
  }
  
  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="search-bar">
        <input
          onChange={this.handleTermChange}
          onKeyPress={this.handleEnterPress}
          placeholder="Search for a Song, Album, or Artist"
        />
        <br />
        <button onClick={this.search}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
