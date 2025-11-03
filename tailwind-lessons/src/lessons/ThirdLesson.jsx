function ThirdLesson() {
    const boolean = false;

    return (
        <div className={`${boolean ? 'bg-purple-500' : 'bg-red-500'} text-white`}>Test</div>
    )
}

export default ThirdLesson;