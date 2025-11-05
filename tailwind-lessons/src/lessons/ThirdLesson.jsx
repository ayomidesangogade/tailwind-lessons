import {Link} from "react-router-dom";

function ThirdLesson() {
    const boolean = false;

    return (
        <>
            <div className={`${boolean ? 'bg-purple-500' : 'bg-red-500'} text-white`}>Test</div>
            <div className="text-blue-300 bg-red-600 border-y-4 border-black">first</div>
            <div>
                <button className="bg-green-600 text-white px-8 py-2 rounded-md m-4">Green</button>
                <button className="bg-blue-500 text-white px-8 py-2 rounded-lg mr-4">Blue</button>
                <button className="bg-red-400 text-white py-2 px-8 rounded-xl mr-4">Red</button>
                <button className="bg-slate-200 px-8 py-2 rounded-md">Grey</button>
                <button className="bg-black px-8 py-2 text-white ml-4 rounded-md">Black</button>
            </div>
            <div className="mt-4">
                <button className="border border-green-600 px-8 py-2 m-4 rounded-md hover:bg-green-600 hover:text-white">Green</button>
                <button className="border border-blue-500 py-2 px-8 rounded-md hover:bg-blue-500 hover:text-white mr-4">Blue</button>
                <button className="border border-red-400 rounded-md px-8 py-2 hover:bg-red-400 hover:text-white mr-4">Red</button>
                <button className="border border-slate-200 px-8 py-2 rounded-md hover:bg-slate-200 mr-4">Grey</button>
                <button className="border rounded-md px-8 py-2 hover:bg-black hover:text-white">Black</button>
            </div>
            <div className="mt-4">
                <Link to="/fourth-lesson">fourth lesson</Link>
            </div>
        </>
    )
}

export default ThirdLesson;