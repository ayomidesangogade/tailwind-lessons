function Button({backgroundColour, changes}) {
    return <button className={`py-2 px-4 rounded-full text-white ${backgroundColour} cursor-pointer`} onClick={() => changes(prev => !prev)}>click me</button>
}

export default Button; 