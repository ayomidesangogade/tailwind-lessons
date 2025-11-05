import Box from "../components/Box";

function FifthLesson() {
    return (
        <>
            <div className="border-blue-400 border-2 p-4 m-4 flex h-64 justify-center">
                <Box />
                <Box />
                <Box />
            </div>
            <div className="border-red-400 border-2 p-4 m-4 flex h-64 justify-between">
                <Box />
                <Box />
                <Box />
            </div>
            <div className="border-2 border-green-400 p-4 m-4 flex h-64 justify-center items-center">
                <Box />
                <Box />
                <Box />
            </div>
            <div className="border-2 border-purple-400 p-4 m-4 flex h-64 justify-around items-end">
                <Box />
                <Box />
                <Box />
            </div>
            <div className="border-2 border-orange-400 p-4 m-4 flex h-64 justify-between items-center">
                <Box />
                <Box />
                <Box />
            </div>
        </>
    )
}

export default FifthLesson;