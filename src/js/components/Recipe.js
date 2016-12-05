import React from "react";

export default class Recipe extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div class="col-md-4">
        <h4>{title}</h4>
        <p>How the recipe is made</p>
        <a class="btn btn-default" href="#">More Info</a>
      </div>
    );
  }
}
