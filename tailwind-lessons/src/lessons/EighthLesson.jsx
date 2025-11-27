import { useState } from "react";
import { Link } from "react-router-dom";

function EighthLesson() {
    const [message, setMessage] = useState("hello world!!");

    return (
        <div className="flex flex-col h-screen">
            <div className="m-4 flex justify-between">
                <Link to="/seventh-lesson" className="px-2 py-4 bg-red-400 rounded-md hover:bg-red-600 text-white duration-500">Previous lesson</Link>
                <Link to="/ninth-lesson" className="px-2 py-4 bg-green-400 hover:bg-green-600 rounded-md text-white duration-500">Next lesson</Link>
            </div>
            <div className="flex flex-col justify-center items-center flex-1">
                <div className="mb-4 text-stone-400 text-3xl">{message}</div>
                <div className="text-white">
                    <button className="bg-cyan-500 px-4 py-2 m-2 cursor-pointer rounded-sm" onClick={() => setMessage("yayyyy")}>one</button>
                    <button className="bg-purple-500 px-4 py-2 m-2 cursor-pointer rounded-sm" onClick={() => setMessage("wooooo")}>two</button>
                    <button className="bg-yellow-500 px-4 py-2 m-2 cursor-pointer rounded-sm" onClick={() => setMessage("byeeee")}>three</button>
                </div>
            </div>
        </div>
    )
}

export default EighthLesson;