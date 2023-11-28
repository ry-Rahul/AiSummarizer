import React from "react";
import logo from "../assets/logo.svg";

const Hero = () => {
    return (
        <header className="flex  w-full justify-center items-center flex-col">
            <nav className="flex flex-row justify-between items-center w-full py-3 mb-10">
                <img src={logo} alt="logo" className="w-28 object-contain" />
                <button
                    type="button"
                    className="black_btn"
                    onClick={() => window.open("https://github.com/ry-Rahul")}
                >
                    Github
                </button>
            </nav>

            <h1 className="head_text">
                Summarized Articles with <br className="max:md-hidden" />
                <span className="orange_gradient">OpenAI GPT-4</span>
            </h1>

            <h2 className="desc">
                Simplify your reading with Summize, an open-source article
                summarizer that transforms lengthy articles into clear and
                concise summaries Demo
            </h2>
        </header>
    );
};

export default Hero;
