import Button from "../components/Button";

function NinthLesson() {
    return (
        <div className="flex flex-col items-center p-2">
            <div className="m-4 border-2 border-green-200 py-8 px-8 rounded-md bg-green-100">
                <Button backgroundColour={"bg-green-400"}/>
            </div>
            <div className="m-4 border-2 border-blue-200 py-8 px-8 rounded-md bg-blue-100">
                <Button backgroundColour={"bg-blue-400"}/>
            </div>
            <div className="m-4 border-2 border-rose-200 py-8 px-8 rounded-md bg-rose-100">
                <Button backgroundColour={"bg-rose-400"}/>
            </div>
        </div>
    )
}

export default NinthLesson;