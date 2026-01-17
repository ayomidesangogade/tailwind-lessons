import { useState } from "react";

function TenthLesson() {
    const [count, setCount] = useState(0);
    return (
        <div className="flex justify-center h-screen items-center text-4xl">
            <div>
                <button className="bg-red-400 text-white py-4 cursor-pointer hover:bg-red-600 w-12" onClick={() => setCount(prev => prev + 1)}>+</button>
                <span className="p-4 font-bold text-neutral-400">{count}</span>
                <button className="bg-green-400 text-white py-4 cursor-pointer hover:bg-green-600 w-12" onClick={() => setCount(prev => prev - 1)}>-</button>
            </div>
        </div>
    )
}

export default TenthLesson;