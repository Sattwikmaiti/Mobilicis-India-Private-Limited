import  { useState} from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Profile from './Profile';
import Follow from './Follow';

import Chat from "./Chat"
function Home() {
 
  const [activeTab, setActiveTab] = useState(0);


  


  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="home-container">
      <div className="home-info">
        <div className="div">
          <center><h1>INTERNSHALA</h1></center>
        </div>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Profile" />
          <Tab label="Follow" />
          <Tab label="Chat" />
        </Tabs>
        {activeTab === 0 ? (
          <Profile/>
        ) : activeTab === 1 ? (
          <Follow />
        ) : (
          <Chat/>
        )}
       
      </div>
    </div>
  );
}

export default Home;
