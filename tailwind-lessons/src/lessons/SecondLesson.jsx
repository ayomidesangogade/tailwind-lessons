import {Link, Outlet} from "react-router-dom";

function SecondLesson() {
    return (
        <>
            <button className="text-green-400 border border-green-600 px-8 py-2 m-4 rounded-md">first</button>
            <button className="bg-sky-300 px-16 py-2 rounded-md mr-4 text-white">second</button>
            <button className="text-purple-700 bg-purple-200 px-8 py-2 rounded-full mr-4">third</button>
            <button className="bg-cyan-700 px-8 py-8 rounded-md mt-4 text-cyan-200 hover:bg-cyan-200 hover:text-cyan-700">fourth</button>

            <div>
                <Link to="/second-lesson/practice">practice</Link> | <Link to="/third-lesson">third lesson</Link>
            </div>
            <Outlet />
        </>
    )
}

export default SecondLesson;