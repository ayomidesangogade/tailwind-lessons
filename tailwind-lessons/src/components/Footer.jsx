import { Heart } from "lucide-react";

function Footer() {
    return (
        <footer className="p-2 bg-violet-100 text-violet-400 flex justify-between">
            <div>(this site is not real)</div>
            <div>made with <Heart style={{display: "inline"}} className="text-red-600"/> and <a href="https://tailwindcss.com" target="_blank" className="underline text-violet-500">tailwind.css</a></div>
            <div>by Sangogade Ayomide</div>
        </footer>
    )
}

export default Footer;