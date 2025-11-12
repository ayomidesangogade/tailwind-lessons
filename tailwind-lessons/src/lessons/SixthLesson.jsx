import {Link} from "react-router-dom";

function SixthLesson() {
    return (
        <div className="flex flex-col items-center m-12">
            <div className="flex justify-between w-full">
                <Link className="border p-4 bg-green-400 hover:bg-green-600 duration-500 rounded-md text-white" to="/fifth-lesson">Previous lesson</Link>
                <Link className="border p-4 bg-red-400 hover:bg-red-600 duration-500 rounded-md text-white" to="">Next lesson</Link>
            </div>
            {/* <div className="bg-red-400 mb-[15px] w-[180px]">one</div>
            <div className="bg-blue-400 w-[560px]">two</div> */}
            <div className="flex flex-col mb-16 mt-8">
                <div className="bg-cyan-600 py-8 px-6 text-cyan-200 rounded-t-lg w-[400px]">One of my most productive days was throwing away 1000 lines of code.</div>
                <div className="bg-stone-100 p-4 flex flex-col items-center rounded-b-lg border border-stone-200">
                    <div className="text-cyan-700 text-xl mb-2">Ken Thompson</div>
                    <div className="text-stone-400">Designer of Unix Opearting System</div>
                </div>
            </div>
            <div className="flex mb-16">
                <div className="bg-blue-800 p-4 rounded-l-md w-64 border-blue-800">
                    <div className="text-white text-2xl mb-2">Admiral Grace Hopper</div>
                    <div className="text-blue-300">Inventor of Programming Compilers</div>
                </div>
                <div className="flex items-center border border-stone-400 rounded-r-full p-4 w-80">A ship in port is safe, but that's not what ships are built for.</div>
            </div>
            <div className="flex flex-col items-start">
                <div className="border border-rose-500 p-6 bg-rose-500 text-white rounded-r-md rounded-tl-md text-lg">If you optimise everything, you will always be unhappy.</div>
                <div className="border-b border-l border-r border-rose-500 p-4 rounded-b-md bg-pink-100">
                    <div className="text-rose-800 font-bold">Donald Kruth</div>
                    <div className="text-rose-500">Pioneer of Algorithm Analysis</div>
                </div>
            </div>
        </div>
    )
}

export default SixthLesson;