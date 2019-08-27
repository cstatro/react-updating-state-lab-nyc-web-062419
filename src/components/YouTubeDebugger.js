// Code YouTubeDebugger Component Here
import React, { Component } from "react";
class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p"
      }
    }
  };
  handleBitRate = () => {
    let newSetting = { ...this.state.settings };
    newSetting.bitrate = 12;
    this.setState({ settings: newSetting });
  };

  handleResolution = () => {
    let newSetting = { ...this.state.settings };
    newSetting.video.resolution = "720p";
    this.setState({ settings: newSetting });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleBitRate} className="bitrate"></button>
        <button onClick={this.handleResolution} className="resolution"></button>
      </React.Fragment>
    );
  }
}

export default YouTubeDebugger;
