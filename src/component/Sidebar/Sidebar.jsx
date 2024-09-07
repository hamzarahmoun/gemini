import React, { useState,useContext } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets';
import { Context } from '../../context/Context';
import { useEffect } from 'react';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent,prevPrompt,setRecentPrompt} = useContext(Context);
 
  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={() => setExtended(!extended)} src={assets.menu_icon} alt="" />
            <div className='new-chat'>
              <img src={assets.plus_icon} alt="" />
              {extended ? <p> New Chat</p> : null}
            </div>
            {extended ? 
            <div className="recent">
              <p className="recent-title">Recent</p>
              {prevPrompt.map((item, index) => {
                return (
                  <div className="recent-entry" key={index}>
                  <img src={assets.message_icon} alt="" />
                  <p>{item} ...</p>
                </div>
                )
              })}
            </div>
            : null}
        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry" >
            <img src={assets.question_icon} alt=''/>
            {extended ? <p >Help</p> : null}
          </div>
          <div className="bottom-item recent-entry" >
            <img src={assets.history_icon} alt=''/>
            {extended ? <p >Activity</p> : null}
          </div>
          <div className="bottom-item recent-entry" >
            <img src={assets.setting_icon} alt=''/>
            {extended ? <p >Setting</p> : null}
          </div>


        </div>
    </div>
  )
}

export default Sidebar