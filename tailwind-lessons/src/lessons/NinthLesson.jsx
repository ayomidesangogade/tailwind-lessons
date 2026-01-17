import { SmileIcon, IceCream } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";

function NinthLesson() {
    const [showChanges, setShowChanges] = useState(false);
    const [changeColour, setChangeColour] = useState(false);
    const [showIcon, setShowIcon] = useState(false);

    return (
        <>
            <div className="m-4 flex justify-between">
                <Link to="/eighth-lesson" className="bg-red-400 text-white px-2 py-4 rounded-md hover:bg-red-600 duration-500">Previous lesson</Link>
                <Link to="/tenth-lesson" className="bg-green-400 text-white px-2 py-4 rounded-md hover:bg-green-600 duration-500">Next lesson</Link>
            </div>
            <div className="flex flex-col items-center">
                <div className="my-4 border-2 border-green-200 flex flex-col items-center p-8 rounded-md bg-green-100">
                    {showChanges && <SmileIcon size={40} className="mb-4 text-green-400" />}
                    <Button backgroundColour={"bg-green-400"} changes={setShowChanges}/>
                </div>
                <div className="my-4 border-2 border-blue-200 p-8 rounded-md bg-blue-100">
                    <Button backgroundColour={changeColour ? "bg-orange-400" : "bg-blue-400"} changes={setChangeColour}/>
                </div>
                <div className="my-4 border-2 border-rose-200 flex flex-col items-center p-8 rounded-md bg-rose-100">
                    {showIcon && <IceCream size={40} className="mb-4 text-rose-400" />}
                    <Button backgroundColour={"bg-rose-400"} changes={setShowIcon}/>
                </div>
            </div>
        </>
    )
}

export default NinthLesson;