function SixthLesson() {
    return (
        <div className="flex flex-col items-center m-12">
            {/* <div className="bg-red-400 mb-[15px] w-[180px]">one</div>
            <div className="bg-blue-400 w-[560px]">two</div> */}
            <div className="flex flex-col mb-16">
                <div className="bg-cyan-600 py-8 px-6 text-cyan-200 rounded-t-lg w-[400px]">One of my most productive days was throwing away 1000 lines of code.</div>
                <div className="bg-stone-100 p-4 flex flex-col items-center rounded-b-lg border border-stone-200">
                    <div className="text-cyan-700 text-xl mb-2">Ken Thompson</div>
                    <div className="text-stone-400">Designer of Unix Opearting System</div>
                </div>
            </div>
            <div className="flex">
                <div className="bg-blue-500 p-4">
                    <div>Admiral Grace Hopper</div>
                    <div>Inventor of Programming Compilers</div>
                </div>
                <div className="flex items-center border border-stone-400 rounded-r-full p-4">A ship in port is safe, but that's not what ships are built for.</div>
            </div>
        </div>
    )
}

export default SixthLesson;