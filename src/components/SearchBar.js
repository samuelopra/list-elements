import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onSearchFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSearchSubmit(this.state.searchTerm);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSearchFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={(e) => this.setState({ searchTerm: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
