import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
    }


    return (
        <div className={"flex justify-between items-center h-24 text-white max-w-[1240px] mx-auto px-4"}>
            <h1 className={"w-full text-3xl font-bold text-[#00df9a]"}>React</h1>
            <ul className={"hidden md:flex"}>
                <li className={"p-4"}>Hero</li>
                <li className={"p-4"}>Newsletter</li>
                <li className={"p-4"}>Cards</li>
                <li className={"p-4"}>Analytics</li>
                <li className={"p-4"}>Contact</li>
            </ul>
            <div onClick={handleNav} className={"block md:hidden"}>
                {nav ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/>}
            </div>
            <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 " +
                "bg-[#000300] easy-in-out duration-500"
                : "fixed left-[-100%]"}>
                <h1 className={"w-full text-3xl font-bold text-[#00df9a] m-4"}>React</h1>
                <ul className={"p-4 uppercase"}>
                    <li className={"p-4 border-b border-gray-600"}>Hero</li>
                    <li className={"p-4 border-b border-gray-600"}>Newsletter</li>
                    <li className={"p-4 border-b border-gray-600"}>Cards</li>
                    <li className={"p-4 border-b border-gray-600"}>Analytics</li>
                    <li className={"p-4 border-b border-gray-600"}>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

// className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}