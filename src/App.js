import React, { Component } from "react";
import "./App.css"
import BarChart from "./components/BarChart";
import * as d3 from "d3";
import tips from "./tips.csv"
import CorrMatrix from "./components/CorrMatrix";

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
        total_bill: parseFloat(d.total_bill),
        tip:parseFloat(d.tip),
        size: parseInt(d.size),
        day:d.day,
        sex:d.sex,
        smoker:d.smoker,
        time:d.time,
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
      <div className="container">
        <div className="bar-chart">
          <BarChart data1={this.state}/>
        </div>
        <div className="corr-matrix-container">
          <h3>Correlation Matrix</h3>
          <CorrMatrix data={this.state.data} />
        </div>
      </div>
    </div>;
  }
}
export default App