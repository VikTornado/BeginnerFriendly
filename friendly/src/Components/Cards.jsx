import React from 'react';
import State from "../State";

const Cards = () => {
    return (
        <div id={"Cards"} className={"w-full py-[10rem] px-4 bg-white"}>
            <div className={"max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8"}>
                {State.map((items, index) => {
                    return (
                        <div
                            className={"w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 hover:bg-gray-50 duration-300"}>
                            <img src={items.images} className={"w-20 mx-auto mt-[-3rem] bg-white"} alt={items.index}/>
                            <h2 className={"text-2xl font-bold text-center py-8"}>{items.title}</h2>
                            <p className={"text-center text-4xl font-bold"}>{items.price}</p>
                            <div className={"text-center font-medium"}>
                                <p className={"py-2 border-b mx-8"}>{items.storage}</p>
                                <p className={"py-2 border-b mx-8"}>{items.user}</p>
                                <p className={"py-2 border-b mx-8"}>{items.send}</p>
                            </div>
                            <button
                                className={"bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"}>Start
                                Trial
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Cards;