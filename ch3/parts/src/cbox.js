import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default class CBoxForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { check: true };
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.doSubmit(e)}>
          <label>
            <input
              type="checkbox"
              onChange={e => this.doChange(e)}
              checked={this.state.check}
            />
            食べる
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
  doChange(e) {
    this.setState({ check: !this.state.check });
  }
  doSubmit(e) {
    e.preventDefault();
    window.alert(this.state.check ? "食べる" : "食べない");
  }
}
