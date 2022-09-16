import React from "react";

class Icon extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
  }

  toggleClass() {
    if (this.state.isActive) {
      this.setState({ isActive: false });
    } else {
      this.setState({ isActive: true });
    }
  }

  render() {
    let chosenColor = this.props.color;
    let chosenName = this.props.name;
    let chosenIcon = this.props.icon;
    return (
      <ion-icon
        id="like"
        name={this.state.isActive ? chosenIcon : chosenName}
        onClick={() => {
          this.toggleClass();
        }}
        style={this.state.isActive ? {color: chosenColor} : {color: "black"}}
      ></ion-icon>
    );
  }
}
export default Icon;