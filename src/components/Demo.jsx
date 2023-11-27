import { useState } from "react";
import { linkIcon } from "../assets";
import Alert from "./Alert";
import useAlert from "../hooks/useAlert";

function Demo() {

    const [article, setArticle] = useState({
        url: "",
        summary: "",
    });

    const handleOnSubmit = (e) => {

        e.preventDefault();
        console.log("submit");
    };


    return (
        <section className="mt-16 w-full  max-w-xl">
            {/* search */}
            <div className="flex flex-col w-full gap-2">
                <form
                    action=""
                    className="relative flex justify-center items-center"
                    onSubmit={handleOnSubmit}
                >
                    <img
                        src={linkIcon}
                        alt="link icon"
                        className="absolute left-0 my-2 ml-3 w-5"
                    />
                    <input
                        type="url"
                        placeholder="Enter a URL"
                        value="https://github.com/"
                        required
                        onChange={() => {}}
                        className="url_input peer"
                    />
                    <button
                        type="submit"
                        className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
                    >
                        ↵
                    </button>
                </form>
                {/* browse url history */}
            </div>
            {/* Display result */}
        </section>
    );
}

export default Demo;
