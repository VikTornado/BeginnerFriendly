import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div className={"text-white px-4"}>
            <div
                className={"max-w-[800px] mt-[-96px] h-screen m-auto text-center flex flex-col items-center justify-center"}>
                <p className={"text-[#00df9a] font-bold uppercase"}>Growing with data analytics</p>
                <h1 className={"md:text-7xl sm:text-6xl text-4xl font-bold md:py-6"}>Grow with data</h1>
                <div className={"flex justify-center items-center"}>
                    <p className={"md:text-5xl sm:text-4xl text-xl font-bold py-4"}>Fast, flexible financing for</p>
                    <Typed className={"md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4 pl-2"} strings={[
                        'BTB', 'BTC', 'SASS']}
                           typeSpeed={120}
                           backSpeed={140}
                           loop
                    />
                </div>
                <p className={"md:text-2xl text-xl font-bold text-gray-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam architecto aut consectetur
                    dolore dolorem eaque error, et, eum eveniet ex exercitationem itaque neque quisquam reiciendis,
                    repudiandae soluta vitae voluptas?
                </p>
                <button className={"bg-[#00df9a] my-6 mx-auto py-3 text-black w-[200px] rounded-md font-medium"}>Get Stared</button>
            </div>
        </div>
    );
};

export default Hero;