import React from "react";
import '../App.css';
import squad from '../server-info/squad.png';
import join from '../server-info/join.png';
import online from '../server-info/online.png';
import friend1 from '../server-info/friend1.png';
import offline from '../server-info/offline.png';
import friend2 from '../server-info/friend2.png';

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div class="space">
        <div class="sidecard">
          <div class="top">
            <img src={squad} alt="img" class="logo" id="logo1" />
            <p class="text1">SQUAD</p>
          </div>
          <div class="bottom">
            <img src={join} alt="img" class="photo" />
            <p class="text2">Squad Join</p>
          </div>
        </div>

        <div class="sidecard">
          <div class="top">
            <img src={online} alt="img" class="logo" />
            <p class="text1">ONLINE</p>
          </div>
          <div class="bottom">
            <img src={friend1} alt="img" class="photo" />
            <p class="text2">Mary Jane<br/>Online</p>
          </div>
        </div>

        <div class="sidecard">
          <div class="top">
            <img src={offline} alt="img" class="logo" />
            <p class="text1">OFFLINE</p>
          </div>
          <div class="bottom">
            <img src={friend2} alt="img" class="photo" />
            <p class="text2">420<br/>Offline</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
