import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  handleOnClickIncrease = (event) => {
    this.props.increase();
  };

  handleOnClickDecrease = () => {
	  this.props.decrease();
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleOnClickIncrease}>Click +</button>
		<button onClick={this.handleOnClickDecrease}>Click -</button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
	increase: () => dispatch({ type: "INCREASE_C" }),
	decrease: () => dispatch({ type: "DECREASE_C" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
