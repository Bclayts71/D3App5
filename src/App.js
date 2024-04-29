import React, { Component } from "react";
import "./App.css"
import Child1 from "./Child1";
import Child2 from "./Child2";
import * as d3 from "d3";
import tips from "./tips.csv"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      dropDownValue:'total_bill'
    };
  }
  componentDidMount() {
    var self = this
    d3.csv(tips, function(d){
      return{
        tip:parseFloat(d.tip),
        total_bill:parseFloat(d.total_bill),
        day:d.day,
        sex:d.sex,
        smoker:d.smoker,
        time:d.time,
        size:parseInt(d.size)
      }
    }).then(function(csv_data){
      self.setState({data:csv_data})
      console.log(csv_data)
    })
    .catch(function(err){
      console.log(err)
    })
  }
  componentDidUpdate(){
  }


  render() {
    return <div className="parent">
      <div className="TopBar">
        <div className="TopSelect">
          Select Target:
          <select onChange={(event)=>this.setState({dropDownValue:event.target.value})}>
            <option> total_bill </option>
            <option> tip </option>
            <option> size </option>
          </select>
        </div>
      </div>
      <div className="child1">
        <Child1 data1={this.state}></Child1>
      </div>

      <div className="child2">
        <Child2 data2={this.state.data}></Child2>
      </div>
    </div>;
  }
}
export default App