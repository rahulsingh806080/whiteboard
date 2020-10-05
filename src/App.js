import React from "react";
import axios from "axios";
import "./styles.css";
import Iframe from "react-iframe";
import io from "socket.io-client";
import Pdf from "react-to-pdf";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }
  componentDidMount() {
    const domain = "meet.jit.si";
    const options = {
      roomName: "JitsiMeetAPIExample1",
      width: 500,
      height: 600,
      parentNode: document.querySelector("#meet"),
    };
    window.JitsiMeetExternalAPI =
      window.JitsiMeetExternalAPI || window.exports.JitsiMeetExternalAPI;
    const api = new window.JitsiMeetExternalAPI(domain, options);
    // const socket = io("http://localhost:5000");
    let iframe = api.getIFrame();
    console.log("iframe", iframe);
    let element = iframe.contentWindow.document.querySelector(".watermark");
    console.log("element", element);
  }
  componentDidUpdate() {
    console.log("hi");
  }

  addPage = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  previousPage = () => {
    this.setState({
      count: this.state.count === 1 ? 1 : this.state.count - 1,
    });
  };

  render() {
    let abc = "test123" + this.state.count;
    const ref = React.createRef();
    let pageno = this.state.count;
    return (
      <>
        {/* <h1>Welcome to the Board</h1>
        <div className="main">
          <nav className="navigation">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li className="user">
                <a href="#">
                  <i className="fas fa-user"></i>
                </a>
              </li>
              <li className="user">
                <a href="#">
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </li>
              <li className="user">
                <a href="#">
                  <i className="fas fa-sign-out-alt"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div> */}
        <div className="some-page-wrapper">
          <div className="row">
            <div className="column">
              <div className="blue-column" id="meet"></div>
            </div>
            <div className="column">
              <div className="green-column" ref={ref}>
                <Iframe
                  url={`https://cloud13.de/testwhiteboard/?whiteboardid=${abc}`}
                  width="900px"
                  height="600px"
                  id="myId1"
                  className="myClassname"
                  display="initial"
                  position="relative"
                />
              </div>
              <div className="row">
                <div className="pagecontainer">
                  <button className="add" onClick={this.addPage}>
                    Next Page
                  </button>
                </div>
                <div className="pagecontainer">
                  <button className="pre" onClick={this.previousPage}>
                    Previous Page
                  </button>
                </div>
                <div className="pagecontainer">{pageno}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
