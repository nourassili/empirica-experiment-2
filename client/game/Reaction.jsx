import React from "react";

import ReactionResponse from "./ReactionResponse";
import ReactionStimulus from "./ReactionStimulus";

export default class Reaction extends React.Component {
  render() {
    return (
      <div className="task">
        <ReactionStimulus {...this.props} />
        <ReactionResponse {...this.props} />
      </div>
    );
  }
}
