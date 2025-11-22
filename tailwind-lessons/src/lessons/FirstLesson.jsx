import {Link} from "react-router-dom";
import {useState} from "react";

function FirstLesson() {
    const [showPractice, setShowPractice] = useState(false);

    return (
        <>
            <div className="flex justify-between m-4">
                <button onClick={() => setShowPractice(prev => !prev)} className="cursor-pointer bg-green-400 hover:bg-green-600 p-4 text-white duration-500 rounded-md">{showPractice ? "Show lesson" : "Show practice"}</button>
                <Link to="/second-lesson" className="bg-red-400 hover:bg-red-600 duration-500 p-4 text-white rounded-md">Next lesson</Link>
            </div>
            {!showPractice && <div>
                <div className="text-rose-300 text-lg bg-red-700">One</div>
                <div className="text-slate-300 border-x-8 border-y-2 border-slate-400">Two</div>
                <div className="text-3xl text-purple-300 bg-emerald-500">Three</div>
                <div className="text-xl text-purple-300 border-sky-400 border-4">Four</div>
                <div className="text-xl text-purple-500 border-l-4 border-purple-400 bg-violet-300">Five</div>
            </div>}

            {showPractice && <div>
                <div className="text-rose-300 bg-red-500 border-yellow-400 border-4">One</div>
                <div className="text-xl text-purple-300 border-l-4 border-violet-300 bg-slate-300">Two</div>
                <div className="text-lg text-red-400 border-x-4 border-y-8 border-blue-300">Three</div>
                <div className="text-sm text-yellow-300 bg-red-400 border-x-4 border-red-500">Four</div>
                <div className="text-sm text-yellow-400 border-red-400 border-x-4 bg-violet-400">Five</div>
            </div>}
        </>
    )
}

export default FirstLesson;