import {User} from "lucide-react";

function Header() {
    return (
        <header className="flex justify-between bg-orange-200 px-4 py-4 text-orange-600">
            <div>
                <span className="mx-4">About</span>
                <span className="mx-4">Store</span>
            </div>
            <div className="flex">
                <span className="mx-4">Preferences</span>
                <span className="mx-4 text-violet-600"><User /></span>
            </div>
        </header>
    )
}

export default Header;