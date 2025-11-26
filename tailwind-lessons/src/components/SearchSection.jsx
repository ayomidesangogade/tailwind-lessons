import { SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";

function SearchSection() {
    return (
        <div className="bg-orange-100 flex flex-col justify-center items-center flex-1">
            <div className="text-6xl text-orange-500 mb-4">Foogle</div>
            <div className="bg-orange-200 w-80 px-2 py-4 rounded-full text-orange-400 flex">
                <SearchIcon className="mr-1"/>
                <input className="flex-1" />
            </div>
            <div className="mt-4">
                <Link className="m-1 bg-violet-200 text-violet-400 cursor-pointer px-4 py-2 rounded-md" to="/sixth-lesson">Previous Lesson</Link>
                <Link className="m-1 bg-violet-200 text-violet-400 px-4 py-2 cursor-pointer rounded-md" to="/eighth-lesson">Next Lesson</Link>
            </div>
        </div>
    )
}

export default SearchSection;