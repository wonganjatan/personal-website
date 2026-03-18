import { useState } from "react"

function Introduction() {
    return (
        <section>
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-2xl">
                <h1>
                    Hi, I am <span className="border-b border-current">William Hok</span>
                </h1>
                <p>
                    A passionate RMIT Computer Science student from Indonesia.
                    I am interested to build scalable applications, learning 
                    technologies, and contributing to projects that solve real
                    world problems.
                </p>
                <p className="pt-4">
                    Find me on <a href="https://github.com/wonganjatan" target="_blank" className="text-blue-500 hover:border-b hover:border-blue-500 transition-all duration-300 ease-in-out">GitHub</a> and <a href="https://www.linkedin.com/in/william-hok-078aa63b7/" target="blank" className="text-blue-500 hover:border-b hover:border-blue-500 transition-all duration-300 ease-in-out">LinkedIn</a>
                </p>
            </div>
            
        </section>
    )
}

export default Introduction