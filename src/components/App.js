import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  onSearchFormSubmit = async (searchTerm) => {
    console.log(searchTerm);

    const images = await unsplash.get("/search/photos", {
      params: {
        query: searchTerm,
      },
    });

    this.setState({ images: images.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchFormSubmit} />
        Found {this.state.images.length} images.
      </div>
    );
  }
}

export default App;
