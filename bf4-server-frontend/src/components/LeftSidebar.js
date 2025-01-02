import React from "react";
import '../App.css';
import battlefieldV from '../server-info/battlefieldV.png';
import battlefield1 from '../server-info/battlefield1.png';
import sideMenuGame1 from '../server-info/side-menu__game-1.png';
import battlefieldHardline from '../server-info/battlefieldhardline.png';
import career from '../server-info/career.png';
import watch from '../server-info/watch.png'
import news from '../server-info/news.png'
import help from '../server-info/help.png'
import quit from '../server-info/quit.png'

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <div class="blank"></div>
      <div class="box1">
        <div class="option1">
          <a href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-bfv" class="container1">
            <img src={battlefieldV} alt="img" />
          </a>
          <a href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-bfv" class="container1">
            <img src={battlefield1} alt="img" />
          </a>
          <a href="" class="container1">
            <div></div>
            <img src={sideMenuGame1} alt="img" />
          </a>
          <a href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-bfv" class="container1">
            <img src={battlefieldHardline} alt="img" />
          </a>
          <a href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-bfv" class="container1">
            <img src={career} alt="img" />
          </a>
        </div>
        <div class="option2">
          <a href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-watch"><img src={watch} alt="img"/></a>
          <a href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-watch"><img src={news} alt="img"/></a>
        </div>
      </div>
      <div class="box2">
        <a href=""><img src={help} alt="img" /></a>
        <a href=""><img src={quit} alt="img" /></a>
      </div>
    </div>
  );
};

export default LeftSidebar;
