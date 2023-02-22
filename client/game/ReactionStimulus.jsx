import React from "react";

export default class ReactionStimulus extends React.Component {
  
  render() {
    const { round, stage, player } = this.props;

    return (
      <div className="reaction-stimulus">
        Here are their answers. Can you rate each one of them?
        <br />
       The statement is “The temperature is not rising nearly as fast as the alarmist computer models predicted.”
      </div>
    );
  }
}
