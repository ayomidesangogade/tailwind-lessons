import {Link, Outlet} from "react-router-dom";

function FirstLesson() {
    return (
        <>
            <div className="text-rose-300 text-lg bg-red-700">One</div>
            <div className="text-slate-300 border-x-8 border-y-2 border-slate-400">Two</div>
            <div className="text-3xl text-purple-300 bg-emerald-500">Three</div>
            <div className="text-xl text-purple-300 border-sky-400 border-4">Four</div>
            <div className="text-xl text-purple-500 border-l-4 border-purple-400 bg-violet-300">Five</div>

            <div>
                <Link to="/practice">practice</Link> | <Link to="/second-lesson">second lesson</Link>
                <Outlet />
            </div>
        </>
    )
}

export default FirstLesson;