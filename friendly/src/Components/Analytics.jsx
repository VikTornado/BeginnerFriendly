import React from 'react';
import Laptop from "../Assets/laptop.jpg"

const Analytics = () => {
    return (
        <div id={"Analytics"} className={"w-full bg-white py-16 px-4"}>
            <div className={"max-w-[1240px] mx-auto grid md:grid-cols-2"}>
                <img className={"w-[500px] mx-auto my-4"} src={Laptop} alt={"Laptop"}/>
                <div className={"flex flex-col justify-center"}>
                    <p className={"text-[#00df9a] font-bold"}>DATA Analytics dashboard</p>
                    <h1 className={"md:text-4xl sm:text-3xl text-2xl"}>Manage Data Analytics Centrally</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid atque dicta id ipsam
                        molestiae nostrum placeat tempora ut voluptatibus! Ab aut commodi cumque ea excepturi neque
                        perspiciatis placeat tenetur.
                    </p>
                    <button
                        className={" bg-[#000000] text-[#00df9a] font-medium my-6 mx-auto py-3 w-[200px] rounded-md md:mx-0 font-medium"}>Get
                        Stared
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Analytics;