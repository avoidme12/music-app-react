// иконки
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
import spotify_logo from './logo.png'
import clock_icon from './clock_icon.png'
import myIcon from './my_icon.jpg'
import downloadIcon from './скачать.png'
// img
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img10 from './img10.jpg'
import img12 from './img12.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import img17 from './img17.jpg'
import img18 from './img18.jpg'
import img19 from './img19.jpg'
import img20 from './img20.jpg'
import img22 from './img22.jpg'
import img23 from './img23.jpg'
import img24 from './img24.jpg'
import img25 from './img25.jpg'
import img26 from './img26.jpg'
import img27 from './img27.jpg'
import img28 from './img28.jpg'
import phonkImg from './phonk.jpg'
import zxcCat from './zxc cot.gif'
// треки
import snowfall from './snowfall.mp3'
import farFromHome from './farFromHome.mp3'
import theWorstDays from './the worst days.mp3'
import coldNights from './cold nights.mp3'
import rainOnMyWindow from './rain-on-my-window.mp3'
import indexFromUs from './index-of-us-slowed-reverb.mp3'
import blutOwnSolace from './blut-own-solace.mp3'
import inMyHead from './in my head.mp3'
import funk from './funk-eschardo.mp3'
import cataclysm from './cataclysm.mp3'
import fresh from './fresh.mp3'
import liveAnotherDay from './live_another_day.mp3'
import montagem from './montagem.mp3'
import papai from './pa_pa_papai.mp3'
import ultraphunk from './ultraphunk.mp3'
import wakeUp from './wakeup.mp3'
import classicalVip from './classical vip.mp3'
import superNova from './supernova.mp3'
import cry from './cry.mp3'
import iCantStop from './i cant stop.mp3'
import firepower from './firepower.mp3'
import thermodynamics from './thermodynamics.mp3'
import aftershock from './aftershock.mp3'
import buzzkill from './buzz kill.mp3'


// объект с иконками
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
    clock_icon,
    myIcon,
    zxcCat,
    downloadIcon,
}

// объект с инфо о плейлистах
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
        image: img20,
        desc:"Подойдут для агрессивных игр и турниров",
        bgColor:"#9023af"
    },
    {
        id:2,
        name: "Топ песен в жанре Хэви-Метал",
        image: img10,
        desc:"Тяжёлая музыка для любителей Металла",
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

// массив с сонгами для плейлиста с спокойной музыкой
export const relaxedSongs = [
    {
        id:0,
        name: "Snowfall - Øneheard",
        image: img1,
        file:snowfall,
        desc:"Мой фаворит)",
        duration:"2:04"
    },
    {
        id:1,
        name: "Far From Home - deneb",
        image: img2,
        file:farFromHome,
        desc:"Sloved + reverb",
        duration:"2:46"
    },
    {
        id:2,
        name: "The worst days - remind me",
        image: img3,
        file:theWorstDays,
        desc:"Тоже неплохой сонг",
        duration:"2:08"
    },
    {
        id:3,
        name: "cold nights",
        image: img4,
        file:coldNights,
        desc:"(slowed + reverb)",
        duration:"2:11"
    },
    {
        id:4,
        name: "rain on my window - undercurrent.",
        image: img5,
        file:rainOnMyWindow,
        desc:"Довольно популярная",
        duration:"1:44"
    },
    {
        id:5,
        name: "index for us (slowed + reverb)",
        image: img6,
        file:indexFromUs,
        desc:"By anębu and Late Night Tones",
        duration:"1:36"
    },
    {
        id:6,
        name: "entris, Blut Own - solace",
        image: img7,
        file:blutOwnSolace,
        desc:"(slowed + reverb)",
        duration:"2:13"
    },
    {
        id:7,
        name: "diedlonely, c152 - in my head",
        image: img12,
        file:inMyHead,
        desc:"напоминает snowfall...",
        duration:"1:42"
    }
]

// массив с сонгами для плейлиста с фонком
export const phonkSongs = [
    {
        id:8, // += 1
        name: "ALXIKE - FUNK ESTRANHO",
        image: img14,
        file:funk,
        desc:"speed up",
        duration:"2:14"
    },
    {
        id:9, // += 1
        name: "Montagem Diamante Rosa - Vtze",
        image: phonkImg,
        file:montagem,
        desc:"в тт зафорсили",
        duration:"1:39"
    },
    {
        id:10, // += 1
        name: "Wake Up - Moondeity",
        image: "https://static.hitmcdn.com/covers/a/034/442/734393.jpg",
        file:wakeUp,
        desc:"бразильский фонк",
        duration:"2:22"
    },
    {
        id:11, // += 1
        name: "Live Another Day - Kordhell",
        image: "https://i.pinimg.com/474x/19/04/73/190473a92da9b642620d0e6784ffe217.jpg",
        file:liveAnotherDay,
        desc:"очень популярынй и мощный",
        duration:"2:12"
    },
    {
        id:12, // += 1
        name: "Cataclysm - Yvetzal",
        image: "https://i.pinimg.com/236x/32/e1/7a/32e17a706a4abf8ba5804446923cbcf7.jpg",
        file:cataclysm,
        desc:"очень быстрый, прям слишком",
        duration:"2:59"
    },
    {
        id:13, // += 1
        name: "Fresh - Nxvamane",
        image: img17,
        file:fresh,
        desc:"speed up",
        duration:"1:08"
    },
    {
        id:14, // += 1
        name: "Automotivo Pa Pa Papai - Dj Rio",
        image: img18,
        file:papai,
        desc:"па па и",
        duration:"0:56"
    },
    {
        id:15, // += 1
        name: "Ultraphunk - Dashie",
        image: img19,
        file:ultraphunk,
        desc:"для любителей доты",
        duration:"1:55"
    },
]

// массив с сонгами для плейлиста с хэви метал
export const metalSongs = [
    {
        id:0, // += 1
        name: "пока не сделал",
        image: img15,
        file:snowfall,
        desc:"описание метал",
        duration:"3:00"
    },
]

// массив с сонгами для плейлиста с дабстепом
export const dubstepSongs = [
    {
        id:16, // += 1
        name: "Xtrullor - Supernova",
        image: img20,
        file:superNova,
        desc:"топ 1 сонг на newgrounds",
        duration:"2:47"
    },
    {
        id:17, // += 1
        name: "Nightkilla (NK) - Classical VIP",
        image: img22,
        file:classicalVip,
        desc:"Firework из гд",
        duration:"3:14"
    },
    {
        id:18, // += 1
        name: "PIXL - Buzzkill",
        image: img25,
        file:buzzkill,
        desc:"как по мне имба",
        duration:"5:55"
    },
    {
        id:19, // += 1
        name: "dj-Nate - Thermodynamix",
        image: img24,
        file:thermodynamics,
        desc:"Acheron из гд",
        duration:"2:42"
    },
    {
        id:20, // += 1
        name: "Xtrullor - Cry",
        image: img23,
        file:cry,
        desc:"Мой второй фаворит",
        duration:"2:12"
    },
    {
        id:21, // += 1
        name: "Flux Pavilion - I Can't Stop",
        image: img26,
        file:iCantStop,
        desc:"имба как по мне",
        duration:"5:05"
    },
    {
        id:22, // += 1
        name: "Schoolboy - Aftershock (Original Mix)",
        image: img27,
        file:aftershock,
        desc:"тоже неплохой",
        duration:"5:46"
    },
    {
        id:23, // += 1
        name: "Teminite - Firepower",
        image: img28,
        file:firepower,
        desc:"басы топ",
        duration:"4:39"
    },
]

// объект с инфо о сонгах на главной странице
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
        name: "The worst days - remind me",
        image: img3,
        file:theWorstDays,
        desc:"Тоже неплохой сонг",
        duration:"2:32"
    },
    {
        id:3,
        name: "cold nights",
        image: img4,
        file:coldNights,
        desc:"(slowed + reverb)",
        duration:"2:50"
    },
    {
        id:4,
        name: "rain on my window - undercurrent.",
        image: img5,
        file:rainOnMyWindow,
        desc:"Довольно популярная",
        duration:"3:10"
    },
    {
        id:5,
        name: "index for us (slowed + reverb)",
        image: img6,
        file:indexFromUs,
        desc:"By anębu and Late Night Tones",
        duration:"2:45"
    },
    {
        id:6,
        name: "entris, Blut Own - solace",
        image: img7,
        file:blutOwnSolace,
        desc:"(slowed + reverb)",
        duration:"2:18"
    },
    {
        id:7,
        name: "diedlonely, c152 - in my head",
        image: img12,
        file:inMyHead,
        desc:"напоминает snowfall...",
        duration:"2:35"
    }
]

// объект с инфо о всех сонгах
export const allSongsData = [
    {
        id:0, // += 1
        name: "Snowfall - Øneheard",
        image: img1,
        file:snowfall,
        desc:"Мой фаворит)",
        duration:"3:00"
    },
    {
        id:1, // += 1
        name: "Far From Home - deneb",
        image: img2,
        file:farFromHome,
        desc:"Sloved + reverb",
        duration:"2:20"
    },
    {
        id:2, // += 1
        name: "The worst days - remind me",
        image: img3,
        file:theWorstDays,
        desc:"Тоже неплохой сонг",
        duration:"2:32"
    },
    {
        id:3, // += 1
        name: "cold nights",
        image: img4,
        file:coldNights,
        desc:"(slowed + reverb)",
        duration:"2:50"
    },
    {
        id:4, // += 1
        name: "rain on my window - undercurrent.",
        image: img5,
        file:rainOnMyWindow,
        desc:"Довольно популярная",
        duration:"3:10"
    },
    {
        id:5, // += 1
        name: "index for us (slowed + reverb)",
        image: img6,
        file:indexFromUs,
        desc:"By anębu and Late Night Tones",
        duration:"2:45"
    },
    {
        id:6, // += 1
        name: "entris, Blut Own - solace",
        image: img7,
        file:blutOwnSolace,
        desc:"(slowed + reverb)",
        duration:"2:18"
    },
    {
        id:7, // += 1
        name: "diedlonely, c152 - in my head",
        image: img12,
        file:inMyHead,
        desc:"напоминает snowfall...",
        duration:"2:35"
    },
    {
        id:8, // += 1
        name: "ALXIKE - FUNK ESTRANHO",
        image: img14,
        file:funk,
        desc:"speed up",
        duration:"2:14"
    },
    {
        id:9, // += 1
        name: "Montagem Diamante Rosa - Vtze",
        image: phonkImg,
        file:montagem,
        desc:"в тт зафорсили",
        duration:"1:39"
    },
    {
        id:10, // += 1
        name: "Wake Up - Moondeity",
        image: "https://static.hitmcdn.com/covers/a/034/442/734393.jpg",
        file:wakeUp,
        desc:"бразильский фонк",
        duration:"2:22"
    },
    {
        id:11, // += 1
        name: "Live Another Day - Kordhell",
        image: "https://i.pinimg.com/474x/19/04/73/190473a92da9b642620d0e6784ffe217.jpg",
        file:liveAnotherDay,
        desc:"очень популярынй и мощный",
        duration:"2:12"
    },
    {
        id:12, // += 1
        name: "Cataclysm - Yvetzal",
        image: "https://i.pinimg.com/236x/32/e1/7a/32e17a706a4abf8ba5804446923cbcf7.jpg",
        file:cataclysm,
        desc:"очень быстрый, прям слишком",
        duration:"2:59"
    },
    {
        id:13, // += 1
        name: "Fresh - Nxvamane",
        image: img17,
        file:fresh,
        desc:"speed up",
        duration:"1:08"
    },
    {
        id:14, // += 1
        name: "Automotivo Pa Pa Papai - Dj Rio",
        image: img18,
        file:papai,
        desc:"па па и",
        duration:"0:56"
    },
    {
        id:15, // += 1
        name: "Ultraphunk - Dashie",
        image: img19,
        file:ultraphunk,
        desc:"для любителей доты",
        duration:"1:55"
    },
    {
        id:16, // += 1
        name: "Xtrullor - Supernova",
        image: img20,
        file:superNova,
        desc:"топ 1 сонг на newgrounds",
        duration:"2:47"
    },
    {
        id:17, // += 1
        name: "Nightkilla (NK) - Classical VIP",
        image: img22,
        file:classicalVip,
        desc:"Firework из гд",
        duration:"3:14"
    },
    {
        id:18, // += 1
        name: "PIXL - Buzzkill",
        image: img25,
        file:buzzkill,
        desc:"как по мне имба",
        duration:"5:55"
    },
    {
        id:19, // += 1
        name: "dj-Nate - Thermodynamix",
        image: img24,
        file:thermodynamics,
        desc:"Acheron из гд",
        duration:"2:42"
    },
    {
        id:20, // += 1
        name: "Xtrullor - Cry",
        image: img23,
        file:cry,
        desc:"Мой второй фаворит",
        duration:"2:12"
    },
    {
        id:21, // += 1
        name: "Flux Pavilion - I Can't Stop",
        image: img26,
        file:iCantStop,
        desc:"имба как по мне",
        duration:"5:05"
    },
    {
        id:22, // += 1
        name: "Schoolboy - Aftershock (Original Mix)",
        image: img27,
        file:aftershock,
        desc:"тоже неплохой",
        duration:"5:46"
    },
    {
        id:23, // += 1
        name: "Teminite - Firepower",
        image: img28,
        file:firepower,
        desc:"басы топ",
        duration:"4:39"
    },
]