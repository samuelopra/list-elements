import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    this.imgRef = React.createRef();
  }

  componentDidMount() {
    this.imgRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imgRef.current.clientHeight;

    this.setState({ spans: Math.ceil(height / 10) });
  };
  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imgRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
