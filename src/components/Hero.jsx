import React from 'react';
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div className='banner cs-style_1' id="home">
            {/* CSS shapes */ }
            <div className="cs-shape_1"></div>
            <div className="cs-shape_1"></div>
            <div className="cs-shape_1"></div>

            {/* Banner content */ }
            <div className="px-4 lg:px-24">
                <h1 className="md:w-2/3 lg:text-8x1 sm:text-8x1 sm:text-6xl text-5xl md-5 text-white font-bold lg:leading-snug sm:leading-snug leading-snug">Creativity In Our Blood Line</h1>

            {/* Botão e texto */ }
            <div className="text-white text-lg flex md:flex-row flex-col-reverse md:items-center items-start justify-between gap-8">
                <div>
                    <a href="" className="inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-300 ease-in"><span>Get a Quote</span> <GoArrowRight/></a>
                </div>
                <div className="md:w-1/2">
                    <p className="">We deliver best problem solving solution for our client and provide finishing product in present and upcoming future.</p>
                </div>
            </div>
            </div>

            {/* Seta de rolagem para a seção de services */ }
            <Link to="services" smooth={true} className="cs-down_btn md:mt-20 mt-8">.</Link>
        </div>
    );
};

export default Hero;
