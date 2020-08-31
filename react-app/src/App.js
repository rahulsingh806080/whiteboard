import React from "react";
import axios from "axios";
import "./styles.css";
import Iframe from "react-iframe";
import io from "socket.io-client";

export default class App extends React.Component {
  componentDidMount() {
    const domain = "meet.jit.si";
    const options = {
      roomName: "JitsiMeetAPIExample1",
      width: 700,
      height: 700,
      parentNode: document.querySelector("#meet"),
    };
    window.JitsiMeetExternalAPI =
      window.JitsiMeetExternalAPI || window.exports.JitsiMeetExternalAPI;
    const api = new window.JitsiMeetExternalAPI(domain, options);
    // const socket = io("http://localhost:5000");
  }
  render() {
    return (
      <>
        <div id="meet"></div>

        <Iframe
          url="https://wbo.ophir.dev/boards/lyt89huCrJUnu5uMQvGCsh8LRPxixshjYpsbz6F6-IY-"
          width="450px"
          height="450px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        />
      </>
    );
  }
}
