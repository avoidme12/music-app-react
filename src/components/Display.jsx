import React, {useEffect, useRef} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom'
import DisplayHome from './DisplayHome.jsx'
import DisplayAlbum from './DisplayAlbum.jsx'
import {albumsData} from "../assets/assets.js";
import PhonkDisplayAlbum from "./PhonkDisplayAlbum.jsx";
import MetalDisplayAlbum from "./MetalDisplayAlbum.jsx";
import DubstepDisplayAlbum from "./DubstepDisplayAlbum.jsx";

const Display = () => {

    const displayRef = useRef();
    const location = useLocation();
    const isAlbum = location.pathname.includes("album");
    const albumId = isAlbum ? location.pathname.slice(-1) : "";
    const bgColor = albumsData[Number(albumId)].bgColor;

    const changePlaylist = () => {
        if(isAlbum && location.pathname.includes("0")){
            return <Route path='/album/:id' element={<DisplayAlbum />} />
        }
        if(isAlbum && location.pathname.includes("1")){
            return <Route path='/album/:id' element={<PhonkDisplayAlbum />} />
        }
        if(isAlbum && location.pathname.includes("2")){
            return <Route path='/album/:id' element={<MetalDisplayAlbum />} />
        }
        if(isAlbum && location.pathname.includes("3")){
            return <Route path='/album/:id' element={<DubstepDisplayAlbum />} />
        }
    }

    useEffect(() => {
        if(isAlbum) {
            displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`
        }
        else {
            displayRef.current.style.background = `#121212`
        }

    })


    return (
        <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
            <Routes>
                <Route path='/' element={<DisplayHome/>} />
                {changePlaylist()}
            </Routes>
        </div>
    );
};

export default Display;