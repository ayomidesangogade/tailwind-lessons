import { useState } from "react";

function EighthLesson() {
    const [message, setMessage] = useState("hello world!!");

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="mb-4 text-stone-400 text-3xl">{message}</div>
            <div className="text-white">
                <button className="bg-cyan-500 px-4 py-2 m-2 cursor-pointer rounded-sm" onClick={() => setMessage("yayyyy")}>one</button>
                <button className="bg-purple-500 px-4 py-2 m-2 cursor-pointer rounded-sm" onClick={() => setMessage("wooooo")}>two</button>
                <button className="bg-yellow-500 px-4 py-2 m-2 cursor-pointer rounded-sm" onClick={() => setMessage("byeeee")}>three</button>
            </div>
        </div>
    )
}

export default EighthLesson;