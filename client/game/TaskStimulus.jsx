import React from "react";

export default class TaskStimulus extends React.Component {
  
  render() {
    const { round, stage, player } = this.props;

    return (
      <div className="task-stimulus">
         Here is today's statement to vote on.
        <br />
        “The temperature is not rising nearly as fast as the alarmist computer models predicted. ”
      </div>
    );
  }
}
