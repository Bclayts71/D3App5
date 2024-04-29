import React, { Component } from "react";
import * as d3 from "d3";
class Child2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const svg = d3.select('.chart');
  }

  render() {
    return (
      <svg className="chart" width="600" height="400">
      </svg>
    );
  }
}
export default Child2;