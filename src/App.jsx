import './App.css'
import Player from './components/Player.jsx'
import Sidebar from './components/Sidebar.jsx'
import Display from './components/Display.jsx'
import React, {useContext, useState} from "react";
import {PlayerContext} from "./context/PlayerContext.jsx";
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';

const App = () => {

    const {audioRef,track,switchNextSong,play,mute} = useContext(PlayerContext)


    return(
        <div className='h-screen bg-black'>
            <div className='h-[90%] flex'>
                <Sidebar />
                <Display />
            </div>
            <Player />
            <audio ref={audioRef} src={track.file} onEnded={switchNextSong} onLoadStartCapture={play} muted={mute} preload='auto'></audio>
        </div>
    )
}

export default App
