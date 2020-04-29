import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogues from './components/Dialogues/Dialogues';
import News from './components/News/News';
import Music from './components/Music/Music';
import Pics from './components/Pics/Pics';
import Video from  './components/Video/Video';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
    <div className='main app-wrapper'>
      <Header />
      <Navbar />
        
        <Route path="/dialogues" component={Dialogues} />
        <Route path="/profile" component={Profile} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path='/photo' component={Pics} />
        <Route path='/video' component={Video} />
        <Route path='/settings' component={Settings} />
        
    </div>
    </BrowserRouter>
  );
}

export default App;
