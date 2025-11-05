import FancyButton from "../components/FancyButton";
import {Link} from "react-router-dom";

function FourthLesson() {
    return (
        <>
            <FancyButton>click me</FancyButton>
            <FancyButton large={true}>submit</FancyButton>
            <div className="mt-4">
                <Link to="/fifth-lesson">fifth lesson</Link>
            </div>
        </>
    )
}

export default FourthLesson;