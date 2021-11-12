import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchFormSubmit = async (searchTerm) => {
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
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
