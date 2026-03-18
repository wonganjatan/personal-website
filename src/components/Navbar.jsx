import { useState } from "react"

function NavBar() {
    return (
        <nav className="fixed w-full bg-gray-900 bg-opacity-90">
            <div className="px-6 flex justify-between items-center h-16">
                <div className="text-2xl font-bold text-white">
                    William Hok
                </div>

                <ul className="text-white flex gap-4">
                    <li><a href="#hero" className="hover:text-gray-300">Home</a></li>
                    <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
                    <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
                    <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar