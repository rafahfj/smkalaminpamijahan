import { Component } from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import Navigation from "./components/Navigation";
import Sidenav from "./components/Sidenav";
import Footer from "./components/Footer";

export default class Layout extends Component {
  state = {
    allData: {},
  };

  componentDidMount() {
    fetch("./db/allDB.json")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        this.setState({
          allData: res.layout,
          heading: res.home.header,
        });
      });
  }
  render() {
    return (
      <>
        <Navigation data={this.state.heading} nav={this.state.allData} />

        <Sidenav data={this.state.heading} nav={this.state.allData} />

        <Outlet />

        <Footer data={this.state.heading} nav={this.state.allData} />
      </>
    );
  }
}
