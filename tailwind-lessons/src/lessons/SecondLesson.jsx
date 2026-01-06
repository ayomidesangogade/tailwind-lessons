import {Link} from "react-router-dom";
import { useState } from "react";

function SecondLesson() {
    const [showPractice, setShowPractice] = useState(false);

    return (
        <>
            <div className="flex justify-between mx-4 mt-4">
                <Link to="/" className="bg-green-400 text-white hover:bg-green-600 px-2 py-4 rounded-md duration-500 cursor-pointer">Previous lesson</Link>
                <button onClick={() => setShowPractice(prev => !prev)} className="border border-green-400 px-2 py-4 hover:bg-green-400 cursor-pointer duration-500 rounded-md hover:text-white">{showPractice ? "Show Lesson" : "Show Practice"}</button>
                <Link to="/third-lesson" className="bg-red-400 hover:bg-red-600 px-2 py-4 rounded-md duration-500 cursor-pointer text-white">Next lesson</Link>
            </div>
            {!showPractice && <div>
                <button className="text-green-400 border border-green-600 px-8 py-2 m-4 rounded-md">first</button>
                <button className="bg-sky-300 px-16 py-2 rounded-md mr-4 text-white">second</button>
                <button className="text-purple-700 bg-purple-200 px-8 py-2 rounded-full mr-4">third</button>
                <button className="bg-cyan-700 px-8 py-8 rounded-md mt-4 text-cyan-200 hover:bg-cyan-200 hover:text-cyan-700">fourth</button>
            </div>}
            {showPractice && <div>
                <button className="border-red-700 border text-red-300 m-4 py-2 px-8 rounded-md hover:bg-yellow-200">One</button>
                <button className="bg-green-700 px-12 py-4 text-white rounded-full hover:bg-green-300 mr-4">Two</button>
                <button className="bg-yellow-500 text-white px-16 py-4 rounded-xl mr-4 hover:bg-yellow-300">Third</button>
                <button className="bg-red-700 py-8 px-8 text-white text-2xl rounded-full hover:bg-red-300">STOP</button>
            </div>}
        </>
    )
}

export default SecondLesson;