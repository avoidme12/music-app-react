import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import snowfall from './snowfall.mp3'
import farFromHome from './farFromHome.mp3'

export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Топ спокойных песен",
        image: img8,
        desc:"Наиболее спокойные песни для расслабления",
        bgColor:"#092d4f"
    },
    {   
        id:1,
        name: "Топ песен в жанре Фонк",
        image: img9,
        desc:"Подойдут для агрессивных игр и турниров",
        bgColor:"#9500b6"
    },
    {   
        id:2,
        name: "Топ песен в жанре Хэви-Метал",
        image: img10,
        desc:"Тяжёлая музыка для любителей Металла", // TODO: ДОББИ ПАРАЗИТАРНАЯ ПСИНКА
        bgColor:"#505050"
    },
    {   
        id:3,
        name: "Топ песен в жанре Dubstep",
        image: img16,
        desc:"Мощная музыка с быстрым темпом",
        bgColor:"#44337a"
    },
]

export const songsData = [
    {
        id:0,
        name: "Snowfall - Øneheard",
        image: img1,
        file:snowfall,
        desc:"Мой фаворит)",
        duration:"3:00"
    },
    {
        id:1,
        name: "Far From Home - deneb",
        image: img2,
        file:farFromHome,
        desc:"Sloved + reverb",
        duration:"2:20"
    },
    {
        id:2,
        name: "Song Three",
        image: img3,
        file:snowfall,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:32"
    },
    {
        id:3,
        name: "Song Four",
        image: img4,
        file:snowfall,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:50"
    },
    {
        id:4,
        name: "Song Five",
        image: img5,
        file:snowfall,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:10"
    },
    {
        id:5,
        name: "Song Six",
        image: img14    ,
        file:snowfall,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:45"
    },
    {
        id:6,
        name: "Song Seven",
        image: img7,
        file:snowfall,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:18"
    },
    {
        id:7,
        name: "Song Eight",
        image: img12,
        file:snowfall,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:35"
    }
]