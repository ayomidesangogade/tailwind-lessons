import { SmileIcon, IceCream } from "lucide-react";
import Button from "../components/Button";
import { useState } from "react";

function NinthLesson() {
    const [showChanges, setShowChanges] = useState(false);
    const [changeColour, setChangeColour] = useState(false);
    const [showIcon, setShowIcon] = useState(false);

    return (
        <div className="flex flex-col items-center p-2">
            <div className="m-4 border-2 border-green-200 flex flex-col items-center p-8 rounded-md bg-green-100">
                {showChanges && <SmileIcon size={40} className="mb-4 text-green-400" />}
                <Button backgroundColour={"bg-green-400"} changes={setShowChanges}/>
            </div>
            <div className="m-4 border-2 border-blue-200 p-8 rounded-md bg-blue-100">
                <Button backgroundColour={changeColour ? "bg-orange-400" : "bg-blue-400"} changes={setChangeColour}/>
            </div>
            <div className="m-4 border-2 border-rose-200 flex flex-col items-center p-8 rounded-md bg-rose-100">
                {showIcon && <IceCream size={40} className="mb-4 text-rose-400" />}
                <Button backgroundColour={"bg-rose-400"} changes={setShowIcon}/>
            </div>
        </div>
    )
}

export default NinthLesson;