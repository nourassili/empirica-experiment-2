import React from "react";

import PlayerProfile from "./PlayerProfile.jsx";
import Reaction from "./Reaction.jsx";
import SocialExposure from "./SocialExposure.jsx";
import Task from "./Task.jsx";

import { useState } from 'react'


export default class Round extends React.Component {
  render() {
    const { round, stage, player, game } = this.props;

    return (
      <div className="round">
        <div className="content">

          {/*  is this defining what the next stage UI? */}

         {
            stage.name === "response" && (
              <div>
                <PlayerProfile player={player} stage={stage} game={game} />
                <Task {...this.props} />


              </div>
            )
          } 


          {
            stage.name === "revision" && (
              <div className="revision">
                <SocialExposure stage={stage} player={player} game={game} />
                <div> Please redo your submission below </div> 
                <Task game={game} round={round} stage={stage} player={player} />
              </div> 
            )
          } 



          {
            stage.name === "reaction" && (
              <div>
              <SocialExposure {...this.props} />
              <Reaction {...this.props} />
              </div>
    
            )
          } 


          

          
        
        </div>

      </div>
    );
  }
}
