import {useState} from "react";
import {Link} from "react-router-dom";
import Box from "../components/Box";

function FifthLesson() {
    const [showPractice, setShowPractice] = useState(false);

    return (
        <>
            <div className="flex justify-between m-4">
                <Link className="border p-4 bg-green-400 hover:bg-green-600 duration-500 rounded-md text-white" to="/fourth-lesson">Previous lesson</Link>
                <button onClick={() => setShowPractice(prev => !prev)} className="border border-green-400 px-8 py-4 rounded-md hover:bg-green-400 hover:text-white duration-500">{showPractice ? "Show lesson" : "Show practice"}</button><Link to="/sixth-lesson" className="border p-4 bg-red-400 hover:bg-red-600 duration-500 rounded-md text-white">Next Lesson</Link>
            </div>
            {!showPractice && <div>
                <div className="border-blue-400 border-2 p-4 m-4 flex h-64 justify-center">
                    <Box padding={"p-12"}/>
                    <Box padding={"p-12"}/>
                    <Box padding={"p-12"}/>
                </div>
                <div className="border-red-400 border-2 p-4 m-4 flex h-64 justify-between">
                    <Box padding={"p-12"}/>
                    <Box padding={"p-12"}/>
                    <Box padding={"p-12"}/>
                </div>
                <div className="border-2 border-green-400 p-4 m-4 flex h-64 justify-center items-center">
                    <Box padding={"p-12"}/>
                    <Box padding={"p-12"}/>
                    <Box padding={"p-12"}/>
                </div>
                <div className="border-2 border-purple-400 p-4 m-4 flex h-64 justify-around items-end">
                    <Box padding={"p-12"}/>
                    <Box padding={"p-12"}/>
                    <Box padding={"p-12"}/>
                </div>
                <div className="border-2 border-orange-400 p-4 m-4 flex h-64 justify-between items-center">
                    <Box padding={"p-12"}/>
                    <Box padding={"p-12"}/>
                    <Box padding={"p-12"}/>
                </div>
            </div>}
            
            {showPractice && <div>
                <div className="border-blue-400 h-64 border-2 m-4 p-4 rounded-full flex justify-around items-end">
                    <Box padding={"p-12"}/>
                    <Box padding={"p-12"}/>
                    <Box padding={"p-12"}/>
                </div>
                <div className="border-2 border-slate-400 p-4 m-4 h-64 flex flex-col items-center justify-end">
                    <Box padding={"p-4"} />
                    <Box padding={"p-4"} />
                    <Box padding={"p-4"} />
                </div>
                <div className="border-2 border-grey-400 p-4 h-64 m-4 flex flex-col items-center justify-between">
                    <Box padding={"p-4"} />
                    <Box padding={"p-4"} />
                    <Box padding={"p-4"} />
                </div>
                <div className="border-2 border-red-400 h-64 p-4 m-4 flex flex-col items-end justify-between">
                    <Box padding={"p-4"} />
                    <Box padding={"p-4"} />
                    <Box padding={"p-4"} />
                </div>
            </div>}
        </>
    )
}

export default FifthLesson;