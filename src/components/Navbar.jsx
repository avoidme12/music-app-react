import React, {useState} from 'react';
import {assets} from '../assets/assets.js'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [kotik, setKotik] = useState(false)
    const navigate = useNavigate()
    return (
        <>
            <div className='w-full flex justify-between items-center font-semibold'>
                <div className='flex items-center gap-2'>
                    <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt=""/>
                    <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt=""/>
                </div>
                <div className='flex items-center gap-4'>
                    <p onClick={() => {window.open("https://www.donationalerts.com/r/avoidme12", "_blank")}}
                       className='bg-white text-black text-[15px] px-4 pt-1 rounded-2xl md:block cursor-pointer'>Поддержать меня</p>
                    <p onClick={() => {
                        window.open("https://github.com/avoidme12?tab=repositories")
                    }} className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Мой GitHub</p>
                    <button>
                        <img onClick={() => {
                        setKotik(!kotik)
                        console.log(kotik)
                    }} src={assets.myIcon} alt=""
                                 className='bg-purple-500 text-black w-7 h-7 top-10 rounded-full flex items-center justify-center cursor-pointer'/>
                        <img className='w-[110px] top-[53%] right-[93%] absolute cursor-default' src={kotik === true ? assets.zxcCat : ""} alt=""/>
                    </button>
                </div>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>Всё</p>
                <p className='bg-black px-4py-1 rounded-2xl cursor-pointer'>Музыка</p>
                <p className='bg-black px-4py-1 rounded-2xl cursor-pointer'>Подкасты</p>
            </div>
        </>
    );
};

export default Navbar;