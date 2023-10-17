import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="bg-gray-900 text-white py-4">
            <div className="container mx-auto flex items-center justify-between">
                <ul className="flex gap-2">
                    <li><a href="#about">about</a></li>
                    <span className="text-gray-400">|</span> {/* Separator */}
                    <li><a href="#blog">blog</a></li>
                    <span className="text-gray-400">|</span> {/* Separator */}
                    <li><a href="#contact">contact</a></li>
                </ul> 
            </div>
        </nav>
    );
}
